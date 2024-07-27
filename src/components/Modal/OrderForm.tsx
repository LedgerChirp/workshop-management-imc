"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Switch } from "@nextui-org/switch";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { Textarea } from "@nextui-org/react";

const OrderForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-gray-700">Order Details</label>
        <Switch size="sm" color="primary" />
      </div>
      <Select placeholder="Select Customer">
        <SelectItem key={1}>Customer 1</SelectItem>
        <SelectItem key={2}>Customer 2</SelectItem>
      </Select>
      <div className="grid grid-cols-2 gap-4">
        <Select placeholder="Payment Type">
          <SelectItem key={"credit"}>Credit Card</SelectItem>
          <SelectItem key={"cash"}>Cash</SelectItem>
        </Select>
        <Select placeholder="Order Type">
          <SelectItem key={"online"}>Online</SelectItem>
          <SelectItem key={"instore"}>In Store</SelectItem>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DatePicker />
        <Input placeholder="Order Time" type="time" />
      </div>
      <Select placeholder="Order Status">
        <SelectItem key={"pending"}>Pending</SelectItem>
        <SelectItem key={"completed"}>Completed</SelectItem>
      </Select>
      <Textarea placeholder="Order Note" />
      <div className="flex items-center justify-between">
        <label className="text-gray-700">Add Products to Your Order</label>
      </div>
      <Input placeholder="Search product name" />
    </form>
  );
};

export default OrderForm;
