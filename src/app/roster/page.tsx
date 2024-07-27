import Table from "@/components/Table/Table";
import React from "react";
import { rosterData } from "./rosterData";
import Fuel from "@/containers/Fuel/Fuel";

const page = () => {
  return (
    <div className="px-10">
      <Fuel />
    </div>
  );
};

export default page;
