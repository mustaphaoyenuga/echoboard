import { Item, Task } from "@/types";

export const generateUniqueId = () => `list_${Date.now()}`;

export const findItemIndexById = <TItem extends Item>(items: TItem[], id: string) => {
  return items.findIndex((item) => item.id === id);
};

const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
  // remove all items before the index then all items after the index
  return [...array.slice(0, index), ...array.slice(index + 1)];
};
const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, index: number) => {
  // remove all items before the index then all items after the index
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const moveItem = <TItem>(array:TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
