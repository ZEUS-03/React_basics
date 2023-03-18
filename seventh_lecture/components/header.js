import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images.png";

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" alt="logo" src={image} />
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>Cart</li>
      </ul>
      {isloggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogIn
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          LogOut
        </button>
      )}
    </div>
  );
};
export default Header;
