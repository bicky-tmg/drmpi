import ReactDOM from "react-dom";
import { Toast } from "react-bootstrap";
import { useMessage } from "./MessageProvider";

const { Header, Body } = Toast;

const Messages = ({ messages }) => {
  const { removeMessage } = useMessage();
  return ReactDOM.createPortal(
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "relative",
        zIndex: "1051",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "20px",
        }}
      >
        {messages.map((msg) => (
          <Toast
            show={!!msg.id}
            onClose={() => removeMessage(msg.id)}
            delay={15000 + msg.id * 500}
            autohide
            key={msg.id}
            className={msg.variant ? msg.variant.toLowerCase() : ""}
          >
            <Header>
              <strong className="mr-auto">{msg.header}</strong>
            </Header>
            <Body
              className={msg.variant ? "text-white" : "text-dark"}
              style={{ fontSize: "13px"}}
            >
              {msg.content}
            </Body>
          </Toast>
        ))}
      </div>
    </div>,
    document.getElementById("message-root")
  );
};

export default Messages;
