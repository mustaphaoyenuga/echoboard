import { FormEvent, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

interface RenameColumnFormProps {
  initialTitle: string;
  onRename: (text: string) => void;
  onCancel: () => void;
}

const RenameColumnForm = ({
  initialTitle,
  onCancel,
  onRename,
}: RenameColumnFormProps) => {
  const [title, setTitle] = useState(initialTitle);
  const formRef = useRef<HTMLFormElement>(null!);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (title.trim()) {
      onRename(title.trim());
    } else {
      onCancel();
    }
  };
  useOnClickOutside(formRef, onCancel);
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full gap-2'>
      <label htmlFor='rename-title' className='sr-only'>
        Task
      </label>
      <Input
        id='rename-title'
        type='text'
        value={title}
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        className='border border-brand-500 flex-1 outline-none'
      />
      <div className='flex items-center gap-x-2'>
        <Button type='submit' size='sm'>
          Save
        </Button>
        <Button variant='ghost' size='icon' onClick={onCancel}>
          <X />
        </Button>
      </div>
    </form>
  );
};

export default RenameColumnForm;
