import { User2 } from "lucide-react";
import BoardList from "../_components/BoardList";

const BoardsPage = () => {
  return (
    <div className='space-y-4 '>
      <div className='flex items-center font-semibold text-lg text-neutral-700'>
        <User2 className='size-6 mr-2' />
        Your boards
      </div>
      <BoardList />
    </div>
  );
};

export default BoardsPage;