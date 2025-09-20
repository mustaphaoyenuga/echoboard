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
      {
        title: "My Boards",
        url: "/boards",
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
