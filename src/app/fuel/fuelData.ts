export const fuelData = {
  columns: [
    { name: "ID", uid: "id", sortable: true },
    { name: "VEHICLE", uid: "vehicle", sortable: true },
    { name: "DATE", uid: "date", sortable: true },
    { name: "FUEL TYPE", uid: "fuelType", sortable: true },
    { name: "QUANTITY (L)", uid: "quantity" },
    { name: "COST", uid: "cost" },
    { name: "MILEAGE", uid: "mileage", sortable: true },
    { name: "DRIVER", uid: "driver", sortable: true },
  ],
  data: [
    {
      id: 1,
      vehicle: "Truck 001",
      date: "2024-07-15",
      fuelType: "Diesel",
      quantity: 75.5,
      cost: 98.15,
      mileage: 45000,
      driver: "Alice Johnson",
    },
    // ... more fuel consumption entries
  ],
};
