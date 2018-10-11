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
        <div className="search-components">
          <SearchBars
            pullBoolean={value => this.setState({ myBoolean: value })}
          />
        </div>
        <BooleanDisplay passBoolean={this.state.myBoolean} />
      </div>
    );
  }
}

export default App;
