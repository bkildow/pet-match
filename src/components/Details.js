import React, { Component } from "react";

class Details extends Component {
  render() {
    const { nickname, photo, description } = this.props;
    return (
      <div>
        <h2>{nickname}</h2>
        {photo && <img src={photo} alt={nickname} />}
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Details;
