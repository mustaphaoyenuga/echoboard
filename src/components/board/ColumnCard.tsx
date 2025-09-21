import { Draggable } from "@hello-pangea/dnd";
import { Card, CardContent, CardFooter } from "../ui/card";

import { useBoardStore } from "@/store/useBoardStore";
import TaskList from "./TaskList";
import AddItemButton from "./AddItemButton";
import ColumnHeader from "./ColumnHeader";

type ColumnCardProps = {
  index: number;
  column: { id: string; title: string };
  boardId: string;
};
const ColumnCard = ({ index, column, boardId }: ColumnCardProps) => {
  const addTaskCard = useBoardStore((state) => state.addTask);
  return (
    <Draggable key={column.id} draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`bg-gray-50 w-[300px] min-w-[300px] shrink-0 pb-2 gap-3 ${
            snapshot.isDragging && "rotate-[4deg] opacity-90"
          }`}
          style={{ ...provided.draggableProps.style }}
        >
          <ColumnHeader
            column={column}
            boardId={boardId}
            dragHandleProps={provided.dragHandleProps}
          />

          <CardContent className='px-2'>
            <TaskList boardId={boardId} columnId={column.id} />
          </CardContent>

          <CardFooter className='px-2'>
            <AddItemButton
              buttonText='Add another task'
              onAdd={(text) => addTaskCard(column.id, text)}
            />
          </CardFooter>
        </Card>
      )}
    </Draggable>
  );
};

export default ColumnCard;
