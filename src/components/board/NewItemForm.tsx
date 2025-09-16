"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface NewItemFormProps {
  onAdd: (text: string) => void;
  onCancel: () => void;
}

const NewItemForm = ({ onAdd, onCancel }: NewItemFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-[300px] flex flex-col w-full items-start'
    >
      <label htmlFor='task' className='sr-only'>
        Task
      </label>
      <Input
        id='task'
        type='text'
        value={text}
        autoFocus
        onChange={(e) => setText(e.target.value)}
        className='border border-brand-500'
      />
      <div className='flex items-center gap-x-2 mt-4'>
        <Button type='submit' variant='primary' size='sm'>
          Create
        </Button>
        <Button variant='ghost' size='icon' onClick={onCancel}>
          <X />
        </Button>
      </div>
    </form>
  );
};

export default NewItemForm;
