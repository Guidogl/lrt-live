import React, { Component } from "react";
import logo from "./logo.svg";
import "./lrt-live.css";
import "./bootstrap.min.css";

class LrtLive extends Component {
  state = {
    loading: true,
    show: null
  };

  async componentDidMount() {
    const url = "https://a81f7cb9.eu-gb.apiconnect.appdomain.cloud/show/data";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ show: data.entries[0], loading: false });
  }

  render() {
    return (
      <div className="rpw">
        <div className="jumbotron col-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 Vertical-center">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.loading || !this.state.show ? (
            <div className="Data">
              <p className="h5">Loading...</p>
            </div>
          ) : (
            <div className="Data">
              <p className="h5">{this.state.show.time}</p>
              <p className="h5">{this.state.show.name}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LrtLive;
