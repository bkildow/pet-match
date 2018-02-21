import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.nickname}</h2>
        {this.props.photo && (
          <img src={this.props.photo} alt={this.props.nickname} />
        )}
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Details;
