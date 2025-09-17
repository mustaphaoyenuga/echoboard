import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import Link from "next/link";

const navLinks = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  return (
    <header className='bg-transparent fixed top-0 w-full left-0 z-50 dark:bg-brand-900'>
      <nav className='flex items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>EchoBoard</span>
            <Logo />
          </a>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-sm/6 font-semibold text-gray-900 dark:text-gray-100'
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button variant='ghost' asChild>
            <Link href='/login' className='text-sm/6 font-semibold text-gray-900 dark:text-gray-100'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </Link>
          </Button>
        </div>

        <MobileNav navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Navbar;
