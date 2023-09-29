import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PropTypes from 'prop-types';
import c from './audio-item.module.scss';

export default function AudioItem({ title, duration, podcastName, date }) {
  return (
    <>
      <article className={c.audioItem}>
        <div className={c.icon}>
          <VolumeUpIcon />
        </div>

        <div className={c.title}>
          <h3>{title}</h3>
        </div>

        <div className={c.duration}>
          <p>{duration}</p>
        </div>

        <div className={c.info}>
          <p className={c.podcastName}>{podcastName}</p>
          <p className={c.date}>{date}</p>
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
