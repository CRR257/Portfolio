import React from "react";
import "./index.scss";

export default function Footer() {
  return (
    <div className="footer">
      <span className="footer-text">
        made with<i className="fas fa-heart"></i> and{" "}
        <i className="fas fa-coffee"></i>
      </span>
      <span className="footer-text">
        by CRR257<i className="fas fa-paw"></i>
      </span>
    </div>
  );
};
