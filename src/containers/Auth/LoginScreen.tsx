"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock API call
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Handle successful login
      console.log("Logged in successfully");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card>
        <div className="flex flex-col space-y-3 justify-evenly items-center w-[30vw] h-[80vh] p-5">
          <div className="flex flex-col justify-center items-center text-centers space-y-2">
            <h1 className="font-medium text-2xl">Welcome Back!</h1>
            <p className="font-base text-gray-400 text-xs">
              Login back to your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 w-full justify-center items-center h-full "
          >
            <div className=" w-full">
              <Input
                name="phone"
                type="number"
                placeholder="Phone"
                icon={<FaPhoneAlt />}
                value={formData.phone}
                onTextChange={handleChange}
              />
            </div>
            <div className="text-end space-y-3 flex flex-col w-full">
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                icon={<CiLock />}
                onTextChange={handleChange}
              />
              <Link href={"/"} className="text-blue-400">Recover Password</Link>
            </div>
              <p className="text-gray-300">Don&apos;t have an account? <Link href={"/auth/signup"} className="text-blue-400">Signup</Link></p>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginScreen;
