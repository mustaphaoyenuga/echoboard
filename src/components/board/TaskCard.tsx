import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
  task: { id: string; title: string };
  index: number;
}
const TaskCard = ({ task, index }: TaskCardProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`py-2 px-4 rounded-sm max-w-[300px] shadow-md mb-2 ${snapshot.isDragging ? 'rotate-2 shadow-xl bg-teal-50':'bg-white'}`}
          style={{ ...provided.draggableProps.style }}
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
