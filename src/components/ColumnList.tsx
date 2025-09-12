"use client";

import { useBoardStore } from "@/store/useBoardStore";
import BoardColumn from "./BoardColumn";
import AddItemButton from "./AddItem";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

const ColumnList = () => {
  const columns = useBoardStore((state) => state.columns);
  const addBoardColumn = useBoardStore((state) => state.addBoardColumn);
  const moveBoardColumn = useBoardStore((state) => state.moveBoardColumn);
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
      moveBoardColumn(source.index, destination.index);
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
              <Draggable key={column.id} draggableId={column.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`${
                      snapshot.isDragging && "rotate-[4deg] opacity-90"
                    }`}
                    style={{ ...provided.draggableProps.style }}
                  >
                    <BoardColumn
                      id={column.id}
                      title={column.title}
                      dragHandleProps={provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}

            <AddItemButton
              buttonText=' + Add another list'
              onAdd={(text) => addBoardColumn(text)}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ColumnList;
