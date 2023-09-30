import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PropTypes from 'prop-types';
import c from './audio-item.module.scss';

export default function AudioItem(props) {
  const { title, duration, podcastName, date, isPlaying, onPlay } = props;
  return (
    <>
      <article className={c.audioItem}>
        <div className={c.icon}>{isPlaying && <VolumeUpIcon />}</div>

        <div
          className={isPlaying ? c.title + ' ' + c.selected : c.title}
          onClick={onPlay}
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
  isPlaying: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
};

// AudioItem.defaultProps = {
//   title: 'Audio Title',
//   duration: '00:00',
//   podcastName: 'Podcast Name',
//   date: '00/00/00',
//   isPlaying: false,
// };
