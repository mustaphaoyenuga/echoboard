import { Board } from "@/types";
import { BoardState } from "./useBoardStore";

export const ensureCurrentBoard = (
  state: BoardState,
  updater: (board: Board, boardId: string, state: BoardState) => any
): BoardState => {
  const boardId = state.currentBoardId;
  if (!boardId) return state;

  const board = state.boards[boardId];
  if (!board) return state;

  return updater(board, boardId, state);
};

export const updateBoard = (
  state: BoardState,
  boardId: string,
  updater: (board: Board) => any
) => ({
  boards: {
    ...state.boards,
    [boardId]: updater(state.boards[boardId]),
  },
});
