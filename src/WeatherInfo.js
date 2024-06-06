import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  function formatWind() {
    if (props.unit === "celsius") {
      return `${Math.round(props.data.wind)} km/h`;
    } else {
      return `${Math.round(props.data.wind * 0.62)} mph`;
    }
  }

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 mb-lg-3">
        <div className="col-8">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={56} />
            </div>

            <div>
              <WeatherTemperature
                celsius={props.data.temperature}
                unit={props.unit}
                change={props.change}
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {formatWind()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
