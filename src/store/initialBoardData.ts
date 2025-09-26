export const initialBoards = {
  "board-1": {
    id: "board-1",
    title: "Frontend Team",
    columns: [
      {
        id: "c1",
        title: "To Do",
        tasks: [
          { id: "c1t0", title: "Liase with Testers" },
          { id: "c1t1", title: "Deploy to Production" },
        ],
      },
      {
        id: "c2",
        title: "In Progress",
        tasks: [
          { id: "c2t0", title: "Write Integrated tests" },
          { id: "c2t1", title: "Run app on Lighthouse" },
        ],
      },
    ],
  },
  "board-2": {
    id: "board-2",
    title: "Personal",
    columns: [
      {
        id: "c15",
        title: "Backlog",
        tasks: [
          { id: "c15t15", title: "Travel to Paris" },
          { id: "c15t16", title: "Delete Database" },
        ],
      },
       {
        id: "c17",
        title: "Assigned",
        tasks: [
          { id: "c17t16", title: "Start a blog" },
          { id: "c17t18", title: "Take course on Motion Design" },
        ],
      },
      {
        id: "c18",
        title: "Delivered",
        tasks: [
          { id: "c18t16", title: "Build New Portfolio" },
          { id: "c18t18", title: "Purchase new Bicycle" },
        ],
      },
    ],
  },
};
