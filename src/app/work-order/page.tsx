import React from "react";
import SummaryCard from "@/components/Card/SummaryCard";
import NewWorkOrderModal from "@/components/Modal/NewWorkOrderModal";
import EmptyState from "@/components/EmptyState/WorkOrderEmptyState";
import Table from "@/components/Table/Table";

const Page: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 p-8 h-full">
      <div className="w-full mx-auto h-full">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Orders Summary</h1>
          <NewWorkOrderModal />
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
        <Table />
        <div className="bg-white p-8 rounded-lg shadow-md h-max w-full">
          <div></div>
          {/* <EmptyState /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
