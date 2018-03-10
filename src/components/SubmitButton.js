import React, { Component } from "react";
import { Button } from "react-bootstrap";

class SubmitButton extends Component {
  handleOnClick = e => {
    e.preventDefault();
    this.props.handleSubmitButtonClick();
  };

  render() {
    return (
      <Button type="submit" onClick={this.handleOnClick}>
        Match me!
      </Button>
    );
  }
}

export default SubmitButton;
