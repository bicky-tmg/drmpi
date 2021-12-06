import { Modal } from "react-bootstrap";
import styled from "styled-components";
import DNoticeForm from "./DNoticeForm";

const { Header, Title, Body } = Modal;

const CustomModal = styled(Modal)`
  .modal-header {
    border-bottom: 1px solid transparent;
  }
  .modal-footer {
    border-top: 1px solid transparent;
  }
`;

const DNoticeModal = ({
  show,
  handleClose,
  actionMode,
  rowId,
  notice,
}) => {
  return (
    <CustomModal show={show} onHide={handleClose} size="lg">
      <Header closeButton>
        <Title>{actionMode === "add" ? "Add" : "Edit"} Notice</Title>
      </Header>
      <Body>
        <DNoticeForm actionMode={actionMode} rowId={rowId} notice={notice} />
      </Body>
    </CustomModal>
  );
};

export default DNoticeModal;
