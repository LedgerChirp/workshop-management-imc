import axios from "axios";

// Define the parameters for the request
interface UpdateWorkOrderParams {
  id: string;
  data: {
    // Add fields you want to update
    title?: string;
    description?: string;
    status?: string;
    assignedTo?: string;
    priority?: string;
    // Add other fields as needed
  };
}

export const updateWorkOrderById = async ({
  id,
  data,
}: UpdateWorkOrderParams) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/${id}`,
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
    console.error("Error updating work order:", error);
    throw error; // Handle the error as needed
  }
};
