import React from "react";
import { medium, telegram, twitter } from "./SVG";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-side">
              <a href="#" className="footer__inner-logo">
                <img src="/images/logo.svg" alt="" />
              </a>
              <div className="footer__inner-social">
                <a href="#">{medium}</a>
                <a href="#">{telegram}</a>
                <a href="#">{twitter}</a>
              </div>
            </div>
            <div className="footer__inner-links">
              <a href="#">Privacy Notice</a>
              <a href="#">Terms of Service</a>
              <a href="#">Compliance Policy</a>
            </div>
            <p className="sm">Version: b821b45</p>
          </div>
          <div className="footer__inner-copy">
            <p className="sm">@ 2024 MultiSend.app , All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
