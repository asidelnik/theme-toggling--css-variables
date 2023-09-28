import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PropTypes from 'prop-types';
import './audio-item.css';

export default function AudioItem({ title, duration, podcastName, date }) {
  return (
    <>
      <article className="audio-item">
        <div className="icon">
          <VolumeUpIcon />
        </div>

        <div className="title">
          <h3>{title}</h3>
        </div>

        <div className="duration">
          <p className="duration">{duration}</p>
        </div>

        <div className="info">
          <p className="podcast-name">{podcastName}</p>
          <p className="date">{date}</p>
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

AudioItem.defaultProps = {
  title: 'Audio Title',
  duration: '00:00',
  podcastName: 'Podcast Name',
  date: '00/00/00',
};
