import Table from "@/components/Table/Table";
import React from "react";
import { expenseData } from "./expenseData";

const page = () => {
  return (
    <div className="px-10">
      <Table dataProp={expenseData} />
    </div>
  );
};

export default page;
