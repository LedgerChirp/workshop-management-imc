"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React, { useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { MdLocalPhone } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { Signup } from "@/utils/Signup";

const SignupScreen = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    password: "",
    phone: "",
    countryCode: "+1",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: Signup,
    onError: (error: any) => {
      setError("Signup failed. Please try again.");
      setLoading(false);
    },
    onSuccess: (data: any) => {
      console.log("Registered successfully", data);
      setLoading(false);
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Combine phone number with country code
    const signupData = {
      ...formData,
      phone: `+91${formData.phone}`,
    };
    // console.log(signupData);
    mutation.mutate(signupData);
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
            className="flex flex-col space-y-5 w-full justify-between items-center h-full "
          >
            <div className="flex flex-col space-y-5 w-full justify-center items-center h-full ">
              <div className=" w-full">
                <Input
                  name="name"
                  type="text"
                  placeholder="Your Full Name"
                  icon={<RxPerson />}
                  value={formData.name}
                  onTextChange={handleChange}
                />
              </div>
              {/* <div className="text-end space-y-3 flex flex-col w-full">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  icon={<CiMail />}
                  onTextChange={handleChange}
                />
              </div> */}
              <div className="text-end space-y-3 flex flex-col w-full">
                <div className="flex w-full items-center">
                  {/* <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="p-2  outline-none rounded-l-md w-16"
                  >
                    {countries &&
                      countries.map((value) => (
                        <option key={value.name} value={value.code}>
                          {value.name}
                          {value.code}
                        </option>
                      ))}
                  </select> */}

                  <Input
                    name="phone"
                    type="text"
                    icon={<MdLocalPhone />}
                    placeholder="Phone Number"
                    value={formData.phone}
                    onTextChange={handleChange}
                  />
                </div>
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
              </div>
              <p className="text-gray-300">
                Already have an account?{" "}
                <Link href={"/auth/login"} className="text-blue-400">
                  Login
                </Link>
              </p>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Signup"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default SignupScreen;
