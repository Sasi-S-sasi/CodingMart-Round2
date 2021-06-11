import React, { Component } from "react";
import { render } from "react-dom";

export default class Form extends Component {
  // aadharData;
  // constructor(props) {
  //   super(props);

  //   this.onChangen1 = this.onChangen1.bind(this);
  //   this.onChangen2 = this.onChangen2.bind(this);
  //   this.onChangen3 = this.onChangen3.bind(this);
  //   this.onChangen4 = this.onChangen4.bind(this);
  //   this.onChangen5 = this.onChangen5.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     n1: "",
  //     n2: "",
  //     n3: "",
  //     n4: "",
  //     n5: ""
  //   };
  // }

  // onChangen1(e) {
  //   this.setState[{ n1: e.target.value }];
  // }
  // onChangen2(e) {
  //   this.setState[{ n2: e.target.value }];
  // }
  // onChangen3(e) {
  //   this.setState[{ n3: e.target.value }];
  // }
  // onChangen4(e) {
  //   this.setState[{ n4: e.target.value }];
  // }
  // onChangen5(e) {
  //   this.setState[{ n5: e.target.value }];
  // }
  // onSubmit(e) {
  //   e.preventDefault();
  // }

  // componentDidMount() {
  //   this.aadharData = JSON.parse(localStorage.getItem('data'));
  //   if(localStorage.getItem('data')){
  //     this.setState({
  //       n1 : this.aadharData.n1,
  //       n2 : this.aadharData.n2,
  //       n3 : this.aadharData.n3,
  //       n4 : this.aadharData.n4,
  //       n5 : this.aadharData.n5,
  //     })
  //   }else{
  //     this.setState({
  //       n1:'',
  //       n2:'',
  //       n3:'',
  //       n4:'',
  //       n5:'',
  //     })
  //   }
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("data", JSON.stringyfy(nextState));
  // }

  render() {
    return (
      <div>
        <h3>Aadhar Number</h3>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <table>
              <tr>
                <td>
                  <label>Aadhar No. 1</label>
                </td>
                <td>
                  <input
                    type="number"
                    // value={this.state.n1}
                    // onChange={this.onChangen1}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Aadhar No. 2</label>
                </td>
                <td>
                  <input
                    type="number"
                    // value={this.state.n2}
                    // onChange={this.onChangen2}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Aadhar No. 3</label>
                </td>
                <td>
                  <input
                    type="number"
                    // value={this.state.n3}
                    // onChange={this.onChangen3}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Aadhar No. 4</label>
                </td>
                <td>
                  <input
                    type="number"
                    // value={this.state.n4}
                    // onChange={this.onChangen4}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Aadhar No. 5</label>
                </td>
                <td>
                  <input
                    type="number"
                    // value={this.state.n5}
                    // onChange={this.onChangen5}
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button type="submit">SAVE</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
