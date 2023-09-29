import { useState, useEffect } from 'react';

export default function useToggleTheme() {
  const [theme, setTheme] = useState('light-theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const localStorageTheme = localStorage.getItem('theme');

  useEffect(() => {
    if (localStorageTheme) {
      document.body.className = localStorageTheme;
      setTheme(localStorageTheme);
    } else {
      // TODO - fix this. Doesn't work.
      // console.log(prefersDarkScheme, prefersDarkScheme.matches);
      const browserTheme = prefersDarkScheme.matches
        ? 'dark-theme'
        : 'light-theme';
      localStorage.setItem('theme', browserTheme);
      setTheme(browserTheme);
      document.body.className = browserTheme;
    }
  }, [prefersDarkScheme, localStorageTheme]);

  function toggleTheme() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';

    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
    setTheme(newTheme);
  }

  return {
    theme,
    toggleTheme: () => toggleTheme(),
  }
}