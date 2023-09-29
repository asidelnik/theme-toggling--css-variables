import './App.css';
import PodcastsApp from './components/podcasts-app/PodcastsApp';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import useToggleTheme from './custom-hooks/useToggleTheme';

export default function App() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <>
      <PodcastsApp />
      <IconButton
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === 'light-theme' ? <NightlightIcon /> : <LightModeIcon />}
      </IconButton>
    </>
  );
}
