import axios from "axios";

// Define the parameters for the request
interface FetchWorkOrderStatisticsParams {
  startDate: string;
  endDate: string;
}

export const fetchWorkOrderStatistics = async ({
  startDate,
  endDate,
}: FetchWorkOrderStatisticsParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/statistics`,
      {
        params: {
          startDate,
          endDate,
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching work order statistics:", error);
    throw error; // Handle the error as needed
  }
};
