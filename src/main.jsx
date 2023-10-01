import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styling/theme.css';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './styling/mui-theme.js';
import ControlsProvider from './contexts/controls-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlsProvider>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </ControlsProvider>
  </React.StrictMode>
);
