import React from "react";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Tuesday 07:15",
    description: "Cloudy",
    temperature: 5,
    humidity: 80,
    wind: 30,
  };
  return (
    <div className="Weather weather-app">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-form-input"
            autocomplete="on"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <span>Last updated: {weatherData.date}</span>,{" "}
              {weatherData.description} <span></span>
              <br />
              Humidity: <strong>{weatherData.humidity} %</strong>, Wind:
              <strong> {weatherData.wind} km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div>☁️</div>
            <div className="weather-app-temperature">
              {weatherData.temperature}
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
      <footer>
        <p>
          This project was coded by {""}
          <a
            href="https://www.shecodes.io/graduates/104913-patrycja-oosthuizen"
            target="_blank"
            rel="noreferrer"
          >
            Patrycja Oosthuizen
          </a>
          , is {""}
          <a
            href="https://github.com/PatrycjaOosthuizen/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github {""}
          </a>
          and hosted on
          <a
            href="https://react-weather-app-po.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {""} Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
