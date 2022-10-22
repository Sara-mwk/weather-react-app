import React from "react";
import axios from 'axios';

import Temperature from "./Temperature";
import './App.css';

export default function Weather(props) {

function handleResponse(response) {
//t(`The weather in New York is  ${response.data.main.temp}°C`);
}   

let apiKey = "8cfa4dd3ccafa97ae01716474ab8d486";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return (
    <div className="weather">
      <h2 className="city">Omaha</h2>
      <p className="date-and-time">
        Thurthday, Sep 29 <br /> 2022, 11:00 am
      </p>
      <p className="temp">
        <Temperature temperature={25} />
      </p>
      <p className="icon">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />{" "}
      </p>

      <ul className="conditions">
        <li>Clear skies</li>
        <li>Humidity: 45%</li>
        <li>Wind: 25mph</li>
      </ul>
    </div>
  );
}