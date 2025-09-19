import Link from "next/link";
import { Fragment } from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/config/dashboard/sidebarItems";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SidebarItems = () => {
  return (
    <>
      {sidebarItems.map((menuItem, index) => (
        <Fragment key={menuItem.id}>
          <SidebarGroup> 
            {menuItem.label && (
              <SidebarGroupLabel className='text-sm'>
                {menuItem.label}
              </SidebarGroupLabel>
            )}
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
                        <item.icon className='h-5 w-5' />
                        {item.title}
                      </Link>
                    </Button>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {index < sidebarItems.length - 1 && <Separator />}
        </Fragment>
      ))}
    </>
  );
};

export default SidebarItems;
