import React from "react";
const aboutList = [
  {
    id: "01",
    title: "Connect Your Solana Wallet",
    desc: "Begin by securely connecting your Solana wallet to the MultiSender platform, ensuring a seamless transaction experience.",
  },
  {
    id: "02",
    title: "Select Token Type",
    desc: "Choose the type of token you wish to send from your Solana wallet, ensuring accurate and efficient distribution.",
  },
  {
    id: "03",
    title: "Input Recipient Wallet Address",
    desc: "Enter the wallet addresses of your recipients, along with the token amounts you intend to send, separated by a “comma”",
  },
  {
    id: "04",
    title: "Verify and Confirm Transaction",
    desc: "Review the transaction details carefully, with recipient addresses and token amounts. Once verified, confirm the transaction.",
  },
];
export default function About() {
  return (
    <>
      <div className="anchor" id="aboutSec"></div>
      <div className="about">
        <div className="auto__container">
          <h2>Learn about how it works</h2>
          <div className="about__inner">
            <div className="about__inner-row">
              {aboutList.map((item, index) => {
                return <AboutItem key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const AboutItem = (props) => {
  return (
    <div className="aboutItem">
      <div className="aboutItem__inner">
        <div className="aboutItem__num">
          {" "}
          <h3>{props.id}</h3>
        </div>
        <h5 className="sm">{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
