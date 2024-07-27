import axios from "axios";

// Define the parameter for the request
interface FetchWorkOrderByIdParams {
  id: string;
}

export const fetchWorkOrderById = async ({ id }: FetchWorkOrderByIdParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching work order by ID:", error);
    throw error; // Handle the error as needed
  }
};
