import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { closeIcon } from "./SVG";

export default function Modal({ children, modal, setModal, title, text }) {
  const closeFunc = (e) => {
    if (e.currentTarget === e.target) setModal(null);
  };
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [modal]);
  return ReactDom.createPortal(
    <motion.div
      className="modal"
      onClick={closeFunc}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal__inner">
        <div className="modal__head">
          <div className="modal__head-text">
            <h5 className="sm">{title}</h5>
            {text && <p className="sm">{text}</p>}
          </div>
          <div className="modal__close" onClick={closeFunc}>
            {closeIcon}
          </div>
        </div>
        {children}
      </div>
    </motion.div>,
    document.getElementById("popups")
  );
}
