import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../../components/Modal";
const AddDepartment = ({ isOpen, toggle }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>Caner Al</ModalBody>
          <ModalFooter>
              <button className="bg-blue-500 p-2 px-3 rounded-md text-white">Do Somethings</button>
              <button className="bg-gray-500 p-2 px-3 rounded-md text-white" onClick={() => toggle()}>Cancel</button>
          </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddDepartment;
