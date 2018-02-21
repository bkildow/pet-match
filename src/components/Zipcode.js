import React, { Component } from "react";

class Zipcode extends Component {
  render() {
    return (
      <div>
        <label for="zip">Zip: </label>
        <input name="zip" />
      </div>
    );
  }
}

export default Zipcode;
