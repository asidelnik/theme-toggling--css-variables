import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';

export default function App() {
  // const [theme, setTheme] = useState('light-theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.className = currentTheme;
    } else {
      const x = prefersDarkScheme.matches ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', x);
      document.body.className = x;
    }
  }, []);

  function toggleTheme() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';

    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  }

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toggleTheme}>Toggle theme</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem('theme');
// If the user's preference in localStorage is dark...
if (currentTheme == 'dark') {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle('dark-mode');
  // Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == 'light') {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle('light-mode');
}
