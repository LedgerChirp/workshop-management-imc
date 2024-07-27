import axios from "axios";

interface VerifyUserParams {
  token: string; // or any other field required for verification
}

export const verifyUser = async (verificationData: VerifyUserParams) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/auth/verify-user`,
      verificationData,
      {
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying user:", error);
    throw error; // Handle the error as needed
  }
};
