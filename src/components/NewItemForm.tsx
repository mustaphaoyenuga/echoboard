"use client";

import useFocus from "@/hooks/useFocus";
import { useState } from "react";

interface NewItemFormProps {
  onAdd: (text: string) => void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-[300px] flex flex-col w-full items-start'
    >
      <label htmlFor='task' className='sr-only'>
        Task
      </label>
      <input
        id='task'
        type='text'
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        className='w-full rounded-sm shadow-sm border border-gray-300 mb-2 py-2 px-4'
      />
      <button
        type='submit'
        className='text-white bg-cyan-500 rounded-sm cursor-pointer border-none py-1.5 px-3 text-center'
      >
        Create
      </button>
    </form>
  );
};

export default NewItemForm;
