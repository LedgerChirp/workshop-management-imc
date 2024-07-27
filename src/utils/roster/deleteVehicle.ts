import axios from "axios";

export const deleteVehicleById = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/vehicles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    throw error; // Handle the error as needed
  }
};
