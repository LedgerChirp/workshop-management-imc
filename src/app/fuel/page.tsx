import Table from "@/components/Table/Table";
import React from "react";
import { fuelData } from "./fuelData";

const page = () => {
  return (
    <div className="px-10">
      <Table dataProp={fuelData} />
    </div>
  );
};

export default page;
