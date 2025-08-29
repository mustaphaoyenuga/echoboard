"use client";

import { useState } from "react";
import NewItemForm from "./NewItemForm";

interface AddNewItemProps {
  toggleButtonText: string;
}
const AddNewItem = ({ toggleButtonText }: AddNewItemProps) => {
  const [isAddMode, setIsAddMode] = useState(false);

  if (isAddMode) {
    return (
      <NewItemForm
        onAdd={(text) => {
          console.log(text);
          setIsAddMode(false);
        }}
      />
    );
  }
  return (
    <button
      onClick={() => setIsAddMode(true)}
      className='bg-[#ffffff3d] hover:bg-[#ffffff8c] border-none rounded-sm cursor-pointer max-w-[300px] py-2.5 px-3 w-full text-left transition-colors duration-100'
    >
      {toggleButtonText}
    </button>
  );
};

export default AddNewItem;
