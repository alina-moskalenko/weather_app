import React from "react";
import jsonData from "./dpk_weather_data.json";

//See what the current data is

// Convert Kelvin to Fahrenheit for temps
let mainTemp = Math.floor((jsonData.main.temp - 273.15) * 1.8 + 32);
let feelsLike = Math.floor((jsonData.main.feels_like - 273.15) * 1.8 + 32);

// Convert decimal to whole number for wind
let windSpeed = Math.floor(jsonData.wind.speed);

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>San Diego</p>
          </div>
          <div className="temp">
            <h1>{mainTemp}°F</h1>
          </div>
          <div className="description">
            <p>{jsonData.weather[0].main}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{feelsLike}°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{jsonData.main.humidity}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{windSpeed} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
