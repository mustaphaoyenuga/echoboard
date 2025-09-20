"use client";

import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

import { useBoardStore } from "@/store/useBoardStore";
import AddItemButton from "./AddItemButton";
import ColumnCard from "./ColumnCard";
import { Column } from "@/types";

const ColumnList = ({ columns }: { columns: Column[] }) => {
  const addColumnCard = useBoardStore((state) => state.addColumnCard);
  const moveColumnCard = useBoardStore((state) => state.moveColumnCard);
  const moveTaskCard = useBoardStore((state) => state.moveTaskCard);

  const handleDragEnd = (result: DropResult) => {
    const { destination, type, source } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (type === "COLUMN") {
      moveColumnCard(source.index, destination.index);
    }
    if (type === "CARD") {
      moveTaskCard(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='columns' direction='horizontal' type='COLUMN'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='flex items-start gap-x-5'
          >
            {columns.map((column, index) => (
              <ColumnCard key={column.id} column={column} index={index} />
            ))}

            {provided.placeholder}

            <AddItemButton
              buttonText='Add another list'
              onAdd={(text) => addColumnCard(text)}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ColumnList;
