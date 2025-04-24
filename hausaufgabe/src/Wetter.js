
import React, { useEffect, useState } from "react";
import App from "./App";

const Wetter = ({ city }) => {
    const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Fehler beim Abrufen des Wetters:", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) return <p>Wetter wird geladen...</p>;

  const current = weather.current_condition[0];

  return (
    <div>
      <h2>Wetter in {city}</h2>
      <p>{current.weatherDesc[0].value}</p>
      <p>🌡 {current.temp_C}°C</p>
      <p>💨 Wind: {current.windspeedKmph} km/h</p>
    </div>
  );
};

export default Wetter;