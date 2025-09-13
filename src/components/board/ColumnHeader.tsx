import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import { CardAction, CardHeader, CardTitle } from "../ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useBoardStore } from "@/store/useBoardStore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ColumnHeaderProps {
  column: { id: string; title: string };
  dragHandleProps?: any;
}
const ColumnHeader = ({ column, dragHandleProps }: ColumnHeaderProps) => {
  const deleteBoardColumn = useBoardStore((state) => state.deleteBoardColumn);
  const getTasksByListId = useBoardStore((state) => state.getTasksByListId);
  const tasks = getTasksByListId(column.id);

  return (
    <CardHeader {...dragHandleProps}>
      <CardTitle>
        {column.title} ({tasks.length})
      </CardTitle>
      <CardAction>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='size-8'>
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions...</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DialogTrigger>
                <DropdownMenuItem variant='destructive'>
                  Delete
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure ?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to
                permanently delete this Card from your board?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type='submit' variant='destructive' onClick={()=> deleteBoardColumn(column.id)}>
                Delete
              </Button>
              <Button type='submit' variant='outline' onClick={() => {}}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardAction>
    </CardHeader>
  );
};

export default ColumnHeader;
