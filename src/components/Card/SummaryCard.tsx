import React from "react";

interface SummaryCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  color = "bg-white",
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color}`}>
      <div className="flex items-center">
        <div className="mr-4">{icon}</div>
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-xl font-bold">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
