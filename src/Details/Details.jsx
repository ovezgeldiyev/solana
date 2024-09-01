import React, { useRef, useState } from "react";
import CountUp, { startAnimation } from "react-countup";
import { motion } from "framer-motion";
import Congruts from "../Base/Congruts";

export default function Details() {
  const [congruts, setCongruts] = useState(false);
  const [process, setProcess] = useState(false);
  const [endNumber, setEndNumber] = useState(0);

  return (
    <div className="detail">
      <div className="auto__container">
        {congruts ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <Congruts />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="detail__inner"
          >
            <h5>Transaction Details</h5>
            <div className="detailAmount">
              <div className="detailAmount__inner">
                <h4>51.43323 SOL</h4>
                <p className="sm">Token amount</p>
              </div>
            </div>
            <div className="detailItem">
              <div className="detailItem__row">
                <p className="sm">Total number of addresses</p>
                <h6>23</h6>
              </div>
            </div>
            <div className="detailItem">
              <div className="detailItem__col">
                <p className="sm">From</p>
                <h6>BznUoivZ1kdJBHh2W5pX68h4rVEXw23EvRtWpJfCFaaw</h6>
              </div>
            </div>
            <div className="detailItem">
              <div className="detailItem__col">
                <p className="sm">To</p>
                <div className="detailItem__col-info">
                  <h6>
                    4nRjd5mJmWak4QkW2J96vZGjmy28skgKuNdb8WTS6hYt,
                    9yTwRbA3YZ6upC8yL6U9VrA7mDWdCnmwP3oq7FbRPb7d
                  </h6>
                  <button type="button">+21 more</button>
                </div>
              </div>
            </div>
            <div className="detailItem">
              <div className="detailItem__row">
                <p className="sm">Fee</p>
                <h6>0.0013 SOL</h6>
              </div>
            </div>
            <div className="detailItem last">
              <div className="detailItem__row">
                <p className="sm">Total to be sent</p>
                <h6>52.5119002 SOL</h6>
              </div>
            </div>
            <div className="detailItem balance">
              <div className="detailItem__row">
                <p className="sm">Your SOL balance:</p>
                <h6>231.1309 SOL</h6>
              </div>
            </div>
            <button
              type="button"
              className={"button " + (process ? "gray" : "")}
              onClick={() => {
                setProcess(true);
                setEndNumber(23);
                setTimeout(() => {
                  setCongruts(true);
                }, 3000);
              }}
            >
              {process ? (
                <>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className={"buttonProgress " + (process ? "active" : "")}
                    style={{ transition: `${3}s` }}
                  ></motion.span>
                  Completed transfer:{" "}
                  <CountUp start={0} end={endNumber} duration={3} />/{endNumber}
                </>
              ) : (
                "Confirm and Send"
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
