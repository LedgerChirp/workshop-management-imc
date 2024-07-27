"use client";
import React, { useState } from "react";
import Image from "next/image";

const AccountSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Account Settings</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update
        </button>
      </div>

      <div className="mb-6">
        <ul className="flex border-b">
          {["Account", "Business", "Security"].map((tab) => (
            <li
              key={tab}
              className={`mr-1 ${
                activeTab === tab ? "border-b-2 border-blue-500" : ""
              }`}
            >
              <button
                className={`py-2 px-4 ${
                  activeTab === tab ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value="Usman"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value="Ndako"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                value="usmanndako@gmail.com"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <select className="p-2 border rounded-l-md w-20">
                  <option>+234</option>
                </select>
                <input
                  type="tel"
                  className="w-full p-2 border border-l-0 rounded-r-md"
                  value="08065650633"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value="No. 93 Skyfield Apartments"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value="Yaba"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Nigeria</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Lagos</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src="/path-to-profile-image.jpg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
              {/* Add pencil icon here */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
