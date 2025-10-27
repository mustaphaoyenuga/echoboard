"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import BoardCard from "@/components/board/BoardCard";
import FormPopover from "@/components/form/FormPopover";
import { useBoardStore } from "@/store/useBoardStore";

const BoardList = () => {
  const boards = useBoardStore((state) => state.boards);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
      {Object.values(boards).map((board, index) => (
        <Link href={`/boards/${board.id}`} key={board.id}>
          <BoardCard
            title={board.title}
            imageUrl={`/images/img-${index}.jpg`}
            count={board.columns.length}
          />
        </Link>
      ))}
      <FormPopover sideOffset={10} side='right'>
        <div
          role='button'
          className='aspect-video w-full bg-muted text-card-foreground flex flex-col justify-center items-center gap-y-1 rounded-t-xl border py-6 shadow-sm rounded-b-none cursor-pointer h-36'
        >
          <Plus className='size-6' />
          <p className='text-sm'>Create new board</p>
        </div>
      </FormPopover>
    </div>
  );
};

export default BoardList;
