"use client";
import Table from "@/components/Table/Table";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/utils/GetEmployees";
import NewEmployeeModal from "@/components/Modal/NewEmployeeModal";

const Employees = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees(1, 10),
  });
  //   console.log(data);
  return (
    <>
      <NewEmployeeModal />
      <Table />;
    </>
  );
};

export default Employees;
