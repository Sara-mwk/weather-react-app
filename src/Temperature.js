import React, { useState } from "react";
import "./App.css";


export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }
  return (
    <p>
      {temperature}{" "}
      <span className="units">
        <a href="/" onClick={showCelsius}>
          °C{" "}
        </a>
        |
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </p>
  );
}