import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PropTypes from 'prop-types';
import c from './audio-item.module.scss';
import {
  useControls,
  useControlsDispatch,
} from '../../contexts/controls-context';
export default function AudioItem({ id, title, duration, podcastName, date }) {
  const controls = useControls();
  const controlsDispatch = useControlsDispatch();
  const isTrackSelected = controls.playingTrackId === id;

  function togglePlay() {
    controlsDispatch({
      type: 'set-playing-track',
      payload: { id, duration },
    });
  }

  return (
    <>
      <article className={c.audioItem}>
        <div className={c.icon}>
          {controls.isPlaying && isTrackSelected && <VolumeUpIcon />}
        </div>

        <div
          className={isTrackSelected ? c.title + ' ' + c.selected : c.title}
          onClick={togglePlay}
        >
          {title}
        </div>

        <div className={c.duration}>{duration}</div>

        <div className={c.info}>
          <span>{podcastName}</span>
          <span className={c.dotSeparator}>•</span>
          <span>{date}</span>
        </div>
      </article>
    </>
  );
}

AudioItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  podcastName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
