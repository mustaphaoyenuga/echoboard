import AddNewItem from "./AddNewItem";

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

const Column = ({ title, children }: ColumnProps) => {
  return (
    <div className='border bg-[#ebecf099] text-gray-900 w-[300px] min-h-10 rounded-sm p-2 grow-0'>
      <h2 className='font-bold px-4 pt-1.5 pb-3'>{title}</h2>
      {children}
      <AddNewItem toggleButtonText='+ Add another task' />
    </div>
  );
};

export default Column;
