import axios from "axios";

export const updateEmployee = async (data: any, id: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/employees/${id}`,
      data, // Data to be sent in the request body
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
          "Content-Type": "application/json", // Ensure the Content-Type is set
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error; // You might want to handle the error differently depending on your use case
  }
};
