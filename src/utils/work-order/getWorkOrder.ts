import axios from "axios";

// Define the parameters for the request
interface FetchWorkOrdersParams {
  status?: string;
  assignedTo?: string;
  page?: number;
  limit?: number;
}

export const fetchWorkOrders = async (params: FetchWorkOrdersParams) => {
  try {
    // Construct the query parameters string
    const query = new URLSearchParams(
      params as Record<string, string>
    ).toString();

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders?${query}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching work orders:", error);
    throw error; // Handle the error as needed
  }
};
