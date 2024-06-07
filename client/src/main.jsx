import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import jiocinemaStore from "./app/store/jiocinemaStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={jiocinemaStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
