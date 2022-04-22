import React, { Component } from "react";
import "./LivefeedList.css";
// for proposed issue and pending donation request
class LivefeedList extends React.Component {
  state = {
    livefeeds: [],
  };

  componentDidMount() {
    fetch("this.props.address")
      .then((response) => response.json())
      .then((livefeedList) => {
        this.setState({ books: livefeedList });
      });
  }

  render() {
    return (
      <ul className="livefeed-container">
        {this.state.livefeeds.map((livefeed) => (
          <li key={livefeed.id}>{livefeed.name}</li>
        ))}
      </ul>
    );
  }
}
