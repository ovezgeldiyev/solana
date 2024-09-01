import React from "react";
import { noteIcon } from "./SVG";

export default function Example({ setModal }) {
  return (
    <div className="example">
      <div className="exampleTable">
        <div className="exampleTable__item">
          <p className="sm">1</p>
          <div className="exampleTable__address">
            5T1iM5bmMmEnMV1v3Tpccnk9LDeiN4JHMUb2NqSeJ, 4.5
          </div>
        </div>
        <div className="exampleTable__item">
          <p className="sm">2</p>
          <div className="exampleTable__address">
            9AhbB3Y4C6FvRg8Sd1YtNfFpZcEwRrW3JpGkLmNtTg, 1.2
          </div>
        </div>
        <div className="exampleTable__item active">
          <p className="sm">3</p>
          <div className="exampleTable__address">
            2NqSeJ5T1iM5bmMmEnV1v3TpcPePcnk9LDeiN4JHMUb, 0.5
          </div>
        </div>
        <div className="exampleTable__item">
          <p className="sm">4</p>
          <div className="exampleTable__address">
            8Sd1YtNfFpDzZcEwRrWGkLmNtTg9AhbB3Y4C6FvRg, 1.3
          </div>
        </div>
        <div className="exampleTable__item">
          <p className="sm">5</p>
          <div className="exampleTable__address">
            3JpGkLmNtTg9AhbB3Y4C6FvRg8SdtNfFpDzZcEwRrW, 3
          </div>
        </div>
      </div>
      <div className="exampleNote">
        {noteIcon}
        <p className="sm">
          Please ensure you use accurate information, to avoid transactions
          error
        </p>
      </div>
    </div>
  );
}
