import React from "react";

const Button = ({ children = "Login", disabled, type }: any) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`bg-[#5570F1] text-white font-medium text-base px-5 py-2 w-full h-fit rounded-lg hover:bg-[#556ff1d6] ${
        disabled ? "bg-gray-500 hover:bg-gray-500" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
