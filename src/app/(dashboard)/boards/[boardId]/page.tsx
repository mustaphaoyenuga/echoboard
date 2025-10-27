"use client";

import { useParams } from "next/navigation";

import ColumnList from "@/components/board/ColumnList";
import Navbar from "@/app/(dashboard)/_components/Navbar";
import { useBoardStore } from "@/store/useBoardStore";
import { useEffect } from "react";

export default function BoardPage() {
  const { boardId } = useParams() as { boardId: string };
  const board = useBoardStore((state) => state.boards[boardId]);
  const setCurrentBoardId = useBoardStore((state) => state.setCurrentBoardId);

  useEffect(() => {
    if (boardId) {
      setCurrentBoardId(boardId);
    }
  }, [boardId, setCurrentBoardId]);
  return (
    <div>
      <Navbar topnavTitle={board?.title} />
      <ColumnList boardId={boardId} />
    </div>
  );
}
