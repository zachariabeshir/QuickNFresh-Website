import React from "react";
import "./pageStyles/Modal.css";

const Modal = ({ message, closeModal }) => {
  console.log("Modal received message:", message); // Debugging log

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message || "No message received"}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
