import { FC } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  notifications?: number;
  isOpen: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  notifications,
  isOpen,
}) => {
  return (
    <Link
      href={`/${label.toLowerCase()}`}
      passHref
      className={`flex items-center p-4 ${
        label === "Logout" ? "hover:bg-[#CC5F5F]" : "hover:bg-[#5570F1]"
      }  hover:text-white rounded-xl`}
    >
      <Icon className="w-6 h-6" />
      <span className={`ml-4 ${!isOpen && "hidden"}`}>{label}</span>
      {notifications && (
        <span className="ml-auto text-sm bg-[#FFCC91] text-black rounded-full w-6 h-6 flex items-center justify-center px-1">
          {notifications}
        </span>
      )}
    </Link>
  );
};

export default SidebarItem;
