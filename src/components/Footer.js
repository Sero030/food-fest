import { Link } from "react-router";

const Footer = () => (
  <div className="footer">
    <ul className="footer-items">
      <li>Instagram</li>
      <li>Twitter</li>
      <li>Youtube</li>
      <li>LinkedIn</li>
    </ul>
    <button>
      <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
        Want to report something?
      </Link>
    </button>
  </div>
);

export default Footer;
