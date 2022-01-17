 const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Bölüm Adı",
      selector: (row) => row.departmentName,
      sortable: true,
    },
  ];

  export default columns;