import React from "react";
import ReactDOM from "react-dom/client";

/**
 * App Layout
 * 
 * Header:
 *  - Logo
 *  - Nav links
 *  - cart
 * 
 * Body:
 *  - Search bar
 *  - RestaurantList:
 *    - Card:
 *      - Image
 *      - name
 *      - cuisines
 */

const Header = () => {
  return (
    <div className="header-container">
      <a href="index.html">
        <img alt="logo" src="https://th.bing.com/th/id/OIP.p4Ve--D7nEaiaItSfMCPFQHaE8?pid=ImgDet&rs=1" />
      </a>
      <ul>
        <li>Restaurants</li>
        <li>Contact us</li>
        <li>About us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

// const Body = () => {
//   return (
//     >
//   );
// };

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
