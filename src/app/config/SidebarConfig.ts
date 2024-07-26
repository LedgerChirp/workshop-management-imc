import { IconType } from "react-icons";
import { MdOutlineDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { MdInventory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { CiViewTimeline } from "react-icons/ci";
import { FaMoneyBillWave } from "react-icons/fa";
interface SidebarItemProps {
  label: string;
  icon: IconType;
  notifications?: number;
}

export const sidebarItems: SidebarItemProps[] = [
  { label: "Dashboard", icon: MdOutlineDashboard },
  { label: "Roster", icon: FaCarSide },
  { label: "Work-Order", icon: MdInventory },
  { label: "Employee", icon: IoPeopleSharp },
  { label: "Fuel", icon: LuFuel, notifications: 3 },
  { label: "Expense", icon: FaMoneyBillWave, notifications: 16 },
  { label: "Reports", icon: CiViewTimeline },
  { label: "Settings", icon: IoSettingsOutline },
];
