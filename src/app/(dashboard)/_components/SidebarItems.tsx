"use client";

import Link from "next/link";

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
import { useBoardStore } from "@/store/useBoardStore";
import { LayoutDashboard } from "lucide-react";

const SidebarItems = () => {
  const boards = useBoardStore((state) => state.boards);

  const sidebarGroup0 = sidebarItems[0];
  const sidebarGroup1 = sidebarItems[1];
  return (
    <>
      <SidebarGroup>
        {sidebarGroup0.label && (
          <SidebarGroupLabel className='text-sm'>
            {sidebarGroup0.label}
          </SidebarGroupLabel>
        )}
        <SidebarGroupContent>
          <SidebarMenu>
            {sidebarGroup0.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Button
                  variant='ghost'
                  className='w-full justify-start'
                  asChild
                >
                  <Link href={item.url} className='gap-x-2'>
                    <item.icon className='h-5 w-5' />
                    {item.title}
                  </Link>
                </Button>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <Separator />
       <SidebarGroup>
        {sidebarGroup1.label && (
          <SidebarGroupLabel className='text-sm'>
            {sidebarGroup1.label}
          </SidebarGroupLabel>
        )}
        <SidebarGroupContent>
          <SidebarMenu>
            {sidebarGroup1.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Button
                  variant='ghost'
                  className='w-full justify-start'
                  asChild
                >
                  <Link href={item.url} className='gap-x-2'>
                    <item.icon className='h-5 w-5' />
                    {item.title}
                  </Link>
                </Button>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <Separator />
      <SidebarGroup>
        <SidebarGroupLabel className='text-sm'>All boards</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {boards.map((board) => (
              <SidebarMenuItem key={board.id}>
                <Button
                  variant='ghost'
                  className='w-full justify-start'
                  asChild
                >
                  <Link href={`/boards/${board.id}`} className='gap-x-2'>
                    <LayoutDashboard className='h-5 w-5' />
                    {board.title}
                  </Link>
                </Button>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default SidebarItems;
