import axios from "axios";

// Define the parameters for the request
interface FetchCostSummaryParams {
  startDate: string;
  endDate: string;
}

export const fetchWorkOrdersCostSummary = async ({
  startDate,
  endDate,
}: FetchCostSummaryParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/cost-summary`,
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
    console.error("Error fetching work orders cost summary:", error);
    throw error; // Handle the error as needed
  }
};
