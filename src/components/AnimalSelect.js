import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class AnimalSelect extends Component {
  handleOnChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <FormGroup controlId="animalSelect">
        <ControlLabel>Animal:</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select animal"
          value={value}
          onChange={this.handleOnChange}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default AnimalSelect;
