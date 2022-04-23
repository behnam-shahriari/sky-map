import React, { Component } from "react";
import VS from "../VS/VS";
import "./A4page.css";

class A4Page extends Component {
  constructor(props) {
    super(props);
  }

  getTodayDate() {
    const da = new Date();
    let longMonth = da.toLocaleString("en-us", { month: "long" });
    let tD = da.getDate();
    let tM = da.getMonth();
    let tY = da.getFullYear();
    this.setState({ date: longMonth + " " + tD + ", " + tY });
    return longMonth + " " + tD + ", " + tY;
  }

  monthToLong(mon) {
    return Intl.DateTimeFormat("en", { month: "long" }).format(new Date("2"));
  }

  render() {
    const { dedication, location, day, month, year, color, lat, lon } =
      this.props;
    return (
      <div className="containerA4">
        <div className="wrapped">
          <VS color={color} lat={lat} lon={lon}/>
          <label style={{ fontWeight: "bold" }}>{dedication}</label>
          <div style={{ height: "10vh" }}></div>
          <label style={{ fontWeight: "normal" }}>{location}</label>
          <br />
          <label style={{ fontWeight: "normal" }}>{`${lat} ${lon}`}</label>
          <br />
          <label style={{ fontWeight: "normal" }}>{`${this.monthToLong(
            month
          )} ${day}, ${year}`}</label>
          <div style={{ height: "8vh" }}></div>
        </div>
      </div>
    );
  }
}

export default A4Page;
