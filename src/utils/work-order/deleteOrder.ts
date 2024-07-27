import axios from "axios";

// Define the parameter for the request
interface DeleteWorkOrderParams {
  id: string;
}

export const deleteWorkOrderById = async ({ id }: DeleteWorkOrderParams) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting work order:", error);
    throw error; // Handle the error as needed
  }
};
