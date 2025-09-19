"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <Button
      variant='ghost'
      className='w-full font-normal justify-start px-2 '
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
