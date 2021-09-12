import React, { Component } from "react";
import "./Card.css"

export class Card extends Component {

    constructor(props){
        super(props);
        this.state={
            isShow:0
        }
    }
  change(n) {
      console.log(this)
    this.setState({
        isShow:n
    })
  }
  render() {
    return (
      <div className="card_container">
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={() => this.change(0)}
          className={this.state.isShow === 0 ? "imgBox active" : "imgBox"}
        >
          <h3>海阔天蓝,人间仙境</h3>
        </div>

        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={() => this.change(1)}
          className={this.state.isShow === 1 ? "imgBox active" : "imgBox"}
        >
          <h3>秋末,我最喜爱的季节</h3>
        </div>

        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
          }}
          onClick={() => this.change(2)}
          className={this.state.isShow === 2 ? "imgBox active" : "imgBox"}
        >
          <h3>太阳和沙滩,我们都要</h3>
        </div>

        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
          }}
          onClick={() => this.change(3)}
          className={this.state.isShow === 3 ? "imgBox active" : "imgBox"}
        >
          <h3>城市的夜晚,灯火阑珊</h3>
        </div>

        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={() => this.change(4)}
          className={this.state.isShow === 4 ? "imgBox active" : "imgBox"}
        >
          <h3>云外有山,山外有人</h3>
        </div>
      </div>
    );
  }
}

export default Card;
