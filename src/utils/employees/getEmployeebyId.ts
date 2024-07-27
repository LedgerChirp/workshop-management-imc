import axios from "axios";

export const getEmployeeById = async (id: string | number) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/employees/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee by ID:", error);
    throw error; // Handle the error as per your use case
  }
};
