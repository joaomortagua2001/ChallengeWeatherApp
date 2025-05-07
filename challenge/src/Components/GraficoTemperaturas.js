import React from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts";

function GraficoTemperatura({ dailyData, unit }) {
  
  const dados = dailyData.slice(0, 5).map((dia) => {
    const data = new Date(dia.dt * 1000).toLocaleDateString("pt-PT", { weekday: "short" });
    return {
      dia: data,
      min: dia.temp.min,
      max: dia.temp.max,
    };
  });

  
  const simbolo = unit === "imperial" ? "°F" : "°C";

  
  console.log("Unidade atual no gráfico:", unit);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={dados} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          
         
          <YAxis 
            tickFormatter={(value) => `${value}${simbolo}`}  
          />
          
          <Tooltip formatter={(value) => `${value}${simbolo}`} />  
          <Legend />
          <Line type="monotone" dataKey="min" stroke="#00aaff" name="Mínima" />
          <Line type="monotone" dataKey="max" stroke="#ff6600" name="Máxima" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoTemperatura;
