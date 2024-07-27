import axios from "axios";

export const createFuelConsumption = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/fuel-consumptions`,
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
    console.error("Error creating fuel consumption:", error);
    throw error; // Handle the error as per your use case
  }
};
