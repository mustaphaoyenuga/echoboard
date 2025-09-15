import { Columns2 } from "lucide-react";

const Logo = () => {
  return (
    <div className='text-2xl text-brand-500 dark:text-brand-400  font-extrabold uppercase flex items-center h-8 w-auto'>
      Echo <Columns2 size={30} />
      Board
    </div>
  );
};

export default Logo;
