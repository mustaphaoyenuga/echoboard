"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  return (
    <Button
      variant='ghost'
      className='w-full font-normal justify-start px-2'
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
