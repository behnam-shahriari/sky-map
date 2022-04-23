import React, { Component } from "react";
import "./App.css";
import A4Page from "../../components/A4Page/A4Page";
import InputForm from "../../components/InputForm/InputForm";

class App extends Component {
  constructor() {
		super();
		this.state = {
			dedication: 'SAMPLE DEDICATION',
      location: 'Los Angeles',
      date: 'DATE',
      color: '#00FF00'
		}
	}
  render() {
    const {dedication, location, date, color} = this.state;
    return (
      <div className="main">
        <A4Page dedication={dedication} location={location} date={date} color={color} classname="a4Page" />
        <InputForm classname="inputForm" />
      </div>
    );
  }
}

export default App;
