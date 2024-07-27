import axios from "axios";

interface GetVehiclesParams {
  page: number;
  limit: number;
  search?: string;
  type?: string;
  isActive?: boolean;
}

export const getVehicles = async (params: GetVehiclesParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/vehicles`,
      {
        params, // Query parameters are passed here
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error; // Handle the error as needed
  }
};
