"use client";
import React, { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createWorkOrder } from "@/utils/work-order/createOrder";
import { notify } from "@/utils/Toast";
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    title: "",
    department: "",
    description: "",
    priority: "",
    assignedTo: "",
    startDate: "",
    dueDate: "",
    laborHours: 0,
    estimatedCost: 0,
    status: "Pending",
  });

  const mutation = useMutation({
    mutationFn: createWorkOrder,
    onSuccess: (data: any) => {
      console.log(data);
      notify("Employee Created Successfully", "success");
    },
    onError: (error: any) => {
      console.error(error);
      setError(error.message);
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      mutation.mutate(formData);
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrder = (e: FormEvent) => {
    console.log(formData);
    handleSubmit(e);
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
