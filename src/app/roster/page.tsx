import Table from "@/components/Table/Table";
import React from "react";
import { rosterData } from "./rosterData";

const page = () => {
  return (
    <div className="px-10">
      <Table dataProp={rosterData} />
    </div>
  );
};

export default page;
