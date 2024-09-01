import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Home from "./Home/Home";
import Footer from "./Base/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Base/Modal";
import Wallets from "./Base/Wallets";
import Details from "./Details/Details";
export default function App() {
  const [removeFooter, setRemoveFooter] = useState(false);
  const [removeSubHeader, setRemoveSubHeader] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const [changeWallet, setChangeWallet] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (pathname.includes("/details")) {
      setRemoveFooter(true);
      setRemoveSubHeader(true);
    } else {
      setRemoveFooter(false);
      setRemoveSubHeader(false);
    }
  }, [pathname]);
  return (
    <>
      <Header
        changeWallet={changeWallet}
        setConnectWallet={setConnectWallet}
        removeSubHeader={removeSubHeader}
      />
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        {!removeFooter && <Footer />}
      </main>
      <AnimatePresence>
        {connectWallet && (
          <Modal
            setModal={setConnectWallet}
            title={"Connect your Solana Wallet"}
          >
            <Wallets
              setChangeWallet={setChangeWallet}
              setConnectWallet={setConnectWallet}
            />{" "}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
