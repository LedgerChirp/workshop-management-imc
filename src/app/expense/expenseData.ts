export const expenseData = {
  columns: [
    { name: "ID", uid: "id", sortable: true },
    { name: "DATE", uid: "date", sortable: true },
    { name: "CATEGORY", uid: "category", sortable: true },
    { name: "DESCRIPTION", uid: "description" },
    { name: "AMOUNT", uid: "amount", sortable: true },
    { name: "EMPLOYEE", uid: "employee", sortable: true },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "PAYMENT METHOD", uid: "paymentMethod" },
  ],
  data: [
    {
      id: 1,
      date: "2024-07-20",
      category: "Travel",
      description: "Flight tickets for conference",
      amount: 550.0,
      employee: "Emma Smith",
      status: "approved",
      paymentMethod: "Company Card",
    },
    // ... more expense entries
  ],
};
