import Link from "next/link";
import { Fragment } from "react";

import { LayoutDashboard, ListTodo, Plus, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const sidebarMenu = [
  {
    label: "All Boards",
    items: [
      {
        title: "Platform Launch",
        url: "/",
        icon: <LayoutDashboard className='h-5 w-5' />,
      },
      {
        title: "Marketing Plan",
        url: "/",
        icon: <ListTodo className='h-5 w-5' />,
      },
      {
        title: "New Board",
        url: "/",
        icon: <Plus className='h-5 w-5' />,
      },
    ],
  },
  {
    label: "Others",
    items: [
      {
        title: "Settings",
        url: "#",
        icon: <Settings className='h-5 w-5' />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className='w-64 z-50 shrink-0 hidden lg:flex flex-col fixed top-0 left-0 bottom-0 border-r bg-gray-50'>
      <SidebarHeader className='h-14 justify-center items-center'>
        <Logo />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {sidebarMenu.map((menuItem, index) => (
          <Fragment key={menuItem.label}>
            <SidebarGroup>
              <SidebarGroupLabel>{menuItem.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItem.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <Button
                        key={item.title}
                        variant='ghost'
                        className='w-full justify-start'
                        asChild
                      >
                        <Link href='/' className='gap-x-2'>
                          {item.icon}
                          {item.title}
                        </Link>
                      </Button>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {index < sidebarMenu.length - 1 && <Separator />}
          </Fragment>
        ))}
      </SidebarContent>
    </div>
  );
};

export default Sidebar;
