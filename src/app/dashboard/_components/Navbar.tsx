import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 inset-0 lg:left-64 right-0 z-50 px-4 h-14 border-b shadow-sm flex items-center bg-white'>
      <MobileNavbar />

      {/* Desktop */}
      <div className='flex items-center gap-x-4'>
        <p className='text-xl font-bold tracking-wide'>Platform Launch</p>
      </div>

      <div className='ml-auto flex items-center gap-x-4'>
        <Button variant="primary" size='sm' className='rounded-sm py-1.5 px-2'>
          <span className='hidden lg:inline'>Add New</span>
          <Plus className='lg:hidden' />
        </Button>
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
