import { nanoid } from "nanoid";
import { create } from "zustand";

import { findItemIndexById, insertItemAtIndex, moveItem } from "./arrayUtils";
import { Board, Column, Task } from "@/types";
import { initialBoards } from "./initialBoardData";
import { ensureCurrentBoard, updateBoard } from "./boardUtils";

export interface BoardState {
  boards: Record<string, Board>;
  currentBoardId: string | null;
  setCurrentBoardId: (boardId: string) => void;
  addBoard: (title: string) => Board;
  addColumn: (title: string) => void;
  moveColumn: (sourceIndex: number, destinationIndex: number) => void;
  deleteColumn: (columnId: string) => void;
  duplicateColumn: (columnId: string) => void;
  editColumnTitle: (columnId: string, newTitle: string) => void;
  addTask: (columnId: string, title: string) => void;
  moveTask: (
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
  getColumnsByBoardId: (boardId: string) => Column[];
  getTasksByColumnId: (boardId: string, columnId: string) => Task[];
}

export const useBoardStore = create<BoardState>((set, get) => ({
  boards: initialBoards,
  currentBoardId: null,
  setCurrentBoardId: (boardId) => set({ currentBoardId: boardId }),
  addBoard: (title) => {
    const id = nanoid();
    const newBoard: Board = {
      id,
      title,
      columns: [],
    };
    set((state) => ({
      boards: { ...state.boards, [id]: newBoard },
    }));
    return newBoard;
  },
  addColumn: (title) =>
    set((state) => {
      const newColumn = { id: nanoid(), title, tasks: [] };

      return ensureCurrentBoard(state, (board: Board, boardId: string) =>
        updateBoard(state, boardId, (b) => ({
          ...b,
          columns: [...b.columns, newColumn],
        }))
      );
    }),
  moveColumn: (sourceIndex, destinationIndex) =>
    set((state) =>
      ensureCurrentBoard(state, (board: Board, boardId: string) =>
        updateBoard(state, boardId, (b) => ({
          ...b,
          columns: moveItem(b.columns, sourceIndex, destinationIndex),
        }))
      )
    ),
  deleteColumn: (columnId) =>
    set((state) =>
      ensureCurrentBoard(state, (board: Board, boardId: string) =>
        updateBoard(state, boardId, (b) => ({
          ...b,
          columns: b.columns.filter((column) => column.id !== columnId),
        }))
      )
    ),
  duplicateColumn: (columnId) =>
    set((state) => {
      return ensureCurrentBoard(state, (board: Board, boardId: string) => {
        const indexOfcolumnToDuplicate = board.columns.findIndex(
          (column) => column.id === columnId
        );
        if (indexOfcolumnToDuplicate === -1) return state;

        const columnToDuplicate = board.columns[indexOfcolumnToDuplicate];
        const duplicatedColumn = {
          ...columnToDuplicate,
          id: nanoid(),
          title: `${columnToDuplicate.title} - copy`,
          tasks: columnToDuplicate.tasks.map((task) => ({
            ...task,
            id: nanoid(),
          })),
        };

        return updateBoard(state, boardId, (b) => ({
          ...b,
          columns: insertItemAtIndex(
            b.columns,
            duplicatedColumn,
            indexOfcolumnToDuplicate + 1
          ),
        }));
      });
    }),
  editColumnTitle: (columnId, newTitle) =>
    set((state) =>
      ensureCurrentBoard(state, (board, boardId) =>
        updateBoard(state, boardId, (b) => ({
          ...b,
          columns: b.columns.map((column) =>
            column.id === columnId ? { ...column, title: newTitle } : column
          ),
        }))
      )
    ),
  addTask: (columnId, title) =>
    set((state) =>
      ensureCurrentBoard(state, (board, boardId) => {
        const newTask = { id: nanoid(), title };

        return updateBoard(state, boardId, (b) => ({
          ...b,
          columns: b.columns.map((column) =>
            column.id === columnId
              ? { ...column, tasks: [...column.tasks, newTask] }
              : column
          ),
        }));
      })
    ),
moveTask: (
  sourceColumnId,
  destinationColumnId,
  sourceIndex,
  destinationIndex
) =>
  set((state) =>
    ensureCurrentBoard(state, (board, boardId) => {
      const columns = [...board.columns];

      const sourceColumnIndex = findItemIndexById(columns, sourceColumnId);
      const destinationColumnIndex = findItemIndexById(
        columns,
        destinationColumnId
      );

      if (sourceColumnIndex === -1 || destinationColumnIndex === -1) {
        return state;
      }

      // moving within the same column
      if (sourceColumnId === destinationColumnId) {
        const reorderedTasks = moveItem(
          columns[sourceColumnIndex].tasks,
          sourceIndex,
          destinationIndex
        );

        return updateBoard(state, boardId, (b) => ({
          ...b,
          columns: b.columns.map((column, idx) =>
            idx === sourceColumnIndex ? { ...column, tasks: reorderedTasks } : column
          ),
        }));
      }

      // moving between different columns
      const sourceTasks = columns[sourceColumnIndex].tasks;
      const destinationTasks = columns[destinationColumnIndex].tasks;

      const [movedTask] = sourceTasks.splice(sourceIndex, 1);
      const newDestinationTasks = [...destinationTasks];
      newDestinationTasks.splice(destinationIndex, 0, movedTask);

      return updateBoard(state, boardId, (b) => ({
        ...b,
        columns: b.columns.map((column, idx) => {
          if (idx === sourceColumnIndex) {
            return { ...column, tasks: sourceTasks };
          }
          if (idx === destinationColumnIndex) {
            return { ...column, tasks: newDestinationTasks };
          }
          return column;
        }),
      }));
    })
  ),
  getColumnsByBoardId: (boardId: string) => get().boards[boardId].columns || [],
  getTasksByColumnId: (boardId, columnId) =>
    get().boards[boardId]?.columns.find((column) => column.id === columnId)
      ?.tasks || [],
}));
