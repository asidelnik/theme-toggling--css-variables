import c from './controls.module.scss';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Replay30Icon from '@mui/icons-material/Replay30';
import Forward30Icon from '@mui/icons-material/Forward30';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import Progress from '../linear-progress/LinearProgress';
import clsx from 'clsx';
import {
  useControls,
  useControlsDispatch,
} from '../../contexts/controls-context';
import { IconButton } from '@mui/material';

export default function Controls() {
  const controls = useControls();
  const controlsDispatch = useControlsDispatch();

  function togglePlay() {
    controlsDispatch({ type: 'set-is-playing', payload: !controls.isPlaying });
  }

  function updateSpeed() {
    controlsDispatch({
      type: 'set-playing-speed',
      payload: controls.playingSpeed < 2 ? controls.playingSpeed + 0.25 : 1,
    });
  }

  return (
    <>
      <section className={c.controls}>
        <div className={c.bookmark}>
          <BookmarkBorderIcon />
          {/* <BookmarkIcon /> */}
        </div>

        <div className={c.icons}>
          <div className={c.rewind}>
            <Replay30Icon className={clsx(c.iconMedium)} />
          </div>

          <div className={c.pausePlay}>
            <IconButton
              onClick={togglePlay}
              disabled={controls.playingTrackId === null}
            >
              {controls.isPlaying ? (
                <PauseCircleIcon className={clsx(c.iconLarge)} />
              ) : (
                <PlayCircleFilledIcon
                  className={
                    controls.playingTrackId === null
                      ? clsx(c.iconLarge + ' ' + c.disabled)
                      : clsx(c.iconLarge)
                  }
                />
              )}
            </IconButton>
          </div>
          <div className={c.forwards}>
            <Forward30Icon className={clsx(c.iconMedium)} />
          </div>
        </div>

        <div
          className={c.speed}
          onClick={updateSpeed}
        >
          {controls.playingSpeed + 'x'}
        </div>

        <div className={c.fromTime}>30:00</div>
        <div className={c.progressBar}>
          <Progress />
        </div>
        <div className={c.toTime}>60:00</div>
      </section>
    </>
  );
}
