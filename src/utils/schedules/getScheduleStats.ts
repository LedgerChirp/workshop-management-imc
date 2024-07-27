import axios from "axios";

interface FetchScheduleStatisticsParams {
  startDate: string;
  endDate: string;
}

export const fetchScheduleStatistics = async ({
  startDate,
  endDate,
}: FetchScheduleStatisticsParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/schedules/statistics`,
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
    console.error("Error fetching schedule statistics:", error);
    throw error; // Handle the error as needed
  }
};
