import React, { Component } from "react";
import VirtualSky from "../../containers/VirtualSkyModule/VirtualSkyModule";

class VS extends Component {
  colorArr = [];
  constructor(props) {
    super(props);
    this.colorArr.push(props.color);
  }

  config = {
    azOff: 0,
    height: 400,
    width: 400,
    latitude: 51.746449,
    longitude: 19.620693,
    time: new Date(),
    skyColors: this.colorArr,
    gridAzColor: "#100050",
    gridEqColor: "#105000",
    gridGalColor: "#500020",
    language: "en",
    visibility: {
      starMag: 6,
      showStarLabels: false,
      showPlanets: false,
      showPlanetsOrbit: false,
      showPlanetsLabels: false,
      showSunMoon: false,
      showConstellations: true,
      showConstellationBoundaries: false,
      showConstellationLabels: false,
      showAzLabels: false,
      showAzGrid: false,
      showEqGrid: false,
      showGalGrid: false,
      showGalaxy: false,
      showInfo: false,
    },
  };

  render() {
    return <VirtualSky id="startmap" config={this.config} />;
  }
}

export default VS;