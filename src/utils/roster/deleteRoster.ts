import axios from "axios";

export const deleteRosterById = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/rosters/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting roster:", error);
    throw error; // Handle the error as needed
  }
};
