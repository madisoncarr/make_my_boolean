import React, { Component } from "react";
import "./styles/boolean_display.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class BooleanDisplay extends Component {
  state = {}

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.passBoolean !== prevProps.passBoolean) {
      this.setState({ copied: false });
    }
  }

  render() {
    return (
      <div className="full-boolean-display">
        <div className="boolean-instructions">
          <p>Here is your Boolean Search:</p>
        </div>
        <div className="panel panel-info" type="panel" id="panel-info">
          <p>{this.props.passBoolean}</p>
        </div>
        <CopyToClipboard text={this.props.passBoolean} onCopy={() => this.setState({ copied: true })}>
          <button className="btn btn-info">{!this.state.copied ? "Copy!" : "Copied!"}</button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default BooleanDisplay;