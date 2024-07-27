import axios from "axios";

interface CheckAvailabilityParams {
  vehicleId: string;
  startTime: string;
  endTime: string;
}

export const checkVehicleAvailability = async (
  params: CheckAvailabilityParams
) => {
  try {
    const { vehicleId, startTime, endTime } = params;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/rosters/availability/check`,
      {
        params: {
          vehicleId,
          startTime,
          endTime,
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error checking vehicle availability:", error);
    throw error; // Handle the error as needed
  }
};
