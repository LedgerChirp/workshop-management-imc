import axios from "axios";

export const updateFuelConsumptionById = async (id: string, data: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/fuel-consumptions/${id}`,
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
    console.error("Error updating fuel consumption by ID:", error);
    throw error; // Handle the error as per your use case
  }
};
