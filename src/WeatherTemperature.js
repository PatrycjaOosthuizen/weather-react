import React from "react";

export default function WeatherTemperature(props) {
  function swapUnits(event) {
    event.preventDefault();
    props.change();
  }
  if (props.unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={swapUnits}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={swapUnits}>
            °C
          </a>
        </span>
      </span>
    );
  }
}
