"use client";
import React, { useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";
import OrderForm from "./OrderForm";

const OrderModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    description: "",
    priority: "",
    assignedTo: "",
    startDate: "",
    dueDate: "",
    laborHours: "",
    costEstimate: "",
    status: "Pending",
  });

  const handleCreateOrder = () => {
    console.log(formData);
    onClose();
  };

  return (
    <div>
      <Button onPress={onOpen} className="bg-blue-500 text-white">
        + Create a New Order
      </Button>
      <Modal
        size="xl"
        aria-labelledby="modal-title"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-bold">Create New Order</h1>
              </ModalHeader>
              <ModalBody>
                <OrderForm formData={formData} setFormData={setFormData} />
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" color="danger" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateOrder}
                  className="bg-blue-500 text-white"
                >
                  Create Order
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderModal;
