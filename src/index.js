import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "react-datepicker/dist/react-datepicker.css";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import MessageProvider from "./components/UI/Messages/MessageProvider";

ReactDOM.render(
  <BrowserRouter>
    <MessageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MessageProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
