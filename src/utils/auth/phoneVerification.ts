import axios from "axios";

interface PhoneVerificationParams {
  phone: string;
}

export const verifyPhoneNumber = async (phoneNumber: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_ENDPOINT}/auth/phone-verification`,
      {
        params: { phone: phoneNumber },
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set to JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying phone number:", error);
    throw error; // Handle the error as needed
  }
};
