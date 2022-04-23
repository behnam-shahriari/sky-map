import { useState } from "react";
import { fetchPlace } from "./fetchPlace";
import "./InputForm.css";

const InputForm = (props) => {
  const {
    location,
    onLocationChange,
    onCoordinatesChange,
    dedication,
    onDedicationChange,
    onMonthChange,
    onDayChange,
    onYearChange,
    color,
    onColorChange
  } = props;
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");
  const day = [];
  const month = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = [];
  const da = new Date();
  let longMonth = da.toLocaleString("en-us", { month: "long" });
  let tD = da.getDate();
  let tM = da.getMonth();
  let tY = da.getFullYear();
  // let fullDate = longMonth + " " + day + ", " + year;

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  for (let i of range(1, 31)) {
    day.push(i);
  }

  for (let i of range(2000, 2099)) {
    year.push(i);
  }

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    onLocationChange(e);
    if (!city) return;

    const res = await fetchPlace(city);
    onCoordinatesChange(res);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

  return (
    <div className="containerIF">
      <form>
        <div className="placesAutocomplete">
          <div className="placesAutocomplete__inputWrap">
            <label htmlFor="city" className="label">
              Location
              {autocompleteErr && (
                <span className="inputError">{autocompleteErr}</span>
              )}
            </label>
            <br />
            <input
              list="places"
              type="text"
              id="city"
              name="city"
              onChange={handleCityChange}
              value={location}
              required
              pattern={autocompleteCities.join("|")}
              autoComplete="off"
            />
            <datalist id="places">
              {autocompleteCities.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </datalist>
          </div>
        </div>
        <br />
        <label>Dedication</label>
        <br />
        <textarea value={dedication} onChange={onDedicationChange}></textarea>
        <br />
        <label>Date</label>
        <br />
        <select onChange={onMonthChange}>
          {month.map((m, i) => {
            let flag = false;
            if (i === tM) {
              flag = true;
            } else {
              flag = false;
            }
            return (
              <option selected={flag} key={i} value={i + 1}>
                {m}
              </option>
            );
          })}
        </select>
        <select onChange={onDayChange}>
          {day.map((d) => {
            let flag = false;
            if (d === tD) {
              flag = true;
            } else {
              flag = false;
            }
            return (
              <option key={d} value={d} selected={flag}>
                {d}
              </option>
            );
          })}
        </select>

        <select onChange={onYearChange}>
          {year.map((y) => {
            let flag = false;
            if (y === tY) {
              flag = true;
            } else {
              flag = false;
            }
            return (
              <option key={y} value={y} selected={flag}>
                {y}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <label>Design</label>
        <br />


        <div style={{ display: "flex", flexFlow: "row wrap", gap: "4px" }}>
          <div
            onClick={() => onColorChange('#000')}
            style={{ backgroundColor: "#000", width: "40px", height: "40px" }}
          ></div>
          <div
          onClick={() => onColorChange('#00008B')}
            style={{
              backgroundColor: "#00008B",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <div
          onClick={() => {onColorChange('#0F0')}}
            style={{ backgroundColor: "#0F0", width: "40px", height: "40px" }}
          ></div>
          <div
          onClick={() => onColorChange('#FFA500')}
            style={{
              backgroundColor: "#FFA500",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <div
          onClick={() => onColorChange('#C4A484')}
            style={{
              backgroundColor: "#C4A484",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <div
          onClick={() => onColorChange('#F00')}
            style={{ backgroundColor: "#F00", width: "40px", height: "40px" }}
          ></div>
        </div>
        <div style={{ height: "35vh" }}></div>
        <hr />
        <button type="submit" onClick={() => this.generatePDF()} style={{ backgroundColor: 'black', color : 'white'}}>Generate PDF</button>
      </form>
    </div>
  );
};

export default InputForm;
