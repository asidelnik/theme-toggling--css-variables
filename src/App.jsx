import c from './app.module.scss';
import PodcastsApp from './components/podcasts-app/PodcastsApp';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import useToggleTheme from './custom-hooks/useToggleTheme';
import clsx from 'clsx';

export default function App() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <>
      <PodcastsApp />
      <div className={c.themeButton}>
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className={clsx(c.toggleButton)}
        >
          {theme === 'light-theme' ? <NightlightIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </>
  );
}
