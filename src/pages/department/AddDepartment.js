import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../components/Modal";
import { useForm } from "react-hook-form";

const AddDepartment = ({ isOpen, toggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Bölüm Ekle</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("department", { required: true })}
                placeholder="Lütfen bölüm adı giriniz."
              />
              {errors.department && <span>This field is required</span>}
            </div>
          </ModalBody>
          <ModalFooter>
            <button type="submit" className="bg-blue-500 p-2 px-3 rounded-md text-white">
              Ekle
            </button>
            <button
              className="bg-gray-500 p-2 px-3 rounded-md text-white"
              onClick={() => toggle()}
            >
              İptal
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default AddDepartment;
