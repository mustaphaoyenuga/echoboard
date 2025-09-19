import FormPopover from "@/components/form/FormPopover";
import { User2 } from "lucide-react";

const BoardList = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center font-semibold text-lg text-neutral-700'>
        <User2 className='size-6 mr-2' />
        Your boards
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        <FormPopover sideOffset={10} side='right'>
          <div
            role='button'
            className='aspect-video bg-muted relative h-full w-full rounded-sm flex flex-col items-center justify-center hover:opacity-75 gap-y-1 transition'
          >
            <p className='text-sm'>Create new board</p>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

export default BoardList;
