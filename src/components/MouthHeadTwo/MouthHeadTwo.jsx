import "./mouthheadtwo.css";
import secondImg from "../../assets/img/save.svg";

const MouthHeadTwo = () => {
  return (
    <div className="mouthHeadTwoContainer">
      <div className="mouthHeadContentContainer">
        <div>
          <img src={secondImg} alt="" />
        </div>
        <div>
          <h1>Save on your own</h1>
          <h1>terms</h1>
          <p>
            Savings give you financial <br /> options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MouthHeadTwo;
