import axios from "axios";

interface LoginParams {
  phone: string;
  password: string;
}

export const login = async (credentials: LoginParams) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/auth/login`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json', // Ensure the content type is set to JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Handle the error as needed
  }
};
