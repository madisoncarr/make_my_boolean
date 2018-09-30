import React, { Component } from "react";

class SearchBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: "",
      keywords: "",
      mgmtValue: false
    };
  }

  booleanMaker = () => {
    let booleanTitles = this.state.titles.replace(/, /g, '" OR "');
    let booleanKeywords = this.state.keywords.replace(/, /g, '" OR "');
    if (this.state.mgmtValue === false) {
      this.props.pullBoolean(
        `("${booleanTitles}") AND ("${booleanKeywords}") NOT (manager OR supervisor OR vp OR director OR senior)`
      );
    } else {
      this.props.pullBoolean(`("${booleanTitles}") AND ("${booleanKeywords}")`);
    }
  };

  onInputChange = event => {
    this.setState({ titles: event.target.value });
  };

  onInputKeywordChange = event => {
    this.setState({ keywords: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="titles-search-bar">
          <p>
            Please enter the titles you would like to search for separated by
            commas:
          </p>
          <input
            value={this.state.titles}
            onChange={event => this.onInputChange(event)}
          />
        </div>
        <div className="keywords-search-bar">
          <p>
            Please enter any keywords you would like to add to the search
            separated by commas:
          </p>
          <input
            value={this.state.keywords}
            onChange={event => this.onInputKeywordChange(event)}
          />
        </div>
        <div className="management-prompt">
          <p>
            Are you searching for someone with management or supervisory
            experience?
          </p>
          <div>
            <label>
              <input
                value="yes"
                type="radio"
                checked={this.state.mgmtValue === true}
                onChange={() => this.setState({ mgmtValue: true })}
              />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input
                value="no"
                type="radio"
                checked={this.state.mgmtValue === false}
                onChange={() => this.setState({ mgmtValue: false })}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.booleanMaker}
          >
            Make My Boolean!
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBars;
