import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
// import DatePicker from "react-datepicker";
import DNoticeForm from "./DNoticeForm";

const { Header, Title, Body, Footer } = Modal;

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
  // title,
  // setTitle,
  // location,
  // setLocation,
  // startDate,
  // setStartDate,
  // setSelectedFiles,
  // handleAddEditNotice,
}) => {
  return (
    <CustomModal show={show} onHide={handleClose} size="lg">
      <Header closeButton>
        <Title>{actionMode === "add" ? "Add" : "Edit"} Notice</Title>
      </Header>
      <Body>
        {/* <form>
          <div className="form-group">
            <label htmlFor="title" className="font-weight-bold">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="font-weight-bold">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-4">
              <label className="font-weight-bold">Date</label>
              <DatePicker
                className="form-control"
                name="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="formControlFile" className="font-weight-bold">
              Files
            </label>
            <input
              type="file"
              className="form-control-file"
              id="formControlFile"
              name="fileInput"
              multiple
              onChange={(event) => console.log(event.target.files)}
            />
          </div>
        </form> */}
        <DNoticeForm actionMode={actionMode} rowId={rowId} notice={notice} />
      </Body>
      {/* <Footer>
        <Button variant="primary" onClick={handleAddEditNotice}>
          Add Notice
        </Button>
      </Footer> */}
    </CustomModal>
  );
};

export default DNoticeModal;
