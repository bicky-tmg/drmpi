import { useEffect } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { useDeleteNoticeMutation } from "../../../app/services/auth";
import { useMessage } from "../Messages/MessageProvider";

const { Header, Title, Body, Footer } = Modal;

const CustomModal = styled(Modal)`
  .modal-header {
    border-bottom: 1px solid transparent;
  }
  .modal-body {
    font-size: 14px;
    padding-bottom: 0;
  }
  .modal-footer {
    border-top: 1px solid transparent;
  }
`;

const ConfirmDeleteModal = ({ show, handleClose, id }) => {
  const [deleteNotice, { isLoading: isDeleting, isSuccess }] =
    useDeleteNoticeMutation();
  const { addMessage } = useMessage();

  useEffect(() => {
    if (isSuccess) addMessage("Success", "Notice deleted successfully");
  }, [isSuccess, addMessage]);
  
  return (
    <CustomModal show={show} onHide={handleClose}>
      <Header closeButton className="bg-danger">
        <Title className="text-white">Are you sure?</Title>
      </Header>
      <Body>
        <p className="text-secondary">
          Do you really want to delete this record? This process cannot be
          undone.
        </p>
      </Body>
      <Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancle
        </Button>
        <Button
          variant="danger"
          onClick={() => deleteNotice(id).then(() => handleClose())}
          disabled={isDeleting}
          className="d-flex align-items-center"
        >
          {isDeleting && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mr-2"
            />
          )}
          Delete
        </Button>
      </Footer>
    </CustomModal>
  );
};

export default ConfirmDeleteModal;
