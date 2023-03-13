import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object =>HTML(DOM)
// using JSX
// JSX => createElement => Object =>HTML(DOM)

const heading = <h1 id="heading" key="heading1">Namaste React</h1> //Element
const Heading1 = () => {
  return (
    <h3>
      This is used to show how to import one component inside another.
    </h3>
  )
}

const Heading2 = () => {
  return (
    <div>
      <h1>
        This is the heading no. 1.
      </h1>
      <h2>
        This is heading no. 2.
      </h2>
      {heading /*importing as Element inside jsx*/} 
      {Heading1() /*importing as Function inside jsx*/}
      <Heading1 /*importing as a component*/ /> 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);

// Using React.js

// const heading = React.createElement(
  //   "h1",
  //   {
  //     id: "heading",
  //     key: "h1"
  //   },
  //   "Hello World!"
  // );
  
  // console.log(heading);
  
  // const heading2 = React.createElement(
  //   "h2",
  //   {
  //     id: "heading2",
  //     key: "h2"
  //   },
  //   "Hello World again!"
  // );
  
  // const container = React.createElement(
  //   "div",
  //   {
  //     id: "container"
  //   },
  //   [heading, heading2]
  // );