"use client";

import { useState } from "react";
import NewItemForm from "./NewItemForm";

interface AddItemButtonProps {
  buttonText: string;
  onAdd: (text:string) => void;
}
const AddItemButton = ({ buttonText, onAdd }: AddItemButtonProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <button
      onClick={() => setShowForm(true)}
      className='bg-[#ffffff3d] hover:bg-[#ffffff8c] border-none rounded-sm cursor-pointer max-w-[300px] py-2.5 px-3 w-full text-left transition-colors duration-100'
    >
      {buttonText}
    </button>
  );
};

export default AddItemButton;
