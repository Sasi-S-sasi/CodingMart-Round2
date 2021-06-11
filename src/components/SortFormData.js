import React, { Component } from "react";
import { render } from "react-dom";

export default class SortFormData extends Component {
  render() {
    return (
      <div>
        <h3>Sort Arrange</h3>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <select>
              <option>Sort by Ascending</option>
              <option>Sort by Descending</option>
            </select>
            <br />
            <br />
            <input type="number" />
            <br />
            <br />

            <input type="number" />
            <br />
            <br />

            <input type="number" />
            <br />
            <br />

            <input type="number" />
            <br />
            <br />

            <input type="number" />
          </form>
        </div>
      </div>
    );
  }
}
