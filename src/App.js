import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBars from "./search_bars";
import BooleanDisplay from "./boolean_display";

class App extends Component {
  state = {
    myBoolean: ""
  };

  render() {
    return (
      <div>
        <SearchBars
          pullBoolean={value => this.setState({ myBoolean: value })}
        />
        <BooleanDisplay passBoolean={this.state.myBoolean} />
      </div>
    );
  }
}

export default App;
