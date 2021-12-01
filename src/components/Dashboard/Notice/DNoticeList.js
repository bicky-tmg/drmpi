import React, { useMemo } from "react";
import DataTable from "../DataTableBase/DataTableBase";

const DNoticeList = () => {
  const columns = useMemo(() => [
    {
      id: "serial",
      name: "#",
      selector: (row) => row.serial,
    },
    {
      id: "title",
      name: "Title",
      selector: (row) => row.title,
    },
    {
      id: "location",
      name: "Location",
      selector: (row) => row.location,
    },
    {
      id: "date",
      name: "Date",
      selector: (row) => row.date,
    },
    {
      id: "files",
      name: "Files",
      selector: (row) => row.files,
    },
  ], []);
  return <DataTable columns={columns} data={[]} />;
};

export default DNoticeList;
