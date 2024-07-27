import axios from "axios";

interface UpdateVehicleParams {
  model?: string;
  type?: string;
  isActive?: boolean;
  // Add other fields as needed
}

export const updateVehicleById = async (id: string, data: UpdateVehicleParams) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/vehicles/${id}`,
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
    console.error("Error updating vehicle:", error);
    throw error; // Handle the error as needed
  }
};
