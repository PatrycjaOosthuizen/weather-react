import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function formatForecastTemperatures(temp) {
    let celsiusTemp = Math.round(temp);
    let fahrenheitTemp = Math.round((temp * 9) / 5 + 32);
    if (props.unit === "celsius") {
      return `${celsiusTemp}°`;
    } else {
      return `${fahrenheitTemp}°`;
    }
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div class="WeatherForecast-temperatures">
        <span className="WetherForecast-temperature-max">
          {formatForecastTemperatures(props.data.temp.max)}
        </span>
        <span className="WetherForecast-temperature-min">
          {formatForecastTemperatures(props.data.temp.min)}
        </span>
      </div>
    </div>
  );
}
