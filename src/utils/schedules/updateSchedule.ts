import axios from "axios";

interface UpdateScheduleParams {
  id: string;
  data: {
    startDate?: string;
    endDate?: string;
    status?: string;
    assignedTo?: string;
    [key: string]: any; // Allows additional fields
  };
}

export const updateScheduleById = async ({
  id,
  data,
}: UpdateScheduleParams) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/schedules/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating schedule by ID:", error);
    throw error; // Handle the error as needed
  }
};
