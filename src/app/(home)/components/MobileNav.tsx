import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = ({
  navLinks,
}: {
  navLinks: {
    name: string;
    href: string;
  }[];
}) => (
  <div className='lg:hidden'>
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='ghost'>
          <Menu aria-hidden='true' className='size-7' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='w-full p-6 dark:bg-brand-900'>
        <SheetHeader>
          <SheetTitle className="sr-only">Echoboard</SheetTitle>
          <Logo />
        </SheetHeader>
        <div className='p-4 flex flex-col space-y-4'>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='block w-full py-2 px-3 rounded-lg font-semibold text-base/7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:text-brand-900 dark:hover:bg-brand-400'
            >
              {item.name}
            </a>
          ))}
          <hr className='my-4 border-gray-200' />
          <a
            href='#'
            className='block w-full py-2 px-3 rounded-lg font-semibold text-base/7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:text-brand-900 dark:hover:bg-brand-400'
          >
            Log in
          </a>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);
export default MobileNav;
