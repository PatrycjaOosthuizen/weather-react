import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    function SearchWeatherForecast() {
      let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      // Updated to use the free 5-day forecast API
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }

    setLoaded(false);
    SearchWeatherForecast();
  }, [props.coordinates]);

  function handleResponse(response) {
    // Process the 3-hour interval data into daily forecasts
    const dailyData = {};

    response.data.list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();

      if (!dailyData[date]) {
        dailyData[date] = {
          dt: item.dt,
          temp: {
            min: item.main.temp_min,
            max: item.main.temp_max,
            day: item.main.temp,
          },
          weather: item.weather,
          humidity: item.main.humidity,
          wind_speed: item.wind.speed,
        };
      } else {
        // Update min/max temperatures for the day
        dailyData[date].temp.min = Math.min(
          dailyData[date].temp.min,
          item.main.temp_min
        );
        dailyData[date].temp.max = Math.max(
          dailyData[date].temp.max,
          item.main.temp_max
        );
      }
    });

    setForecast(Object.values(dailyData));
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row wrap">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay
                    data={dailyForecast}
                    unit={props.unit}
                    change={props.change}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div className="WeatherForecast">Loading forecast...</div>;
  }
}
