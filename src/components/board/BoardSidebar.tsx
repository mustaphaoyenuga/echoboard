import { Columns2, LayoutDashboard, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const sidebarGroups = [
  {
    label: "All Boards",
    items: [
      {
        title: "Platform Launch",
        url: "#",
        icon: LayoutDashboard,
      },
      {
        title: "Marketing Plan",
        url: "#",
        icon: LayoutDashboard,
      },
      {
        title: "Tradfit Roadmap",
        url: "#",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Others",
    items: [
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
      {
        title: "Marketing Plan",
        url: "#",
        icon: LayoutDashboard,
      },
      {
        title: "Tradfit Roadmap",
        url: "#",
        icon: LayoutDashboard,
      },
    ],
  },
];

const BoardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-gray-200">
        <div className='text-2xl text-teal-700 font-extrabold uppercase flex items-center'>
          Echo <Columns2 size={30} />
          Board
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gray-200">
        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default BoardSidebar;
