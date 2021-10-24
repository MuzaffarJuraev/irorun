import "./footer.css";
import logo from "../../assets/img/logoIcon.png";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div>
          <img src={logo} alt="" />
          <h1>irorun</h1>
        </div>
        <div>
          <p>
            Office <br />4 Perez Drive, Lekki <br /> Phase 1, Lagos.
          </p>
        </div>
        <div>
          <p>
            Contact <br />
            hello@gmail.com <br /> +223 515 525 6345
          </p>
        </div>
        <div>
          <p>
            Powered by YesCredit Limited <br />
            Licensed as a Money Lender by <br />
            the Lagos state Government of <br /> Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
