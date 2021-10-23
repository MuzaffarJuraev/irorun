import "./topbar.css";
import icon from '../../assets/img/logoIcon.png'
const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="itemsContainer">
        <div className="iconContainer">
            <img src={icon} alt="" />
          <h3>irorun</h3>
        </div>
        <div className="menuContainer">
          <ul>
            <li>
              <a href="home.html" style={{color: '#0028f3'}}>Home</a>
            </li>
            <li>
              <a href="home.html">Contact</a>
            </li>
            <li>
              <a href="home.html">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
