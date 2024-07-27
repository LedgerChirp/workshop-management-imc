import axios from "axios";

interface CreateRosterParams {
  vehicleId: string;
  assignedToId: string;
  startDate: string;
  endDate: string;
  status: string; // Example statuses: "scheduled", "completed", etc.
  // Add other fields as needed based on your API's requirements
}

export const createRoster = async (data: CreateRosterParams) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/rosters`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating roster:", error);
    throw error; // Handle the error as needed
  }
};
