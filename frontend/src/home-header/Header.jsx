import "./Header.css";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-top">
      <img src={logo} alt="logo" className="logo" />
      <nav className="header-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="header-right">
        <Link to="/contact" className="become-customer">
          Become a Customer
        </Link>
      </div>
    </div>
  );
}

export default Header;
