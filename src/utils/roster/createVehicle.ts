import axios from "axios";

interface VehicleData {
  make: string;
  model: string;
  year: number;
  vin: string; // Vehicle Identification Number
  licensePlate?: string;
  color?: string;
  [key: string]: any; // Additional fields if necessary
}

export const createVehicle = async (vehicleData: VehicleData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/vehicles`,
      vehicleData,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating vehicle:", error);
    throw error; // Handle the error as per your use case
  }
};
