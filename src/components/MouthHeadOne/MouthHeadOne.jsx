import { useState } from "react";
import "./mouthheadone.css";
import Contact from "../Contact/Contact";
import firstImg from "../../assets/img/get.svg";

const MouthHeadOne = () => {
  const [button, setButton] = useState(false);
  return (
    <div className="mouthHeadOneContainer">
      <button onClick={() => setButton(!button)} className="btn">
        Contact Us
      </button>
      {button ? <Contact /> : <></>}
      <div className="mouthHeadOneContentContainer">
        <div>
          <div style={{ display: "block" }}>
            <h1>Get Instant</h1>
            <h1> Loans</h1>
            <p>
              Get instant loans with ease on your <br /> smatphone.
            </p>
          </div>
        </div>
        <div>
          <img src={firstImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MouthHeadOne;
