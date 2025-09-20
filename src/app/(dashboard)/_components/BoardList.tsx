"use client";

import BoardCard from "@/components/board/BoardCard";
import FormPopover from "@/components/form/FormPopover";
import { useBoardStore } from "@/store/useBoardStore";
import { Plus, User2 } from "lucide-react";
import Link from "next/link";

const BoardList = () => {
  const boards = useBoardStore((state) => state.boards);
  return (
    <div className='space-y-4'>
      <div className='flex items-center font-semibold text-lg text-neutral-700'>
        <User2 className='size-6 mr-2' />
        Your boards
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {boards.map((board, index) => (
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
    </div>
  );
};

export default BoardList;
