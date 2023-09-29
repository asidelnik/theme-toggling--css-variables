import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styling/root.css';
import './styling/theme.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
