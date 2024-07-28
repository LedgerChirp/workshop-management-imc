"use client";
import Table from "@/components/Table/Table";
import React, { useState, useEffect } from "react";
import NewEmployeeModal from "@/components/Modal/NewEmployeeModal";
import { employeeData as initialEmployeeData } from "./employeeData";

const Employees = () => {
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees
      ? JSON.parse(storedEmployees)
      : initialEmployeeData.data;
  });

  const addEmployee = (newEmployee: any) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  return (
    <>
      <NewEmployeeModal addEmployee={addEmployee} />
      <Table dataProp={{ ...initialEmployeeData, data: employees }} />
    </>
  );
};

export default Employees;
