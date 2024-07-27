import axios from "axios";

// Function to fetch roster utilizations
export const getUtilizations = async (params: {
  startDate: string;
  endDate: string;
}) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/rosters/utilizations`,
      {
        params, // Query parameters for the request
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching utilizations:", error);
    throw error; // Handle the error as needed
  }
};
