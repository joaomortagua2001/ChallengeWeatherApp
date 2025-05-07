import React from "react";
import "../App.css";

function WeatherDisplay({ weatherData, city, unit }) {
  if (!weatherData || !weatherData.daily) {
    return null;
  }

  const dias = weatherData.daily.slice(0, 5);
  const unitSymbol = unit === "imperial" ? "°F" : "°C";
  console.log("Unidade atual no gráfico:", unit);
  return (
    <div className="weather-display">
      <h3>Previsão diária: {city}</h3>
      <div className="previsao-container">
        {dias.map((dia, index) => {
          const date = new Date(dia.dt * 1000);
          const diaSemana = date.toLocaleDateString("pt-PT", { weekday: "long" });

          const tempMin = dia.temp.min;
          const tempMax = dia.temp.max;

          const iconCode = dia.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

          return (
            <div key={index} className="previsao-card">
              <div className="dia">{diaSemana}</div>
              <div className="weather-icon">
                <img src={iconUrl} alt={dia.weather[0].description} />
              </div>
              <div className="temperaturas">
                <span className="temp-min">{tempMin}{unitSymbol}</span>
                <span className="temp-max">{tempMax}{unitSymbol}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherDisplay;
