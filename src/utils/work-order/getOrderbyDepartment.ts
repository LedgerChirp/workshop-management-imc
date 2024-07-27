import axios from "axios";

// Define the parameters for the request
interface FetchWorkOrdersByDepartmentParams {
  departmentName: string;
}

export const fetchWorkOrdersByDepartment = async ({
  departmentName,
}: FetchWorkOrdersByDepartmentParams) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/work-orders/department/${departmentName}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching work orders by department:", error);
    throw error; // Handle the error as needed
  }
};
