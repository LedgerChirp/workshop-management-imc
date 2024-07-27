"use client";
import Table from "@/components/Table/Table";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/utils/employees/GetEmployees";

const Employees = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees(1, 10),
  });
//   console.log(data);
  return <Table />;
};

export default Employees;
