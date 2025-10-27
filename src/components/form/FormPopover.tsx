"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useBoardStore } from "@/store/useBoardStore";

interface FormPopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const addBoard = useBoardStore((state) => state.addBoard);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newBoard = addBoard(title);
    setTitle("");
    // router.push(`/boards/${newBoard.id}`);
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className='w-80 pt-3'
        side={side}
        sideOffset={sideOffset}
      >
        <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-2 right-2 h-auto w-auto p-2 text-neutral-600'
          >
            <X className='size-4' />
          </Button>
        </PopoverClose>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <Label htmlFor='board-title'>Board Title</Label>
            <Input
              id='board-title'
              type='text'
              value={title}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <Button type='submit' variant='primary' className='w-full'>
            Create
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
