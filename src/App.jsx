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
      <div className={c.container}>
        <h1 className={c.bgH1}>Theme toggling study</h1>
        <h2 className={c.bgH2}>Light and dark modes</h2>
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
      </div>
    </>
  );
}
