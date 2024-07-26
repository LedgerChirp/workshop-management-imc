import React from "react";

const Button = ({ children = "Login" }: any) => {
  return (
    <button className="bg-[#5570F1] text-white font-medium text-base px-5 py-2 w-fit h-fit rounded-lg">
      {children}
    </button>
  );
};

export default Button;
