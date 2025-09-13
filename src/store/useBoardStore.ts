import { findItemIndexById, generateUniqueId, moveItem } from "@/lib/utils";
import { Task } from "@/types";
import { create } from "zustand";
import { initialColumns } from "./initialBoardData";

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface BoardState {
  columns: Column[];
  addBoardColumn: (title: string) => void;
  moveBoardColumn: (sourceIndex: number, destinationIndex: number) => void;
  deleteBoardColumn: (columnId: string) => void;
  addTaskCard: (columnId: string, title: string) => void;
  moveTaskCard: (
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
  getTasksByListId: (id: string) => Task[];
}

export const useBoardStore = create<BoardState>((set, get) => ({
  columns: initialColumns,
  getTasksByListId: (id: string) =>
    get().columns.find((column) => column.id === id)?.tasks || [],
  addBoardColumn: (title: string) =>
    set((state) => ({
      columns: [...state.columns, { id: generateUniqueId(), title, tasks: [] }],
    })),
  moveBoardColumn: (sourceIndex, destinationIndex) =>
    set((state) => ({
      columns: moveItem(state.columns, sourceIndex, destinationIndex),
    })),
  deleteBoardColumn: (columnId) =>
    set((state) => ({
      columns: state.columns.filter((column) => column.id !== columnId),
    })),
  addTaskCard: (columnId, title) =>
    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [...column.tasks, { id: generateUniqueId(), title }],
            }
          : column
      ),
    })),
  moveTaskCard: (
    sourceColumnId,
    destinationColumnId,
    sourceIndex,
    destinationIndex
  ) =>
    set((state) => {
      const columns = [...state.columns];
      const sourceColumnIndex = findItemIndexById(columns, sourceColumnId);
      const destinationColumnIndex = findItemIndexById(
        columns,
        destinationColumnId
      );
      if (sourceColumnIndex === -1 || destinationColumnIndex === -1) {
        return state;
      }
      const sourceColumnTasks = columns[sourceColumnIndex].tasks;
      const destinationColumnTasks = columns[destinationColumnIndex].tasks;

      //moving within same column
      if (sourceColumnId === destinationColumnId) {
        const reorderedTasks = moveItem(
          sourceColumnTasks,
          sourceIndex,
          destinationIndex
        );
        return {
          columns: columns.map((column, index) =>
            index === sourceColumnIndex
              ? { ...column, tasks: reorderedTasks }
              : column
          ),
        };
      }

      //moving between different columns
      const sourceTask = sourceColumnTasks[sourceIndex];
      const newSourceTasks = sourceColumnTasks.filter(
        (_, index) => index !== sourceIndex
      );
      const newDestinationTasks = [...destinationColumnTasks];
      newDestinationTasks.splice(destinationIndex, 0, sourceTask);

      return {
        columns: state.columns.map((column, index) => {
          if (index === sourceColumnIndex) {
            return { ...column, tasks: newSourceTasks };
          }
          if (index === destinationColumnIndex) {
            return { ...column, tasks: newDestinationTasks };
          }
          return column;
        }),
      };
    }),
}));
