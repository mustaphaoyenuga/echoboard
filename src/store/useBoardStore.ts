import { findItemIndexById, generateUniqueId, moveItem } from "@/lib/utils";
import { Task } from "@/types";
import { create } from "zustand";

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface BoardState {
  columns: Column[];
  addTaskColumn: (title: string) => void;
  addTaskCard: (columnId: string, text: string) => void;
  moveTaskColumn: (draggedId: string, hoverId: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  columns: [
    {
      id: "c0",
      title: "To do",
      tasks: [
        { id: "c0t0", text: "Generate App Scaffold" },
        { id: "c0t1", text: "Learn Typescript" },
      ],
    },
    {
      id: "c1",
      title: "In Progress",
      tasks: [
        { id: "c1t0", text: "Generate App Scaffold" },
        { id: "c1t1", text: "Learn Typescript" },
      ],
    },
    {
      id: "c2",
      title: "Done",
      tasks: [
        { id: "c2t0", text: "Generate App Scaffold" },
        { id: "c2t1", text: "Learn Typescript" },
      ],
    },
  ],
  addTaskColumn: (title: string) =>
    set((state) => ({
      columns: [...state.columns, { id: generateUniqueId(), title, tasks: [] }],
    })),
  addTaskCard: (columnId, text) =>
    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [...column.tasks, { id: generateUniqueId(), text }],
            }
          : column
      ),
    })),
  moveTaskColumn: (draggedId, hoveredId) => set((state) => {
    const columns = state.columns;
    const draggedIndex = findItemIndexById(columns, draggedId)
    const hoveredIndex = findItemIndexById(columns, hoveredId)

    if (draggedIndex === -1 || hoveredIndex === -1) {
      return state;
    }
    return {
      columns: moveItem(columns, draggedIndex, hoveredIndex)
    }
  }),
}));
