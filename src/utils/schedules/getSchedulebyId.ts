import axios from "axios";

interface GetScheduleByIdParams {
  id: string;
}

export const getScheduleById = async ({ id }: GetScheduleByIdParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/schedules/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching schedule by ID:", error);
    throw error; // Handle the error as needed
  }
};
