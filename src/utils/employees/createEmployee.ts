import axios from "axios";

export const createEmployee = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/employees`,
      data, // This is where the data parameter is used in the request body
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json", // Ensure the Content-Type is set
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error; // You might want to handle the error differently depending on your use case
  }
};
