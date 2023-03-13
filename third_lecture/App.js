import React from "react";
import ReactDOM from "react-dom/client";


// Using React.js
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    key: "yes"
  },
  "Hello World!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    key: "world"
  },
  "Hello World again!"
);

const container = React.createElement(
  "div",
  {
    id: "container"
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// Using Vanilla JS
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World!";
// const root = document.getElementById("root");
// root.appendChild(heading);