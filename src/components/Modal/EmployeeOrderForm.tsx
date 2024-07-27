"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { Autocomplete, AutocompleteItem, Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
interface OrderFormProps {
  formData: any;
  setFormData: (formData: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ formData, setFormData }) => {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="space-y-4 p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-gray-700">First Name</label>
          <Input
            placeholder="Enter First Name"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">Last Name</label>
          <Input
            placeholder="Enter Last Name"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">Email</label>
          <Input
            placeholder="Enter Email"
            type="email"
            className="w-full"
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-gray-700">Phone Number</label>
          <Input
            placeholder="Enter Phone Number"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">Position</label>
          <Input
            placeholder="Enter Position"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("position", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">Department</label>
          <Select
            items={[
              { label: "Department 1", value: "Department-1" },
              { label: "Department 2", value: "Department-2" },
            ]}
            label="Department"
            placeholder="Select a Department"
            onSelectionChange={(selection) => {
              const selectedValue = selection.currentKey;
              handleChange("department", selectedValue);
            }}
          >
            {(dept) => <SelectItem key={dept.label}>{dept.label}</SelectItem>}
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700">Address</label>
        <Textarea
          placeholder="Enter Address"
          onChange={(e) => handleChange("address", e.target.value)}
          rows={4}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-gray-700">City</label>
          <Input
            placeholder="Enter City"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">State</label>
          <Input
            placeholder="Enter State"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("state", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">Government ID</label>
          <Input
            placeholder="Enter Government ID"
            type="text"
            className="w-full"
            onChange={(e) => handleChange("governmentId", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-gray-700">Date of Birth</label>
          <DatePicker
            label="Date of Birth"
            onChange={(date) => {
              console.log(date.toString());
              handleChange("dateOfBirth", date?.toString() || "");
            }}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700">Date of Joining</label>
          <DatePicker
            label="Date of Joining"
            onChange={(date) => {
              console.log(date.toString());
              handleChange("dateOfJoining", date?.toString() || "");
            }}
            className="w-full"
          />
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
