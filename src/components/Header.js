import logo from "../images/logo.png";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={logo}></img>
      </Link>
      <ul className="nav-items">
        <li>
          <button>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </button>
        </li>
        <li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
        <li>
          <button className="cart-btn">Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
