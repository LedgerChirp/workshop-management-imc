import axios from "axios";

interface GetRosterParams {
  page: number;
  limit: number;
  startDate: string;
  endDate: string;
  vehicleId?: string;
  assignedToId?: string;
  status?: string;
}

export const getRoster = async (params: GetRosterParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/rosters`,
      {
        params, // Query parameters are passed here
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching roster:", error);
    throw error; // Handle the error as needed
  }
};
