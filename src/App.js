import React from "react";
import jsonData from "../src/dpk_weather_data.json";

//See what the current data is
// const getJSON = function (url, callback) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("get", url, true);
//   xhr.responseType = "json";
//   xhr.onload = function () {
//     let status = xhr.status;
//     if (status == 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status);
//     }
//   };
//   xhr.send();
// };

// getJSON("https://mm214.com/demo.php", function (err, data) {
//   if (err != null) {
//     alert("Something went wrong: " + err);
//   } else {
//     //console.log(data);
//   }
// });

// Trying fetch api
// fetch("https://mm214.com/demo.php")
//   .then((response) => response.text())
//   .then((html) => console.log(html));

// Trying async/await fetch
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://mm214.com/demo.php", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
//   let jsonData = data;
// });

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
