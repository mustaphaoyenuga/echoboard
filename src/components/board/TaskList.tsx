import { useBoardStore } from "@/store/useBoardStore";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

const TaskList = ({ columnId }: { columnId: string }) => {
  const getTasksByListId = useBoardStore((state) => state.getTasksByListId);
  const tasks = getTasksByListId(columnId);

  return (
    <Droppable droppableId={columnId} type='CARD'>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`transition-all duration-200 rounded ${
            snapshot.isDraggingOver
              ? "bg-gray-100 border-2 border-teal-300 border-dashed"
              : ""
          } ${
            tasks.length === 0
              ? "bg-gray-50 border-gray-200 border-2 border-dashed"
              : ""
          }`}
        >
          {tasks.length === 0 && !snapshot.isDraggingOver && (
            <div className='text-gray-400 text-sm text-center py-1 rounded-md'>
              Drag and drop cards here
            </div>
          )}
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
