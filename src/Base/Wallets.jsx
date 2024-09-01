import React, { useState } from "react";
import { chevronBottom } from "./SVG";
const walletList = [
  {
    id: "1",
    title: "Phantom",
    icon: "/images/icons/phantom.svg",
  },
  {
    id: "2",
    title: "Metamask",
    icon: "/images/icons/metamask.svg",
  },
  {
    id: "3",
    title: "Solflare",
    icon: "/images/icons/solflare.svg",
  },
  {
    id: "4",
    title: "Torus",
    icon: "/images/icons/torus.svg",
  },
  {
    id: "5",
    title: "Phantom",
    icon: "/images/icons/phantom.svg",
  },
  {
    id: "6",
    title: "Solflare",
    icon: "/images/icons/solflare.svg",
  },
];
export default function Wallets({ setConnectWallet, setChangeWallet }) {
  const [valuesArr, setValuesArr] = useState([...walletList.slice(0, 4)]);
  const [loadMore, setLoadMore] = useState(false);
  return (
    <div className="wallets">
      <div className="wallets__row">
        {valuesArr.map((item, index) => {
          return (
            <WalletItem
              setConnectWallet={setConnectWallet}
              setChangeWallet={setChangeWallet}
              {...item}
              key={index}
            />
          );
        })}
      </div>

      {walletList?.length > 4 && (
        <div
          className={"wallets__more " + (loadMore ? "up" : "down")}
          onClick={() => {
            if (loadMore) {
              setLoadMore(false);
              setValuesArr(walletList.slice(0, 4));
            } else {
              setLoadMore(true);
              setValuesArr(walletList);
            }
          }}
        >
          {!loadMore ? <>Show more option</> : "Show less"}
          {chevronBottom}
        </div>
      )}
    </div>
  );
}
const WalletItem = (props) => {
  return (
    <div
      className="walletsItem"
      onClick={() => {
        props.setConnectWallet(false);
        props.setChangeWallet(true);
      }}
    >
      <div className="walletsItem__icon">
        <img src={process.env.PUBLIC_URL + props.icon} alt="image" />
      </div>
      <h6>{props.title}</h6>
    </div>
  );
};
