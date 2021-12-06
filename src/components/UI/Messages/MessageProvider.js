import React, { useState, useCallback, useContext } from "react";

import Messages from "./Messages";

const MessageContext = React.createContext(null);

let id = 1;

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback(
    (header, content, variant = null) => {
      setMessages((messages) => [...messages, { id: id++, header, content, variant}]);
    },
    [setMessages]
  );

  const removeMessage = useCallback(
    (id) => {
      setMessages((messages) => messages.filter((m) => m.id !== id));
    },
    [setMessages]
  );

  return (
    <MessageContext.Provider value={{ addMessage, removeMessage }}>
      <Messages messages={messages} />
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const messageHelpers = useContext(MessageContext);

  return messageHelpers;
};

export default MessageProvider;
