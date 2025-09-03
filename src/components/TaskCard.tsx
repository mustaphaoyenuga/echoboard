interface TaskCardProps {
  id: string;
  text: string;
}
const TaskCard = ({ id, text }: TaskCardProps) => {
  return (
    <div className='bg-white py-2 px-4 rounded-sm max-w-[300px] shadow-md mb-3'>
      {text}
    </div>
  );
};

export default TaskCard;
