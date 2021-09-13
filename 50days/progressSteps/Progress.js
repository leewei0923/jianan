import React, { Component } from "react";
import "./Progress.css";

export class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: [],
      isDise: true,
    };
  }

  pre() {
    let isActive = this.state.isActive;
    isActive.pop();
    this.setState({
      isActive: isActive,
    });
  }
  next() {
    let isActive = this.state.isActive;
    isActive.push(1);
    this.setState({
      isActive: isActive,
    });
  }
  render() {
      let wid = {width:this.state.isActive.length * 33+"%"}
    return (
      <div className="progress_container">
        <div className="circleBox">
          <div className="progressBar" style={wid}></div>
          <div
            className={
              this.state.isActive.length >= 0 ? "circle active" : "circle"
            }
          >
            1
          </div>
          <div
            className={
              this.state.isActive.length >= 1 ? "circle active" : "circle"
            }
          >
            2
          </div>
          <div
            className={
              this.state.isActive.length >= 2 ? "circle active" : "circle"
            }
          >
            3
          </div>
          <div
            className={
              this.state.isActive.length >= 3 ? "circle active" : "circle"
            }
          >
            4
          </div>
        </div>

        <div className="btnBoxs">
          <button
            className="pre"
            disabled={this.state.isActive.length === 0 ? true : false}
            onClick={() => this.pre()}
          >
            上一页
          </button>
          <button
            className="next"
            disabled={this.state.isActive.length === 3 ? true : false}
            onClick={() => this.next()}
          >
            下一页
          </button>
        </div>
      </div>
    );
  }
}

export default Progress;
