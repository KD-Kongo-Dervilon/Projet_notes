import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
      <Route exact path="/Projet_notes" element={<App/>} />
    </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

