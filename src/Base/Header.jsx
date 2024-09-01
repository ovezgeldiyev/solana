import React, { useEffect, useState } from "react";
import { walletIcon } from "./SVG";
import { useLocation } from "react-router-dom";
export default function Header({
  setConnectWallet,
  changeWallet,
  removeSubHeader,
}) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <>
      <header className="header">
        <div className="auto__container">
          <div className="header__inner">
            <div className="header__inner-logo">
              <img src="/images/logo.svg" alt="" />
            </div>
            <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
              <ul className="nav__inner">
                <li>
                  <a
                    href="#aboutSec"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#faqSec"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  >
                    FAQs
                  </a>
                </li>
                {changeWallet ? (
                  <button
                    type="button"
                    className="button"
                    onClick={() => setConnectWallet(true)}
                  >
                    {walletIcon}
                    4nPsj1D...34dk
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button"
                    onClick={() => setConnectWallet(true)}
                  >
                    {walletIcon}
                    Connect Wallet
                  </button>
                )}
              </ul>
            </nav>
            <div
              className={"burger " + (menu ? "active" : "")}
              id="menuBtn"
              onClick={() => {
                setMenu(!menu);
              }}
            ></div>
          </div>
        </div>
      </header>
      {!removeSubHeader && (
        <div className="subHeader">
          <div className="auto__container">
            <div className="subHeader__inner">
              <p className="sm">
                Please ensure accuracy in recipient addresses while doing a
                transaction
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
