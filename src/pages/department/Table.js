import React, { useState } from "react";
import DataTableBase from "../../components/DataTableBase";
import AddDepartment from "./AddDepartment";
import columns from "./columns";
const Table = () => {
  const [modal, setModal] = useState(false);

  //Toggle for Modal
  const toggle = () => setModal(!modal);
  const data = [
    {
      id: 1,
      department: "Bilişim Sistemleri Mühendisliği",
      year: "1988",
    },
    {
      id: 2,
      department: "Bilgisayar Mühendisliği",
      year: "1984",
    },
  ];
  const CustomHeader = () => {
    return (
      <div className="w-full mt-2 mb-75 ">
        <div className="grid grid-cols-2">
          <div className="flex  items-center p-0 ">
            <div className="flex items-center w-full">
              <div className="relative inline-block w-20 text-gray-700 mr-2">
                <select
                  className="w-20 h-10 px-4  text-sm placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline "
                  placeholder="Regular input"
                >
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </select>
                <div className="absolute inset-y-0 right-3 text-gray-300 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <label
                htmlFor="rows-per-page"
                className="text-black-base text-sm"
              >
                kayıt gösteriliyor
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-purple-base rounded-md px-4 text-white"
              onClick={() => setModal(!modal)}
            >
              Bölüm Ekle
            </button>
          </div>
          <AddDepartment isOpen={modal} toggle={toggle} />
        </div>
      </div>
    );
  };
  return (
    <div>
      <DataTableBase
        columns={columns}
        data={data}
        subHeader
        subHeaderComponent={<CustomHeader />}
      />
    </div>
  );
};

export default Table;
