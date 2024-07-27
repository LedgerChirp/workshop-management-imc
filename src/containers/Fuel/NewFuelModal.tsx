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
import FuelForm from "./FuelForm";

const NewFuelModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    department: "",
    address: "",
    city: "",
    state: "",
    governmentId: "",
    dateOfBirth: "",
    dateOfJoining: "",
  });

  const handleCreateEmployee = () => {
    console.log("Employee Data:", formData);
    onClose();
  };

  return (
    <div>
      <div className="flex w-full items-center justify-end my-3">
        <Button onPress={onOpen} className="bg-blue-500 text-white">
          + Create a New Employee
        </Button>
      </div>
      <Modal
        size="3xl"
        aria-labelledby="modal-title"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-bold">Create New Employee</h1>
              </ModalHeader>
              <ModalBody>
                <FuelForm formData={formData} setFormData={setFormData} />
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" color="danger" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateEmployee}
                  className="bg-blue-500 text-white"
                >
                  Create Employee
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewFuelModal;
