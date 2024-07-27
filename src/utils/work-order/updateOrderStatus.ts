import axios from "axios";

// Define the parameters for the request
interface UpdateWorkOrderStatusParams {
  id: string;
  status: string;
}

export const updateWorkOrderStatusById = async ({
  id,
  status,
}: UpdateWorkOrderStatusParams) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/${id}/status`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating work order status:", error);
    throw error; // Handle the error as needed
  }
};
