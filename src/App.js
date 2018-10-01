import React, { Component } from "react";
import "./App.css";
import SearchBars from "./search_bars";
import BooleanDisplay from "./boolean_display";
import TitleInfo from "./header";

class App extends Component {
  state = {
    myBoolean: ""
  };

  render() {
    return (
      <div className="main-components">
        <TitleInfo />
        <SearchBars
          pullBoolean={value => this.setState({ myBoolean: value })}
        />
        <BooleanDisplay passBoolean={this.state.myBoolean} />
      </div>
    );
  }
}

export default App;
