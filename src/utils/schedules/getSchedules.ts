import axios from "axios";

interface GetSchedulesParams {
  startDate: string;
  endDate: string;
  status?: string;
  assignedTo?: string;
}

export const getSchedules = async ({
  startDate,
  endDate,
  status,
  assignedTo,
}: GetSchedulesParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/schedules`,
      {
        params: {
          startDate,
          endDate,
          status,
          assignedTo,
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching schedules:", error);
    throw error; // Handle the error as needed
  }
};
