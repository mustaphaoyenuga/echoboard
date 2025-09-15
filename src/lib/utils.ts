import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Item } from "@/types";

export const generateUniqueId = () => `id_${Date.now()}${Math.random() * 999}`;

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item) => item.id === id);
};

const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
  // remove all items before the index then all items after the index
  return [...array.slice(0, index), ...array.slice(index + 1)];
};
export const insertItemAtIndex = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => {
  // remove all items before the index then all items after the index
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
