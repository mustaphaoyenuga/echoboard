import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import LogoutButton from "./_components/LogoutButton";

export default async function ProvatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div>
      <p>Hello {data.user.email}</p>
      <LogoutButton />
    </div>
  );
}
