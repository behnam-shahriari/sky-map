import React, { Component } from "react";
import VirtualSky from "../../containers/VirtualSkyModule/VirtualSkyModule";

class VS extends Component {
  config = {
    azOff: 0,
    height: 300,
    width: 300,
    latitude: 51.746449,
    longitude: 19.620693,
    time: new Date(),
    skyColors: ["#000", "#100050"],
    gridAzColor: "#100050",
    gridEqColor: "#105000",
    gridGalColor: "#500020",
    language: "en",
    visibility: {
      starMag: 6,
      showStarLabels: true,
      showPlanets: true,
      showPlanetsOrbit: true,
      showPlanetsLabels: true,
      showSunMoon: true,
      showConstellations: true,
      showConstellationBoundaries: true,
      showConstellationLabels: true,
      showAzLabels: true,
      showAzGrid: true,
      showEqGrid: true,
      showGalGrid: true,
      showGalaxy: true,
      showInfo: true,
    },
  };

  render() {
    return <VirtualSky id="startmap" config={this.config} />;
  }
}

export default VS;