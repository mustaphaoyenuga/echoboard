import { Menu } from "lucide-react";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarItems from "./SidebarItems";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className="lg:hidden">
          <Menu className='size-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Echoboard Sidebar</SheetTitle>
          <Logo />
        </SheetHeader>
        <div>
          <SidebarItems />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
