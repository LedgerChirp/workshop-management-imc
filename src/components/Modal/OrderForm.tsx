"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { Textarea } from "@nextui-org/react";

interface OrderFormProps {
  formData: any;
  setFormData: (formData: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ formData, setFormData }) => {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };
  // console.log(formData);
  
  return (
    <form className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <label className="text-gray-700">Title</label>
        <Input
          placeholder="Enter Title"
          type="text"
          className="mb-2"
          onChange={(e: any) => handleChange("title", e.target.value)}
        />
        <label className="text-gray-700">Department</label>
        <Select
          placeholder="Select Department"
          onChange={(e: any) => handleChange("department", e.target.value)}
        >
          <SelectItem key="dept1" value="Department 1">
            Department 1
          </SelectItem>
          <SelectItem key="dept2" value="Department 2">
            Department 2
          </SelectItem>
        </Select>
      </div>
      <div className="col-span-2">
        <label className="text-gray-700">Description</label>
        <Textarea
          placeholder="Enter Description"
          onChange={(e: any) => handleChange("description", e.target.value)}
          rows={4}
        />
      </div>
      <div>
        <label className="text-gray-700">Priority Level</label>
        <Select
          placeholder="Select Priority Level"
          onChange={(e: any) => handleChange("priority", e.target.value)}
        >
          <SelectItem key="low" value="Low">
            Low
          </SelectItem>
          <SelectItem key="medium" value="Medium">
            Medium
          </SelectItem>
          <SelectItem key="high" value="High">
            High
          </SelectItem>
        </Select>
      </div>
      <div>
        <label className="text-gray-700">Assigned to</label>
        <Select
          placeholder="Select Employee"
          onChange={(e: any) => handleChange("assignedTo", e.target.value)}
        >
          <SelectItem key="emp1" value="Employee 1">
            Employee 1
          </SelectItem>
          <SelectItem key="emp2" value="Employee 2">
            Employee 2
          </SelectItem>
        </Select>
      </div>
      <div>
        <label className="text-gray-700">Start Date</label>
        <DatePicker
          label="Start Date"
          onChange={(date: any) =>
            handleChange("startDate", date?.toString() || "")
          }
        />
      </div>
      <div>
        <label className="text-gray-700">Due Date</label>
        <DatePicker
          label="Due Date"
          onChange={(date: any) =>
            handleChange("dueDate", date?.toString() || "")
          }
        />
      </div>
      <div>
        <label className="text-gray-700">Labor Hours</label>
        <Input
          placeholder="Enter Labor Hours"
          type="number"
          onChange={(e: any) =>
            handleChange("laborHours", parseFloat(e.target.value))
          }
        />
      </div>
      <div>
        <label className="text-gray-700">Cost Estimate (INR)</label>
        <Input
          placeholder="Enter Cost Estimate"
          type="number"
          onChange={(e: any) => handleChange("costEstimate", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <label className="text-gray-700">Order Status</label>
        <Input placeholder="Order Status" value="Pending" disabled />
      </div>
    </form>
  );
};

export default OrderForm;
