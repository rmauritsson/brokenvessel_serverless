import { Link } from "react-router-dom";
import logo from "../logo.png";
import favicon from "../favicon.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div class="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div class="navbar">
        <div class="icon-bar" onclick="Show()">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <ul id="nav-lists">
          <li class="close">
            <span onclick="Hide()">×</span>
          </li>
          <li class="close">
            <span onclick="Hide()">×</span>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/counsellor">Talk to a Counsellor</Link>
          </li>
          <li>
            <Link to="/assignment">Talk to a Volunteer</Link>
          </li>
          <li>
            <Link to="/listener">Listener Portal</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
