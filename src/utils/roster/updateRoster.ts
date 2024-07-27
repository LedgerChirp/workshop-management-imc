import axios from "axios";

interface UpdateRosterParams {
  vehicleId?: string;
  assignedToId?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  // Add other fields as needed
}

export const updateRosterById = async (id: string, data: UpdateRosterParams) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/rosters/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating roster:", error);
    throw error; // Handle the error as needed
  }
};
