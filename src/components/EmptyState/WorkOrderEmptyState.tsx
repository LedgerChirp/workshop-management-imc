import React from "react";

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4">
        <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            className="h-8 w-8 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4.5c-1.48 0-2.75.81-3.45 2H4.5v1h2.57c-.06.16-.07.33-.07.5s.01.34.07.5H4.5v1h4.05c.69 1.19 1.96 2 3.45 2s2.75-.81 3.45-2H19.5v-1h-2.57c.06-.16.07-.33.07-.5s-.01-.34-.07-.5H19.5v-1h-4.05c-.69-1.19-1.96-2-3.45-2zm0 6c-.83 0-1.5-.67-1.5-1.5S11.17 7.5 12 7.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM3 17h18v2H3z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-500">No Orders Yet?</p>
      <p className="text-gray-400">
        Add products to your store and start selling to see orders here.
      </p>
      <button className="mt-4 px-4 py-2 bg-[#5570F1] text-white rounded-lg">
        + New Order
      </button>
    </div>
  );
};

export default EmptyState;
