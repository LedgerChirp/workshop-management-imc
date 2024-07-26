import React, { ChangeEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  type,
  placeholder,
  onTextChange,
  value,
  name,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-center items-center space-x-2 p-2 rounded-lg bg-[#EFF1F9]/60 w-full">
      <div className="text-gray-400">{icon}</div>
      <input
        type={type === "password" && visible ? "text" : type}
        name={name}
        placeholder={placeholder}
        className="p-2 bg-transparent outline-none w-full"
        value={value}
        min={0}
        onChange={onTextChange}
      />
      {type === "password" && (
        <div onClick={() => setVisible(!visible)} className="cursor-pointer">
          {visible ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};

export default Input;
