import React from "react";
import { FiShoppingBag, FiUsers, FiBox, FiShoppingCart } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top row stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={<FiShoppingBag />}
          title="Orders"
          value="0"
          subvalue="₹0.00"
        />
        <StatCard icon={<FiUsers />} title="Customers" value="0" />
        <StatCard icon={<FiBox />} title="Products" value="0" />
        <StatCard
          icon={<FiShoppingCart />}
          title="Abandoned Cart"
          value="0"
          percent="0%"
        />
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Marketing donut chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Marketing</h2>
          {/* Placeholder for donut chart */}
          <div className="w-full h-64 bg-gray-200 rounded-full"></div>
        </div>

        {/* All Products card */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">All Products</h2>
            <span className="text-blue-500">View All</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              <p className="text-sm">All Products</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <p className="text-sm">Active</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>

        {/* Recent Orders card */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="flex flex-col items-center justify-center h-48">
            <FiShoppingBag className="text-6xl text-gray-300 mb-4" />
            <p className="text-gray-500">No Orders Yet?</p>
            <p className="text-sm text-gray-400 text-center mt-2">
              Add products to your store and start selling to see orders here.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              + New Product
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row - Sales chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <select className="border rounded-md px-2 py-1">
            <option>Sales</option>
          </select>
        </div>
        {/* Placeholder for line chart */}
        <div className="w-full h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subvalue?: string;
  percent?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  subvalue,
  percent,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <div className="mr-2 text-gray-500">{icon}</div>
        <h3 className="text-sm text-gray-500">{title}</h3>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold mr-2">{value}</p>
        {subvalue && <p className="text-sm text-gray-500">{subvalue}</p>}
        {percent && <p className="text-sm text-gray-500 ml-auto">{percent}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
