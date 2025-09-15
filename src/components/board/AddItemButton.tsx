"use client";

import { useState } from "react";
import NewItemForm from "./NewItemForm";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

interface AddItemButtonProps {
  buttonText: string;
  onAdd: (text: string) => void;
}
const AddItemButton = ({ buttonText, onAdd }: AddItemButtonProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          if (text.trim()) {
            onAdd(text);
            setShowForm(false);
          } else {
            setShowForm(false);
          }
        }}
        onCancel={() => setShowForm(false)}
      />
    );
  }
  return (
    <Button
      onClick={() => setShowForm(true)}
      variant='secondary'
      size='lg'
      className='w-full max-w-[300px] flex items-center cursor-pointer shadow-sm shrink-0 justify-start transition-colors duration-100'
    >
      <Plus /> {buttonText}
    </Button>
  );
};

export default AddItemButton;
