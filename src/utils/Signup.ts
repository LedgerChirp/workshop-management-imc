import axios from "axios";

export const Signup = async (data: {
  name: string;
  phone: string;
  password: string;
}) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT + "/auth/register",
    {
      ...data,
      role: "admin",
    }
  );
  return response.data;
};
