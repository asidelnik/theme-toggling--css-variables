import './App.css';
import { useEffect } from 'react';
// import PodcastsApp from './components/podcasts-app/PodcastsApp';

export default function App() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.className = currentTheme;
    } else {
      // TODO - fix this. Doesn't work.
      // console.log(prefersDarkScheme, prefersDarkScheme.matches);
      const theme = prefersDarkScheme.matches ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }
  }, [prefersDarkScheme]);

  function toggleTheme() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';

    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  }

  return (
    <>
      {/* <PodcastsApp /> */}
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
}
