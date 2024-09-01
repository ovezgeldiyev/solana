import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chevronBottom } from "../../Base/SVG";
const faqList = [
  {
    id: "1",
    title: "Is MultiSender secure?",
    desc: "Yes, MultiSender prioritizes security and employs advanced encryption techniques to safeguard your transactions and personal information. We also recommend following best practices for wallet security, such as safeguarding your private keys and using trusted wallet management practices.",
  },
  {
    id: "2",
    title: "Can I send any type of token using MultiSender?",
    desc: "Yes, MultiSender prioritizes security and employs advanced encryption techniques to safeguard your transactions and personal information. We also recommend following best practices for wallet security, such as safeguarding your private keys and using trusted wallet management practices.",
  },
  {
    id: "3",
    title: "How long does it take for transactions to be processed?",
    desc: "Yes, MultiSender prioritizes security and employs advanced encryption techniques to safeguard your transactions and personal information. We also recommend following best practices for wallet security, such as safeguarding your private keys and using trusted wallet management practices.",
  },
  {
    id: "4",
    title: "Are there any fees associated with using MultiSender?",
    desc: "Yes, MultiSender prioritizes security and employs advanced encryption techniques to safeguard your transactions and personal information. We also recommend following best practices for wallet security, such as safeguarding your private keys and using trusted wallet management practices.",
  },
  {
    id: "5",
    title: "Can I track the status of my transactions?",
    desc: "Yes, MultiSender prioritizes security and employs advanced encryption techniques to safeguard your transactions and personal information. We also recommend following best practices for wallet security, such as safeguarding your private keys and using trusted wallet management practices.",
  },
];
export default function Faq() {
  const [faq, setFaq] = useState(null);
  return (
    <>
    <div className="anchor" id="faqSec"></div>
      <div className="faq">
        <div className="auto__container">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div className="faq__inner">
            {faqList.map((item, index) => {
              return (
                <FaqItem {...item} key={index} faq={faq} setFaq={setFaq} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
const FaqItem = (props) => {
  return (
    <div className="faqItem">
      <div
        onClick={() => {
          if (props.faq !== props.id) {
            props.setFaq(props.id);
          } else {
            props.setFaq(null);
          }
        }}
        className={
          "sm faqItem__head " + (props.faq === props.id ? "active" : "")
        }
      >
        {" "}
        <h5 className="sm">{props.title}</h5>
        {chevronBottom}
      </div>

      <div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, height: 0 }}
        className={"faqItem__body " + (props.faq === props.id ? "active" : "")}
      >
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
