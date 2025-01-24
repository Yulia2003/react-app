import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import RoutesAndTips from './pages/RoutesAndTips/RoutesAndTips';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="results" element={<Results />} />
          <Route path="routes-and-tips" element={<RoutesAndTips />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);