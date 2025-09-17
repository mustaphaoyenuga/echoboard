// components/AuthButton.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AuthButton() {
  const supabase = createClient();
  const [session, setSession] = useState<any>(null);
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  if (user) {
    return (
      <Button
        variant='primary'
        onClick={() => {
          handleLogout();
          setUser(null);
        }}
      >
        Logout
      </Button>
    );
  }

  return (
    <Button variant='primary' onClick={() => router.push("/login")}>
      Login
    </Button>
  );
}
