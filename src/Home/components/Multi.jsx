import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../Base/Modal";
import Example from "../../Base/Example";
import { chevronBottom, questionIcon, uploadIcon } from "../../Base/SVG";
import { Link } from "react-router-dom";

export default function Multi() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("spl");
  return (
    <>
      <section className="multi">
        <div className="auto__container">
          <div className="multi__inner">
            <div className="multi__inner-title">
              <h1>Solana Multisend App</h1>
              <p className="big">
                Send Solana Tokens to Multiple Addresses in One Go!
              </p>
            </div>
            <div className="multiForm">
              <div className="multiForm__inner">
                <div className="multiForm__head">
                  <div className="multiForm__title">
                    <h5>Solana Multisender</h5>
                    <p className="sm">Send multiple tokens with ease</p>
                  </div>
                  <div className="multiForm__tab">
                    <button
                      type="button"
                      className={" " + (type === "sol" ? "active" : "")}
                      onClick={() => setType("sol")}
                    >
                      SOL
                    </button>
                    <button
                      type="button"
                      className={" " + (type === "spl" ? "active" : "")}
                      onClick={() => setType("spl")}
                    >
                      SPL
                    </button>
                  </div>
                </div>
                <AnimatePresence>
                  {type === "spl" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      exit={{ opacity: 0 }}
                      className="multiForm__token"
                    >
                      <h6>Token address</h6>
                      <div className="input">
                        <input
                          type="text"
                          placeholder="Enter your token address"
                        />
                        <div className="select">
                          <div className="select__icon">
                            <img src="/images/icons/solana.svg" alt="" />
                          </div>
                          <p className="sm">SOL</p>
                          {chevronBottom}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="multiForm__main">
                  <div className="multiForm__info">
                    <div className="multiForm__info-row">
                      <h6>Addresses with amounts</h6>
                      <button type="button" onClick={() => setModal(true)}>
                        {questionIcon}
                        <span>Show example</span>
                      </button>
                    </div>
                    <button type="button" className="multiForm__upload">
                      {uploadIcon}
                      Upload CVS
                    </button>
                  </div>
                  <div className="multiForm__address">
                    <div className="multiForm__address-inner">
                      <textarea placeholder="Insert address separated with comma"></textarea>
                    </div>
                  </div>
                </div>
                <div className="multiForm__foot">
                  <Link to="/details" className="button">
                    Proceed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {modal && (
          <Modal
            setModal={setModal}
            title={"Example"}
            text={
              "This shows a format of how you are to arrange your token address and amount"
            }
          >
            <Example setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
