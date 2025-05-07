import React, { useState } from "react";
import "../App.css";
import PesquisaCidade from "./PesquisaCidade";
import WeatherDisplay from "./TabelaTemperaturas";
import GraficoTemperatura from "./GraficoTemperaturas";



function WeatherApp() {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');


    const ProcuraCidade = (city, unit) => {
        setCity(city);
        setUnit(unit);
        setError('');
        
    
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d7b3f4b6d0f1476124ba2fe70af37e4&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Essa cidade não existe');
                }
                return response.json();
            })
            .then(data => {

                const { lat, lon } = data.coord;
                
                return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=917fe9b5ff85062eceaf0711548716da`);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Não foi possível obter os dados');
                }
                return response.json();
            })
            .then(data => {
                
                setWeatherData(data);
            })
            .catch(error => {
                setError(error.message);
            });
    };
    return (
        <div className="container">
            <PesquisaCidade ProcuraCidade={ProcuraCidade} />
            {error && <p className="error">{error}</p>}
            {weatherData && <WeatherDisplay weatherData={weatherData} city={city} unit={unit} />}
            {weatherData && weatherData.daily && (
                <GraficoTemperatura dailyData={weatherData.daily} unit={unit} />
            )}
            
            
        </div>
    );
}

export default WeatherApp;
