import { DraggableProvidedDragHandleProps } from "@hello-pangea/dnd";
import ColumnDropDownMenu from "./ColumnDropDownMenu";

interface ColumnHeaderProps {
  title: string;
  numOfTasks: number;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
}
const ColumnHeader = ({
  title,
  numOfTasks,
  dragHandleProps,
}: ColumnHeaderProps) => {
  return (
    <div className='flex items-center px-2 pt-1.5 pb-3 cursor-grab'>
      <h2 {...dragHandleProps} className='font-bold flex-1'>
        {title} <span className='ml-1'>({numOfTasks})</span>
      </h2>
     <ColumnDropDownMenu />
    </div>
  );
};

export default ColumnHeader;
