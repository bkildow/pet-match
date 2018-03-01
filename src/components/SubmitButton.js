import React, { Component } from "react";

class SubmitButton extends Component {
  handleOnClick = e => {
    e.preventDefault();
    this.props.handleSubmitButtonClick();
  };

  render() {
    return (
      <input type="submit" value={"Match me!"} onClick={this.handleOnClick} />
    );
  }
}

export default SubmitButton;
