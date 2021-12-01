import React from "react";
import DataTable from "react-data-table-component";

const DataTableBase = (props) => {
  return <DataTable pagination {...props} />;
};

export default DataTableBase;
