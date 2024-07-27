export const workOrderData = {
  columns: [
    { name: "ID", uid: "id", sortable: true },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "TYPE", uid: "type", sortable: true },
    { name: "PRIORITY", uid: "priority", sortable: true },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "ASSIGNED TO", uid: "assignedTo", sortable: true },
    { name: "DUE DATE", uid: "dueDate", sortable: true },
    { name: "DESCRIPTION", uid: "description" },
  ],
  data: [
    {
      id: 1,
      title: "Repair Conveyor Belt",
      type: "Maintenance",
      priority: "High",
      status: "In Progress",
      assignedTo: "Mike Brown",
      dueDate: "2024-08-05",
      description: "Conveyor belt in warehouse section B needs urgent repair.",
    },
    // ... more work order entries
  ],
};
