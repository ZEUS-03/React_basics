import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-wrap justify-between p-2 bg-orange-200 shadow-md">
      <Link to="/">
        <img className="w-28 py-1" alt="logo" src={image} />
      </Link>

      <ul className="flex flex-wrap">
        <li className="px-2 py-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 py-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-2 py-4">
          <Link to="/about">About us</Link>
        </li>
        <li className="px-2 py-4">Cart</li>
        <li className="px-2 py-4">
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>

      <h2>{user.name}</h2>

      <h3 className="py-4 ">Online status: {isOnline ? "🟢" : "🔴"}</h3>
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
