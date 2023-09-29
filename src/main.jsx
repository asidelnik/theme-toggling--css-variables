import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styling/theme.css';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './styling/mui-theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
