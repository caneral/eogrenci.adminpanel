import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const Modal = ({ isOpen, toggle, children }) => {
  return (
    <div
      className={`z-50 ${
        !isOpen && "hidden"
      } fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50`}
    >
      <div className={`relative top-20 mx-auto py-5 border w-96 shadow-lg rounded-md bg-white `}>
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({ children, toggle }) => {
  return (
    <div>
      <div className="flex justify-between px-5 pb-5">
        <h1 className="font-medium">{children}</h1>
        <button onClick={toggle}>
          <IoCloseSharp size={20} />
        </button>
      </div>
      <hr />
    </div>
  );
};

const ModalBody = ({ children }) => {
  return (
    <div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

const ModalFooter = ({ children }) => {
  return (
    <div>
      <hr />
      <div className="pt-5 px-5 flex justify-end space-x-2">
        {children}
      </div>
    </div>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
