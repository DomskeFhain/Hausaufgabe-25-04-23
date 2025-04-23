import { useEffect, useState } from "react";
import './App.css';
import App from "./App";


function Datum() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const datum = now.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const uhrzeit = now.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
    <App></App>
      <h1>Hi!</h1>
      <h2>Es ist {datum} um {uhrzeit}</h2>
    </>
  );
}; 

export default Datum