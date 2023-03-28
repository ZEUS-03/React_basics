import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
        location: "DummyLocation",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/ZEUS-03");
    const json = await res.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    /**Used to set up dependency for componentDidMount(with every change in state of a defined variable, it'll recall componentDidMount) */
  }
  render() {
    // const { count, count2 } = this.state;
    return (
      <div>
        {/* <h1>My name is {this.props.name}</h1> */}
        <h1>My name is {this.state.userInfo.name}</h1>
        {/* {/* <h2>The current count is: {count}</h2> */}
        <img src={this.state.userInfo.avatar_url} />
        <h2>Place where i live: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
