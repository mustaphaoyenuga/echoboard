"use client";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { FormInput } from "./FormInput";

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
        <form className="space-y-4">
          <div className='space-y-4'>
            <FormInput id="title" label="Board title" type="text" />
          </div>
          <Button className="w-full">Create</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
