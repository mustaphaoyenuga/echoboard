export const initialColumns = [
  {
    id: "c0",
    title: "To do",
    tasks: [
      { id: "c0t0", title: "Generate App Scaffold" },
      { id: "c0t1", title: "Learn Typescript" },
    ],
  },
  {
    id: "c1",
    title: "In Progress",
    tasks: [
      { id: "c1t0", title: "Fly to Paris" },
      { id: "c1t1", title: "Eat Biscuit" },
    ],
  },
  {
    id: "c2",
    title: "Done",
    tasks: [
      { id: "c2t0", title: "Learn Spanish" },
      { id: "c2t1", title: "Fly to Paris" },
    ],
  },
];

export const initialBoards = [
  {
    id: "board-1",
    title: "Frontend Team",
    columns: initialColumns,
  },
  {
    id: "board-2",
    title: "Design Squad",
    columns: [
      {
        id: "c15",
        title: "Backlog",
        tasks: [
          { id: "c15t15", title: "Liase with Testers" },
          { id: "c15t16", title: "Delete Database" },
        ],
      },
    ],
  },
  {
    id: "board-3",
    title: "Platform Dev",
    columns: [
      {
        id: "c17",
        title: "Assigned",
        tasks: [
          { id: "c17t16", title: "Running back to Man United" },
          { id: "c17t18", title: "Sack Vicki from Teamlead" },
        ],
      },
      {
        id: "c18",
        title: "Delivered",
        tasks: [
          { id: "c18t16", title: "Running back to Man United" },
          { id: "c18t18", title: "Sack Vicki from Teamlead" },
        ],
      },
    ],
  },
];
