import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oosthuizen" />
        <footer>
          <p>
            This project was coded by {""}
            <a
              href="https://www.shecodes.io/graduates/104913-patrycja-oosthuizen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patrycja Oosthuizen
            </a>
            , is {""}
            <a
              href="https://github.com/PatrycjaOosthuizen/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github {""}
            </a>
            and hosted on
            <a
              href="https://react-weather-app-po.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {""} Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
