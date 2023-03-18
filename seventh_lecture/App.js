import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import RoutingError from "./components/RoutingError";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RoutingError />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouting} />);

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
