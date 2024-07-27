import axios from "axios";

export const Signup = async (data: {
  name: string;
  phone: string;
  password: string;
}) => {
  const response = await axios.post(
    `https://workshop-management-backend.onrender.com` + "/auth/register",
    {
      ...data,
      role: "admin",
    }
  );
  return response.data;
};
