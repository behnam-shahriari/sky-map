import React, { Component } from "react";
import "./App.css";
import A4Page from "../../components/A4Page/A4Page";
import InputForm from "../../components/InputForm/InputForm";

class App extends Component {
  constructor() {
		super();
		this.state = {
			dedication: 'SAMPLE DEDICATION',
      location: 'Los Angeles, California, United States',
      date: '',
      day: '',
      month: '',
      year: '',
      color: '#000',
      lat: '51.746449',
      lon: '19.620693'
		}
    const token = "pk.eyJ1IjoiYmVobmFtLXNoYWhyaWFyaSIsImEiOiJjbDJianoxdWUwZzd1M2NzY3NiODJtdTd0In0.huxT56t4Mz3kWZoxTREDzQ";
	}

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const da = new Date();
      let tD = da.getDate();
      let tM = da.getMonth();
      let tY = da.getFullYear();
      this.setState({day: tD});
      this.setState({month: tM});
      this.setState({year: tY});
  };


  onLocationChange = event => {
    this.setState({location: event.target.value});



  } 

  onCoordinatesChange = res => {
    let lat = res.features[0].geometry.coordinates[0];
    let lon = res.features[0].geometry.coordinates[1];
    this.setState({lat: lat});
    this.setState({lon: lon})
  }

  onDedicationChange = event => {
    this.setState({dedication: event.target.value});
  } 

  onDayChange = (event) => {
    this.setState({day: event.target.value});
  }

  onMonthChange = (event) => {
    this.setState({month: event.target.value});
  }

  onYearChange = (event) => {
    this.setState({year: event.target.value});
  }

  onColorChange = event => {
    this.setState({color: [event]});
  }


  render() {
    const {dedication, location, date, color, day, month, year, lat, lon} = this.state;
    return (
      <div className="main">
        <A4Page dedication={dedication} lat={lat} lon={lon} location={location} date={date} day={day} month={month} year={year} color={color} classname="a4Page" />
        <InputForm classname="inputForm" color={color} onColorChange={this.onColorChange} onDayChange={this.onDayChange} onMonthChange={this.onMonthChange} onYearChange={this.onYearChange} location={location} onLocationChange={this.onLocationChange} onCoordinatesChange={this.onCoordinatesChange} dedication={dedication} onDedicationChange={this.onDedicationChange} />
      </div>
    );
  }
}

export default App;
