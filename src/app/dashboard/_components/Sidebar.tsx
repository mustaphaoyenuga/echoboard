import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import { SidebarContent, SidebarHeader } from "@/components/ui/sidebar";
import SidebarItems from "./SidebarItems";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='w-64 z-50 shrink-0 hidden lg:flex flex-col fixed top-0 left-0 bottom-0 border-r bg-gray-50'>
      <SidebarHeader className='h-14 justify-center items-center'>
        <Link href='/'>
          <Logo />
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarItems />
      </SidebarContent>
    </div>
  );
};

export default Sidebar;
