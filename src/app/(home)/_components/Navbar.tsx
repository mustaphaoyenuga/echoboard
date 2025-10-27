"use client";

import Link from "next/link";

import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";

const navLinks = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const scrolled = useScrollThreshold(40);
  return (
    <header
      className={`fixed top-0 w-full left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white dark:bg-brand-900" : "bg-transparent"
      }`}
    >
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

        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-2'>
          <Button variant='ghost' asChild>
            <Link
              href='/login'
              className='text-sm/6 font-semibold text-gray-900 dark:text-gray-100'
            >
              Log in
            </Link>
          </Button>
          <Button variant='primary' asChild>
            <Link
              href='/signup'
              className='text-sm/6 font-semibold'
            >
              Try Echobard for Free
            </Link>
          </Button>
        </div>

        <MobileNav navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Navbar;
