import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Provider from './Provider'; // Asegúrate de que la ruta sea correcta
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
