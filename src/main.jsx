import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router.jsx";
import { UserProvider } from './Context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>
);