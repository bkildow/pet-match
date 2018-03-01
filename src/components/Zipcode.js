import React, { Component } from "react";

class Zipcode extends Component {
  handleZipChange = e => {
    this.props.handleZipChange(e.target.value);
  };

  render() {
    return (
      <label>
        Zip:
        <input
          name="zip"
          onChange={this.handleZipChange}
          value={this.props.zip}
        />
      </label>
    );
  }
}

export default Zipcode;
