"use client";

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
import { Badge } from "../ui/badge";
import { useState } from "react";
import RenameColumnForm from "./RenameColumnForm";

interface ColumnHeaderProps {
  column: { id: string; title: string };
  boardId: string;
  dragHandleProps?: any;
}
const ColumnHeader = ({ column, boardId, dragHandleProps }: ColumnHeaderProps) => {
  const deleteColumnCard = useBoardStore((state) => state.deleteColumnCard);
  const duplicateColumnCard = useBoardStore(
    (state) => state.duplicateColumnCard
  );
  const editColumnCardTitle = useBoardStore(
    (state) => state.editColumnCardTitle
  );
  const getTasksByColumnId = useBoardStore((state) => state.getTasksByColumnId);
  const tasks = getTasksByColumnId(boardId, column.id);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <CardHeader {...dragHandleProps}>
      <CardTitle className='flex items-center'>
        {isEditing ? (
          <RenameColumnForm
            initialTitle={column.title}
            onRename={(newTitle) => {
              editColumnCardTitle(column.id, newTitle);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            {column.title}
            <Badge className='ml-2 rounded-full'>{tasks.length}</Badge>
          </>
        )}
      </CardTitle>
      {!isEditing && (
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
                <DropdownMenuItem onClick={() => setIsEditing(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => duplicateColumnCard(column.id)}
                >
                  Duplicate
                </DropdownMenuItem>
                <DialogTrigger asChild>
                  <DropdownMenuItem variant='destructive'>
                    Delete
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className='flex items-center gap-x-2'>
                  <TriangleAlert className='text-red-500 w-6 h-6' />
                  Delete Card
                </DialogTitle>
                <DialogDescription>
                  Are you sure you want to permanently delete the{" "}
                  <span className='font-bold text-black'>{column.title}</span>{" "}
                  Card from your board?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type='button'
                    variant='secondary'
                    className='cursor-pointer'
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type='button'
                  variant='destructive'
                  className='cursor-pointer'
                  onClick={() => deleteColumnCard(column.id)}
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardAction>
      )}
    </CardHeader>
  );
};

export default ColumnHeader;
