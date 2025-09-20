"use client";
import ColumnList from "@/components/board/ColumnList";
import Navbar from "../../_components/Navbar";
import { useParams } from "next/navigation";
import { useBoardStore } from "@/store/useBoardStore";

type BoardPageProps = {};

export default function BoardPage({}: BoardPageProps) {
  const { boardId } = useParams() as { boardId: string };
  const getBoardById = useBoardStore((state) => state.getBoardById);
  const board = getBoardById(boardId);
  return (
    <div>
      <Navbar topnavTitle={board?.title} />
      <ColumnList columns={board?.columns ?? []} />
    </div>
  );
}
