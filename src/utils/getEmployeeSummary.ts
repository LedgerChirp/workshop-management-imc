import axios from "axios";

export const getEmployeeSummary = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/employees/stats/summary`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee summary:", error);
    throw error; // Handle the error as per your use case
  }
};
