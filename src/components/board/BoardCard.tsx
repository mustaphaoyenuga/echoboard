import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface BoardCardProps {
    title: string;
    imageUrl: string;
    count: number;
}

const BoardCard = ({ title, imageUrl, count }: BoardCardProps) => {
  return (
    <Card className='p-0 rounded-b-none overflow-hidden gap-0 min-h-36'>
      <div className='relative h-24 w-full bg-slate-100'>
        <Image
          src={imageUrl}
          alt='BoardCard Image'
          className='object-cover'
          fill
        />
      </div>
      <CardContent className='px-4 py-3'>
        <div className='flex items-center justify-between'>
          <h3 className='truncate text-base font-semibold'>{title}</h3>
          <span className='text-sm text-slate-500'>{count}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
