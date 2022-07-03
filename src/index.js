import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Q001 from "./quotes/Q001";
import Q002 from "./quotes/Q002";
import Home from './Home.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route path="/" element={<Home />} />

         <Route path="/quotes/Q001" element={<Q001 />} />
         <Route path="/quotes/Q002" element={<Q002 />} />
    </Route>
  </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
