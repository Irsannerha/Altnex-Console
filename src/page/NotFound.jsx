// NotFound.js
import React from "react";
import "../index.css"
import error404 from "../assets/img/404.png";

function NotFound() {
    return (
      <div className="error-container">
        <img src={error404} className="error" alt="404 Error" />
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
}

export default NotFound;
