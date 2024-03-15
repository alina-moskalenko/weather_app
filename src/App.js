import React, { useEffect } from "react";

// Convert Kelvin to Fahrenheit for temps
const tempKtoF = (temp) => Math.floor((temp - 273.15) * 1.8 + 32);

function App() {
  const [forecast, setForecast] = React.useState({});

  React.useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://mm214.com/demo.php");
      response = await response.json();
      setForecast(response);
    }

    try {
      fetchMyAPI();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      <div className="container">
        {Object.keys(forecast).length > 0 ? (
          <>
            <div className="top">
              <div className="location">
                <p>San Diego</p>
              </div>
              <div className="temp">
                <h1>{tempKtoF(forecast?.main?.temp)}°F</h1>
              </div>
              <div className="description">
                <p>{forecast?.weather[0].main}</p>
              </div>
            </div>
            <div className="bottom">
              <div className="feels">
                <p className="bold">{tempKtoF(forecast?.main?.feels_like)}°F</p>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                <p className="bold">{forecast?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className="bold">{Math.floor(forecast?.wind?.speed)} MPH</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default App;
