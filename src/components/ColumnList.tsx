"use client";

import { useBoardStore } from "@/store/useBoardStore";
import BoardColumn from "./BoardColumn";
import AddItemButton from "./AddItem";

const ColumnList = () => {
  const columns = useBoardStore((state) => state.columns);
  const addBoardColumn = useBoardStore((state) => state.addBoardColumn);

  return (
    <div className='flex items-start gap-x-5'>
      {columns.map((column) => (
        <div key={column.id} className='shrink-0'>
          <BoardColumn
            id={column.id}
            title={column.title}
            tasks={column.tasks}
          />
        </div>
      ))}

      <AddItemButton
        buttonText=' + Add another list'
        onAdd={(text) => addBoardColumn(text)}
      />
    </div>
  );
};

export default ColumnList;
