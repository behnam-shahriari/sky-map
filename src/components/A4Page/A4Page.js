import React, { Component } from "react";
import VS from "../VS/VS";
import "./A4page.css";

class A4Page extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      const {dedication, location, date, color} = this.props;
    return (
      <div className="containerA4">
        <div className="wrapped">
          <VS color={color} />
          <label style={{ fontWeight: 'bold' }}>{dedication}</label>
          <div style={{ height: '5vh' }}></div>
          <label>{location}</label>
          <br />
          <label>Lang Long</label>
          <br />
          <label>{date}</label>
          <div style={{ height: '8vh' }}></div>
        </div>
      </div>
    );
  }
}

export default A4Page;