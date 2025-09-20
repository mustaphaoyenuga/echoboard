"use client";

import { useBoardStore } from "@/store/useBoardStore";
import { useParams } from "next/navigation";

const BoardPageHeader = () => {
  const { boardId } = useParams() as { boardId: string };
  const getBoardById = useBoardStore((state) => state.getBoardById);
  const board = getBoardById(boardId);
  return (
    <div>
      <h2 className='font-semibold'>{board?.title}</h2>
    </div>
  );
};

export default BoardPageHeader;
