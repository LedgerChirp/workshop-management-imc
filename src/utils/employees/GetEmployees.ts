import axios from "axios";

export const getEmployees = async (page: any, limit: any) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT +
      "/employees" +
      `?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_BACKEND_TOKEN,
      },
    }
  );
  return response.data;
};
