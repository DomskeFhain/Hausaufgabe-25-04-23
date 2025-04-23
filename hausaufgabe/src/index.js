import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Datum from './Datum';
import Wetter from './Wetter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/datum" element={<Datum></Datum>}></Route>
        <Route path="/wetter" element={<Wetter></Wetter>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

