import { Task } from "@/types";
import AddNewItem from "./AddItem";
import Card from "./TaskCard";
import { useBoardStore } from "@/store/useBoardStore";

interface BoardColumnProps {
  title: string;
  id: string;
  tasks: Task[];
}

const BoardColumn = ({ title, id, tasks }: BoardColumnProps) => {
  const addTaskCard = useBoardStore((state) => state.addTaskCard);
  return (
    <div className='bg-[#ebecf099] text-gray-900 w-[300px] min-w-[300px] min-h-10 rounded-sm p-2 shrink-0'>
      <h2 className='font-bold px-4 pt-1.5 pb-3 cursor-grab'>{title}</h2>
      <div>
        {tasks.map((task) => (
          <Card key={task.id} title={task.title} id={task.id} />
        ))}
      </div>
      <AddNewItem
        buttonText='+ Add another task'
        onAdd={(text) => addTaskCard(id, text)}
      />
    </div>
  );
};

export default BoardColumn;
