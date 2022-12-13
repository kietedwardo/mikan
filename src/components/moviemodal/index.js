import React, { useState } from "react";
import "./styles/modal.css";
import { Button, TableRow } from "@mui/material";
import { Column } from "../footer/styles/footer";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer">
        <img src="/images/misc/son.jpg" alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h2>Hãy gọi cho Sơn</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h4>⭐⭐⭐⭐⭐</h4>
              <h4>99%</h4>
            </div>
            <h3>Diễn viên</h3>
            <p>
              Bob Odenkirk; Rhea Seehorn; Jonathan Banks; Patrick Fabian;
              Michael Mando.
            </p>
          </div>
          <div className="btnContainer">
            <Button variant="contained">Chi tiết</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
