export type Item = {
  id: string;
};
export interface Task extends Item {
  title: string;
}

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

export type Board = {
  id: string;
  title: string;
  columns: Column[];
};

export type Boards = Record<string, Board>;
