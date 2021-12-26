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

  export default columns;