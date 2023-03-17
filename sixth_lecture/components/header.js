import { useState } from "react";

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-container">
      <a href="index.html">
        <img
          className="logo"
          alt="logo"
          src="https://th.bing.com/th/id/OIP.p4Ve--D7nEaiaItSfMCPFQHaE8?pid=ImgDet&rs=1"
        />
      </a>

      <ul>
        <li>Restaurants</li>
        <li>Contact us</li>
        <li>About us</li>
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
