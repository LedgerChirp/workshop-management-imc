import axios from "axios";

interface CreateScheduleParams {
  startDate: string;
  endDate: string;
  status: string;
  assignedTo: string;
  // Add other fields as necessary
}

export const createSchedule = async (scheduleData: CreateScheduleParams) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/schedules`,
      scheduleData,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating schedule:", error);
    throw error; // Handle the error as needed
  }
};
