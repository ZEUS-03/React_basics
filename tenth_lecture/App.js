import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RoutingError from "./components/RoutingError";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";
// import Instamart from "./components/instamart";

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart")); //Dynamic import, Lazy loading
const App = () => {
  // const [user, setUser] = useState({
  //   user: "dummyname",
  //   email: "dummyemail@gmail.com",
  // });
  return (
    <>
      {/* <userContext.Provider value={{ user: user, setUser: setUser }}> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </userContext.Provider> */}
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "dummy name",
              email: "dummy@email.com",
            }}
          />
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
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
