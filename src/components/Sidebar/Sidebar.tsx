"use client";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "@/app/config/SidebarConfig";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-white overflow-y-hidden ${
        isOpen ? "w-72" : "w-24"
      } transition-width duration-300 shadow-lg`}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div className="flex items-center justify-between p-4">
        <Link href={"/"} className={`text-lg font-bold px-1`}>
          WMS
        </Link>
      </div>
      <div className="mt-6 px-2 relative">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.label} {...item} isOpen={isOpen} />
        ))}
        <SidebarItem
          key={"Logout"}
          icon={CiLogout}
          label="Logout"
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default Sidebar;
