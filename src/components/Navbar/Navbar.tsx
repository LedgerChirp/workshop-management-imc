"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { notify } from "@/utils/Toast";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";
const Navbar = () => {
  const path = usePathname();
  const router = useRouter();
  const formattedPath = path.startsWith("/") ? path.slice(1) : path;
  const [openModal, setOpenModal] = useState(false);
  // const { user } = useAuth();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      console.log(parsedUser);
      setUsername(parsedUser.username);
    }
  }, []);

  const Links = [
    {
      name: "Settings",
      function: () => {
        router.push("/settings");
        setOpenModal(false);
      },
    },
    {
      name: "Logout",
      function: async () => {
        await Cookies.remove("auth");
        await router.push("/auth/login");
        await localStorage.removeItem("user");
        notify("Logged out successfully!", "success");
        setOpenModal(false);
      },
    },
  ];
  return (
    <>
      <div className="w-full h-20 fixed right-0 flex flex-row z-50 justify-between items-center bg-white bg-opacity-100 px-10">
        <Image
          src={"/logo.png"}
          alt=""
          className="h-10 w-10 rounded-full"
          width={1000}
          height={1000}
        />
        <h1 className="first-letter:uppercase text-lg font-semibold">
          {formattedPath}
        </h1>
        <div>
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            onClick={() => {
              setOpenModal(!openModal);
              // notify("commong", "success");
            }}
            className="rounded-full h-10 w-10 object-cover cursor-pointer hover:border-2 transition-all duration-200 ease-linear border-blue-400"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col space-y-3">
            {openModal && (
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="absolute top-20 justify-center items-center bg-white right-5 flex flex-col space-y-2 p-2 rounded-md shadow-xl"
              >
                <p className="font-bold uppercase text-blue-600">{username}</p>
                {Links &&
                  Links.map((value, id) => (
                    <button
                      key={id}
                      onClick={value.function}
                      className="hover:bg-gray-200 py-1 px-2 rounded-lg"
                    >
                      {value.name}
                    </button>
                  ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
