import Logo from "@/components/Logo";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const footerMenu = [
  {
    title: "General",
    links: [
      {
        name: "home",
        href: "/home",
      },
      {
        name: "features",
        href: "/features",
      },
      {
        name: "pricing",
        href: "/pricing",
      },
      {
        name: "blog",
        href: "/blog",
      },
      {
        name: "testimonial",
        href: "/testimonial",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "Help center",
        href: "/help-center",
      },
      {
        name: "Live-chat",
        href: "/live-chat",
      },
      {
        name: "Community",
        href: "/community",
      },
      {
        name: "FAQ",
        href: "/faq",
      },
      {
        name: "Contact us",
        href: "/contact-us",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className=' p-4 sm:p-6 dark:bg-primary'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
          <div className='col-span-2'>
            <Link href='/'>
              <Logo />
            </Link>
            <p>
              Empower your team with an intuitive project management tool that
              keeps your work organized.
            </p>
          </div>
          {footerMenu.map((footerItem, index) => (
            <div key={index}>
              <h2 className="font-semibold capitalize">{footerItem.title}</h2>
              <ul>
                {footerItem.links.map((link) => (
                  <li key={link.name} className='capitalize'>
                    <a href={link.href} className='hover:underline'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-semibold capitalize">Follow us</h2>
            <ul>
              <li>
                <a href='#'>
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
