import axios from "axios";

export const getFuelConsumptionById = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/fuel-consumptions/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching fuel consumption by ID:", error);
    throw error; // Handle the error as per your use case
  }
};
