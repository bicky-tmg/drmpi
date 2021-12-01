import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./DNotice.css";
import DNoticeList from "./DNoticeList";
import styled from "styled-components";
import DNoticeModal from "./DNoticeModal";
import PageTitle from "../PageTitle";
import { useState } from "react";
import { useAddNoticeMutation } from "../../../app/services/auth";

const { Header, Body, Footer } = Card;

const CustomCard = styled(Card)`
  border-color: transparent;
  box-shadow: 0 4px 8px rgb(0 0 0 / 5%);

  .card-footer {
    border-top: 1px solid transparent;
  }
`;

const DNotice = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [actionMode, setActionMode] = useState("add");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedFiles, setSelectedFiles] = useState(null);

  const [addNotice, { isLoading }] = useAddNoticeMutation();

  const canSave = [title, location, startDate].every(Boolean) && !isLoading;

  const handleAddNotice = async (formData) => {
    if (canSave) {
      try {
        await addNotice(formData).unwrap();
        setTitle("");
        setLocation("");
        setStartDate(new Date());
        setSelectedFiles(null);
      } catch (err) {
        console.error("Failed to save the post: ", err);
      }
  //   for (var value of formData.values()) {
  //     console.log(value);
  //   }

  //   for (var key of formData.keys()) {
  //     console.log(key);
  //  }
    }
  };

  const handleAddEditNotice = () => {
    if (title !== "" && location !== "" && selectedFiles !== null) {
      if (actionMode === "add") {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("location", location);
        formData.append("date", startDate.toJSON());
        formData.append("files", selectedFiles);
        handleAddNotice(formData);
      } else if (actionMode === "edit") {
      }
    }
  };

  return (
    <>
      <section className="dnotice">
        <Container fluid>
          <Row>
            <Col>
              <PageTitle pageName="Notice" />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomCard>
                <Header className="bg-primary text-white">Notice List</Header>
                <Body>
                  <DNoticeList />
                </Body>
                <Footer className="clearfix">
                  <Button
                    variant="light"
                    className="elevation-1 float-right"
                    onClick={handleShow}
                  >
                    <FontAwesomeIcon icon={faPlus} /> Notice
                  </Button>
                </Footer>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </section>
      <DNoticeModal
        show={show}
        handleClose={handleClose}
        actionMode={actionMode}
        title={title}
        setTitle={setTitle}
        location={location}
        setLocation={setLocation}
        startDate={startDate}
        setStartDate={setStartDate}
        setSelectedFiles={setSelectedFiles}
        handleAddEditNotice={handleAddEditNotice}
      />
    </>
  );
};

export default DNotice;
