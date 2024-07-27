import axios from "axios";

export const getFuelConsumptionComparison = async (
  startDate?: string,
  endDate?: string
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/fuel-consumptions/comparison`,
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
    console.error("Error fetching fuel consumption comparison:", error);
    throw error; // Handle the error as per your use case
  }
};
