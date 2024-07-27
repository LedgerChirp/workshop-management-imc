"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const formattedPath = path.startsWith("/") ? path.slice(1) : path;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full h-20 flex flex-row justify-between items-center">
      <h1 className="first-letter:uppercase text-lg font-semibold">
        {formattedPath}
      </h1>
      <div>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="rounded-full h-10 w-10 object-cover"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Navbar;
