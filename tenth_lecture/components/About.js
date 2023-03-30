import UserContext from "../utils/UserContext";

import Profile from "./Profile";

import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>About us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4>
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <Profile name={"Gautam Sharma"} />
      </>
    );
  }
}

export default About;
