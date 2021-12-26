import React from "react";
import DataTable from "react-data-table-component";
import DataTableBase from "../../components/DataTableBase";
import Input from "../../components/Input";

const Table = () => {
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const columns = [
    {
      name: "Bölüm Adı",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

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
              <div class="relative inline-block w-20 text-gray-700 mr-2">
                <select
                  class="w-20 h-10 px-4  text-sm placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline "
                  placeholder="Regular input"
                >
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </select>
                <div class="absolute inset-y-0 right-3 text-gray-300 flex items-center px-2 pointer-events-none">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
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
          <div>2</div>
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
