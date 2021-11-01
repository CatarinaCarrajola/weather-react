import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "cloudy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <form className="form">
        <input
          type="search"
          placeholder="Type a city..."
          className="form-conrol"
        />
        <input type="Submit" value="Search" />
      </form>
      <br />
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          <span>Last updated: {weatherData.date}</span>
        </li>
        <li>{weatherData.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <img
            className="weather-icon"
            src={weatherData.imgURL}
            alt={weatherData.description}
          />
          <strong></strong>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}% </li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
