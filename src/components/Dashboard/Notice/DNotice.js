import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./DNotice.css";
import DNoticeList from "./DNoticeList";
import styled from "styled-components";
import DNoticeModal from "./DNoticeModal";
import PageTitle from "../PageTitle";
import { useEffect, useState } from "react";
import { useGetNoticeByIdQuery } from "../../../app/services/auth";

const { Header, Body, Footer } = Card;

export const CustomCard = styled(Card)`
  border-color: transparent;
  box-shadow: 0 4px 8px rgb(0 0 0 / 5%);

  .card-footer {
    border-top: 1px solid transparent;
  }
`;

const DNotice = () => {
  const [show, setShow] = useState(false);
  const [actionMode, setActionMode] = useState("add");
  const [rowId, setRowId] = useState("");

  const handleShow = (mode) => {
    setActionMode(mode);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const [skip, setSkip] = useState(true);
  const { data: notice } = useGetNoticeByIdQuery(rowId, { skip });

  useEffect(() => {
    actionMode === "edit" ? setSkip(false) : setSkip(true);
  }, [actionMode]);

  return (
    <>
      <section className="dashboard-wrapper">
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
                <Body className="pt-0 pb-0 position-relative">
                  <DNoticeList handleShow={handleShow} setRowId={setRowId} />
                </Body>
                <Footer className="clearfix">
                  <Button
                    variant="light"
                    className="elevation-1 float-right"
                    onClick={() => handleShow("add")}
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
        rowId={rowId}
        notice={notice}
      />
    </>
  );
};

export default DNotice;
