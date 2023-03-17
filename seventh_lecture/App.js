import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

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
 *
 *  Footer:
 */
