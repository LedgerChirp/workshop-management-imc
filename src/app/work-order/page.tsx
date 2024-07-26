import React from "react";
import SummaryCard from "@/components/Card/SummaryCard";
import EmptyState from "@/components/EmptyState/WorkOrderEmptyState";
import Table from "@/components/Table/Table";

const Page: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 p-8 h-full">
      <div className="w-full mx-auto h-full">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Orders Summary</h1>
          <button className="px-4 py-2 bg-[#5570F1] text-white rounded-lg">
            + Create a New Order
          </button>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full">
          <SummaryCard title="All Orders" value={0} icon={<span>📦</span>} />
          <SummaryCard title="Canceled" value={0} icon={<span>📦</span>} />
          <SummaryCard
            title="Abandoned Cart"
            value={0}
            icon={<span>🛒</span>}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md h-max w-full">
          <div>{/* <Table /> */}</div>
          <EmptyState />
        </div>
      </div>
    </div>
  );
};

export default Page;
