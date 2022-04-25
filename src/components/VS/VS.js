import React, {  useEffect } from "react";
import VirtualSky from "../../containers/VirtualSkyModule/VirtualSkyModule";

const VS = (props) => {
  const colArr = [];
  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log(props.date)
      colArr.push(props.color)
    }
  }, [props.color, props.lan, props.lon, props.date]);

  const config = {
    azOff: 0,
    height: 150,
    width: 150,
    latitude: props.lat,
    longitude: props.lon,
    time: props.date ? new Date(props.date) : new Date(),
    skyColors: props.color,
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

  return <VirtualSky id="startmap" config={config} />;
};

export default VS;
