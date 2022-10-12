import React from "react";
import axios from 'axios';

export default function Weather(props) {

function handleResponse(response) {
alert(`The weather in New York is ${response.data.main.temp}°C`);
}   

let apiKey = "8cfa4dd3ccafa97ae01716474ab8d486";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    return (
        <h2> Hello from Weather</h2>
    );
}