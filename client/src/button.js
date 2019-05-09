import React, { Component } from "react";
import "./lrt-live.css";
import "./bootstrap.min.css";
import LrtLive from "./lrt-live";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", on: false };
  }
  callAPI() {
    fetch("http://localhost:9000/api")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {
    this.callAPI();
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div className="col-md-12 text-center">
        {this.state.on && <LrtLive />}
        <button
          type="button"
          className="btn btn-info Btn-style"
          onClick={this.toggle}
        >
          Show what's on TV
        </button>
      </div>
    );
  }
}

export default Button;
