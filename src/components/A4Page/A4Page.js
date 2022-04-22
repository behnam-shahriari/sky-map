import React, { Component } from "react";
import VS from "../VS/VS";
import "./A4page.css";

export default class A4Page extends Component {

  render() {
    return (
      <div className="container">
        <div className="wrapped">
          <VS />
        </div>
      </div>
    );
  }
}
