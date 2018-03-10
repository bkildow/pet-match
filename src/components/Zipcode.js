import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class Zipcode extends Component {
  handleZipChange = e => {
    this.props.handleZipChange(e.target.value);
  };

  render() {
    return (
      <FormGroup controlId="zip">
        <ControlLabel>Zip:</ControlLabel>
        <FormControl
          type="text"
          onChange={this.handleZipChange}
          value={this.props.zip}
        />
      </FormGroup>
    );
  }
}

export default Zipcode;
