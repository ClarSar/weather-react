import React from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
    function handleResponse(response) {
        alert (`the weather in ${response.data.name} is ${response.data.main.temp}°C`)
}

let weatherData = {
    city: "Galway",
    temperature: 15,
    date: "Thursday, 07:48",
    description: "Overcast Clouds",
    imgUrl: "https://openweathermap.org/img/wn/04d@2x.png",
    humidity: 79,
    windSpeed: 3
  };

    let apiKey= "749d11da7cc4bf5dcb36a5fdf40ecee1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="Weather">
          <header>
            <i className="fa-solid fa-gem"></i> Splitting Stones
          </header>
          <form className="mb-3">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter Location"
                  className="form-control"
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
              <div className="col-2">
                <button className="btn btn-secondary w-100" type="submit">
                  <i className="fa-solid fa-location-arrow"></i>
                </button>
              </div>
            </div>
          </form>
    
          <div className="overview">
            <h1 className="mb-2">{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: <span> {weatherData.date}</span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="units">{weatherData.temperature}</span>
                  <span>°C</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  Humidity: {weatherData.humidity} <span></span>%
                </li>
                <li>
                  Wind Speed: {weatherData.windSpeed} <span></span>mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    
