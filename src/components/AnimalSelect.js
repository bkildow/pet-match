import React, { Component } from "react";

class AnimalSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="form-group">
        <label>
          Animal:
          <select className="form-control" value={value} onChange={onChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
      </div>
    );
  }
}

export default AnimalSelect;
