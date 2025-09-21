import { nanoid } from "nanoid";
import {
  findItemIndexById,
  generateUniqueId,
  insertItemAtIndex,
  moveItem,
} from "@/lib/utils";
import { Board, Column, Task } from "@/types";
import { create } from "zustand";
import { initialBoards } from "./initialBoardData";

interface BoardState {
  boards: Record<string, Board>;
  currentBoardId: string | null;
  setCurrentBoardId: (boardId: string) => void;
  addBoard: (title: string) => Board;
  addColumn: (title: string) => void;
  moveColumnCard: (sourceIndex: number, destinationIndex: number) => void;
  deleteColumnCard: (columnId: string) => void;
  duplicateColumnCard: (columnId: string) => void;
  editColumnCardTitle: (columnId: string, newTitle: string) => void;
  addTaskCard: (columnId: string, title: string) => void;
  moveTaskCard: (
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
      const boardId = state.currentBoardId;
      if (!boardId) return state;

      const board = state.boards[boardId];
      if (!board) return state;

      const newColumn = { id: nanoid(), title, tasks: [] };

      return {
        boards: {
          ...state.boards,
          [boardId]: {
            ...board,
            columns: [...board.columns, newColumn],
          },
        },
      };
    }),
  moveColumnCard: (sourceIndex, destinationIndex) =>
    set((state) => ({
      // columns: moveItem(state.columns, sourceIndex, destinationIndex),
      boards: { ...state.boards },
    })),
  deleteColumnCard: (columnId) =>
    set((state) => ({
      // columns: state.columns.filter((column) => column.id !== columnId),
      boards: { ...state.boards },
    })),
  duplicateColumnCard: (columnId) =>
    set((state) => {
      // const indexOfcolumnToDuplicate = state.columns.findIndex(
      //   (column) => column.id === columnId
      // );
      // if (indexOfcolumnToDuplicate === -1) return state;

      // const columnToDuplicate = state.columns[indexOfcolumnToDuplicate];
      // const duplicatedColumn = {
      //   ...columnToDuplicate,
      //   id: generateUniqueId(),
      //   title: `${columnToDuplicate.title} - copy`,
      //   tasks: columnToDuplicate.tasks.map((task) => ({
      //     ...task,
      //     id: generateUniqueId(),
      //   })),
      // };
      // return {
      //   columns: insertItemAtIndex(
      //     state.columns,
      //     duplicatedColumn,
      //     indexOfcolumnToDuplicate + 1
      //   ),
      // };
      return {
        boards: { ...state.boards },
      };
    }),
  editColumnCardTitle: (columnId, newTitle) =>
    set((state) => ({
      boards: { ...state.boards },
      // columns: state.columns.map((column) =>
      //   column.id === columnId ? { ...column, title: newTitle } : column
      // ),
    })),
  addTaskCard: (columnId, title) =>
    set((state) => {
      const boardId = state.currentBoardId;
      if (!boardId) return state;

      const board = state.boards[boardId];
      if (!board) return state;

      const newTask = { id: nanoid(), title };
      return {
        boards: {
          ...state.boards,
          [boardId]: {
            ...board,
            columns: board.columns.map((column) =>
              column.id === columnId
                ? { ...column, tasks: [...column.tasks, newTask] }
                : column
            ),
          },
        },
      };
      // columns: state.columns.map((column) =>
      //   column.id === columnId
      //     ? {
      //         ...column,
      //         tasks: [...column.tasks, { id: generateUniqueId(), title }],
      //       }
      //     : column
      // ),
    }),
  moveTaskCard: (
    sourceColumnId,
    destinationColumnId,
    sourceIndex,
    destinationIndex
  ) =>
    set((state) => {
      // const columns = [...state.columns];
      // const sourceColumnIndex = findItemIndexById(columns, sourceColumnId);
      // const destinationColumnIndex = findItemIndexById(
      //   columns,
      //   destinationColumnId
      // );
      // if (sourceColumnIndex === -1 || destinationColumnIndex === -1) {
      //   return state;
      // }
      // const sourceColumnTasks = columns[sourceColumnIndex].tasks;
      // const destinationColumnTasks = columns[destinationColumnIndex].tasks;

      //moving within same column
      // if (sourceColumnId === destinationColumnId) {
      //   const reorderedTasks = moveItem(
      //     sourceColumnTasks,
      //     sourceIndex,
      //     destinationIndex
      //   );
      //   return {
      //     columns: columns.map((column, index) =>
      //       index === sourceColumnIndex
      //         ? { ...column, tasks: reorderedTasks }
      //         : column
      //     ),
      //   };
      // }

      //moving between different columns
      // const sourceTask = sourceColumnTasks[sourceIndex];
      // const newSourceTasks = sourceColumnTasks.filter(
      //   (_, index) => index !== sourceIndex
      // );
      // const newDestinationTasks = [...destinationColumnTasks];
      // newDestinationTasks.splice(destinationIndex, 0, sourceTask);

      // return {
      //   columns: state.columns.map((column, index) => {
      //     if (index === sourceColumnIndex) {
      //       return { ...column, tasks: newSourceTasks };
      //     }
      //     if (index === destinationColumnIndex) {
      //       return { ...column, tasks: newDestinationTasks };
      //     }
      //     return column;
      //   }),
      // };
      return {
        boards: { ...state.boards },
      };
    }),
  getColumnsByBoardId: (boardId: string) => get().boards[boardId].columns || [],
  getTasksByColumnId: (boardId, columnId) =>
    get().boards[boardId]?.columns.find((column) => column.id === columnId)
      ?.tasks || [],
}));
