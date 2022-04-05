import React from "react";
import ReactDOM from "react-dom/client";
import "./views/index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(app);

reportWebVitals();
