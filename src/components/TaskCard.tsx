interface TaskCardProps {
  id: string;
  title: string;
}
const TaskCard = ({ id, title }: TaskCardProps) => {
  return (
    <div className='bg-white py-2 px-4 rounded-sm max-w-[300px] shadow-md mb-3'>
      {title}
    </div>
  );
};

export default TaskCard;
