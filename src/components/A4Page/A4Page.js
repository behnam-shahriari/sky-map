import React, { Component } from "react";
import VirtualSky from "react-virtual-sky/dist/VirtualSky/VirtualSky";


export default class A4Page extends Component {
    config = {
        azOff: 0,
        height: 500,
        width: 500,
        latitude: 51.746449,
        longitude: 19.620693,
        time: new Date(),
        skyColors: [ "#000", "#100050" ],
        gridAzColor: "#100050",
        gridEqColor: "#105000",
        gridGalColor: "#500020",
        language: 'en',
        visibility:{
          starMag: 6,
          showStarLabels: false,
          showPlanets: true,
          showPlanetsOrbit: true,
          showPlanetsLabels: false,
          showSunMoon: true,
          showConstellations: true,
          showConstellationBoundaries: false,
          showConstellationLabels: false,
          showAzLabels: true,
          showAzGrid: true,
          showEqGrid: true,
          showGalGrid: false,
          showGalaxy: true,
          showInfo: true
        }
      }

    render() {
        return <VirtualSky id="startmap" config={this.config}/>
      }
}