import axios from "axios";

// Define the shape of the work order data
interface WorkOrderData {
  title: string;
  description: string;
  department: string;
  priority: "Low" | "Medium" | "High";
  assignedTo: string; // Could be employee ID or name
  startDate: string; // ISO date string
  dueDate: string; // ISO date string
  laborHours: number;
  costEstimate: number;
  status: "Pending" | "In Progress" | "Completed" | "On Hold";
}

export const createWorkOrder = async (data: WorkOrderData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating work order:", error);
    throw error; // Handle the error as needed
  }
};
