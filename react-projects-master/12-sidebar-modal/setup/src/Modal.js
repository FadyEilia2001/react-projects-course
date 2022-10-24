import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModal, toggleModal } = useGlobalContext();
  console.log(isModal);
  return (
    <div className={`modal-overlay ${isModal && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
