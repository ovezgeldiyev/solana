import React from "react";
import { checkIcon } from "./SVG";
import { Link } from "react-router-dom";

export default function Congruts() {
  return (
    <div className="congruts">
      <div className="congruts__top">
        <div className="congruts__icon">{checkIcon}</div>
        <div className="congruts__title">
          <h5>Transaction Completed</h5>
          <p>
            You sent <span>52.5119002 SOL</span>
          </p>
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
      </div>
      <div className="congruts__foot">
        <Link to="/" className="button">
          Continue
        </Link>
        <a href="" className="button gray">
          View on Explorer
        </a>
      </div>
    </div>
  );
}
