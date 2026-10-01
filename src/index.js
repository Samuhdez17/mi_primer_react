import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Saludo from './components/Saludo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludo />
  </React.StrictMode>
);

reportWebVitals();
