import { Container, Row } from "react-bootstrap";

import NoticeItem from "./NoticeItem";

const NoticeList = (props) => {
  return (
    <Container>
      <Row>
        {props.notices.map((notice) => (
          <NoticeItem
            key={notice.id}
            id={notice.id}
            title={notice.title}
            location={notice.location}
            date={notice.date}
          />
        ))}
      </Row>
    </Container>
  );
};

export default NoticeList;
