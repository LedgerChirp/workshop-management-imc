import React from "react";
import Table from "@/components/Table/Table";
import { rosterData } from "@/app/roster/rosterData";
import NewFuelModal from "./NewFuelModal";

const Fuel = () => {
  return (
    <>
      <NewFuelModal />
      <Table dataProp={rosterData} />
    </>
  );
};

export default Fuel;
