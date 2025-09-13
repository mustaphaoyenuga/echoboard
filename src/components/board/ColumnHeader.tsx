import { Ellipsis, TriangleAlert } from "lucide-react";
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
  DialogClose,
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
              <DialogTrigger asChild>
                <DropdownMenuItem variant='destructive'>
                  Delete
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-x-2"><TriangleAlert className="text-red-500 w-6 h-6" />Delete Card</DialogTitle>
              <DialogDescription>
                Are you sure you want to permanently delete the{" "}
                <span className="font-bold text-black">{column.title}</span> Card from your board?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
             <DialogClose asChild>
               <Button type='button' variant='secondary' className="cursor-pointer">
                Cancel
              </Button>
             </DialogClose>
               <Button
                type='button'
                variant='destructive'
                className="cursor-pointer"
                onClick={() => deleteBoardColumn(column.id)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardAction>
    </CardHeader>
  );
};

export default ColumnHeader;
