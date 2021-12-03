import React, { useMemo } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { useGetNoticeQuery } from "../../../app/services/auth";
import DataTable from "../DataTableBase/DataTableBase";

const customStyles = {
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: "700",
    },
  },
};

const PublishedDate = ({ row }) => {
  const date = new Date(row.date).toLocaleDateString("en-GB");
  return <div>{date}</div>;
};

const DNoticeList = ({handleShow, setRowId}) => {
  const { data, isLoading } = useGetNoticeQuery();

  const columns = useMemo(
    () => [
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
        name: "Published on",
        selector: (row) => row.date,
        cell: (row) => <PublishedDate row={row} />,
      },
      {
        id: "actions",
        name: "Actions",
        cell: (row) => (
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" size="sm" onClick={() => {
              setRowId(row.id);
              handleShow("edit")
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Button>
            <Button variant="danger" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </Button>
          </ButtonGroup>
        ),
      },
    ],
    [handleShow, setRowId]
  );
  return (
    <DataTable
      columns={columns}
      customStyles={customStyles}
      progressPending={isLoading}
      progressComponent={
        <Spinner
          animation="grow"
          role="status"
          aria-hidden="true"
          className="my-4"
          variant="secondary"
        />
      }
      data={data}
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
    />
  );
};

export default DNoticeList;
