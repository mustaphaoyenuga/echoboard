"use client";

import { useBoardStore } from "@/store/useBoardStore";
import TaskColumn from "./TaskColumn";
import AddItemButton from "./AddItem";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

const ColumnList = () => {
  const columns = useBoardStore((state) => state.columns);
  const addTaskColumn = useBoardStore((state) => state.addTaskColumn);
  const moveTaskColumn = useBoardStore((state) => state.moveTaskColumn);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;
    if (
      destination.droppableId == source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const draggedId = draggableId;
      const hoveredId = columns[destination.index].id;

      moveTaskColumn(draggedId, hoveredId);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='columns' direction='horizontal' type='column'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='flex items-start gap-x-5'
          >
            {columns.map((column, index) => (
              <Draggable key={column.id} draggableId={column.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className='shrink-0'
                  >
                    <TaskColumn
                      id={column.id}
                      title={column.title}
                      tasks={column.tasks}
                      dragHandleProps={provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}

            <AddItemButton
              buttonText=' + Add another list'
              onAdd={(text) => addTaskColumn(text)}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ColumnList;
