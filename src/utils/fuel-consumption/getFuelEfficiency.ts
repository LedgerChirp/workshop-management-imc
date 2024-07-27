import axios from "axios";

export const getFuelConsumptionEfficiency = async (
  id: string,
  startDate?: string,
  endDate?: string
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/fuel-consumptions/efficiency/${id}`,
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
    console.error("Error fetching fuel consumption efficiency:", error);
    throw error; // Handle the error as per your use case
  }
};