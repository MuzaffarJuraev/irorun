import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h1>How it works</h1>
      <div className="cardContainer">
        <div className="card firtsCard">
          <i className="fas fa-file-invoice firstIcon"></i>
          <p style={{ margin: "30px 0 20px 0" }}>Set up an account</p>
          <p>Download the app for free, sign up adn verify your account</p>
        </div>
        <span>
          <i className="fas fa-arrow-circle-right btn"></i>
        </span>
        <div className="card secondCard">
          <i className="fab fa-intercom secondIcon"></i>
          <p style={{ margin: "30px 0 20px 0" }}>Apply for a loan</p>
          <p>
            Apply for a loan and our <br /> technolagy will run a credit score
            <br /> and decide if you are qualified.
          </p>
        </div>
        <span>
          <i className="fas fa-arrow-circle-right btn"></i>
        </span>
        <div className="card thirdCard">
          <i className="far fa-money-bill-alt thirdIcon"></i>
          <p style={{ margin: "30px 0 20px 0" }}>Get your cash</p>
          <p>If you qualify, your loan will be disbursed your wallet.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
