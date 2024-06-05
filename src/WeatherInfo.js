import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={56} />
            </div>

            <div className="float-left">
              <WeatherTemperature
                celsius={props.data.temperature}
                unit={props.unit}
                change={props.change}
              />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {formatWind()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
