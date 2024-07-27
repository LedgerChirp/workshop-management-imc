export const employeeData = {
  columns: [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "POSITION", uid: "position", sortable: true },
    { name: "DEPARTMENT", uid: "department", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "PHONE", uid: "phone" },
    { name: "HIRE DATE", uid: "hireDate", sortable: true },
    { name: "STATUS", uid: "status", sortable: true },
  ],
  data: [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "IT",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      hireDate: "2022-03-15",
      status: "active",
    },
  ],
};
