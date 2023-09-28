import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function AudioItem() {
  return (
    <>
      <article className="audio-item">
        <div className="icon">
          <VolumeUpIcon />
        </div>

        <div className="title">
          <h3>Episode title</h3>
        </div>

        <div className="duration">
          <p className="duration">24:15</p>
        </div>

        <div className="info">
          <p className="podcast-name">Hayot Kiss</p>
          <p className="date">Aug 1, 2023</p>
        </div>
      </article>
    </>
  );
}
