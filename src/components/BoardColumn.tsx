import AddNewItem from "./AddItem";
import ColumnHeader from "./ColumnHeader";
import Card from "./TaskCard";
import { useBoardStore } from "@/store/useBoardStore";
import { DraggableProvidedDragHandleProps, Droppable } from "@hello-pangea/dnd";

interface BoardColumnProps {
  title: string;
  id: string;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
}

const BoardColumn = ({ title, id, dragHandleProps }: BoardColumnProps) => {
  const addTaskCard = useBoardStore((state) => state.addTaskCard);
  const getTasksByListId = useBoardStore((state) => state.getTasksByListId);
  const tasks = getTasksByListId(id);
  return (
    <div className='bg-[#ebecf0ee] text-gray-900 w-[300px] min-w-[300px] min-h-10 rounded-md p-2 shrink-0'>
      <ColumnHeader
        title={title}
        numOfTasks={tasks.length}
        dragHandleProps={dragHandleProps}
      />
      <Droppable droppableId={id} type='CARD'>
        {(provided, snapshot) => (
          <ol
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`
              transition-all duration-200 rounded p-2
              ${
                snapshot.isDraggingOver
                  ? "bg-gray-100 border-2 border-teal-300 border-dashed"
                  : ""
              }
              ${
                tasks.length === 0
                  ? "bg-gray-50 border-gray-200 border-2 border-dashed"
                  : ""
              }
            `}
          >
            {tasks.length === 0 && !snapshot.isDraggingOver && (
              <div className='text-gray-400 text-sm text-center py-2'>
                Drop cards here
              </div>
            )}
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </ol>
        )}
      </Droppable>
      <AddNewItem
        buttonText='+ Add another task'
        onAdd={(text) => addTaskCard(id, text)}
      />
    </div>
  );
};

export default BoardColumn;
