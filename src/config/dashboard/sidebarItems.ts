import { LayoutDashboard, ListTodo, Plus, Settings } from "lucide-react";

export const sidebarItems = [
  {
    id: "id0",
    label: "",
    items: [
      {
        title: "New Board",
        url: "/",
        icon: Plus,
      },
    ],
  },
  {
    id: "id1",
    label: "All Boards",
    items: [
      {
        title: "Platform Launch",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Marketing Plan",
        url: "/",
        icon: ListTodo,
      },
    ],
  },
  {
    id: "id2",
    label: "Others",
    items: [
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
  },
];
