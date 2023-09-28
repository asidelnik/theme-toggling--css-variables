import './controls.css';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Replay30Icon from '@mui/icons-material/Replay30';
import Forward30Icon from '@mui/icons-material/Forward30';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Progress from '../linear-progress/LinearProgress';

export default function Controls() {
  return (
    <>
      <section className="controls">
        <div className="bookmark">
          <BookmarkIcon />
        </div>
        <div className="rewind">
          <Replay30Icon />
        </div>
        <div className="pause-play">
          <PlayCircleFilledIcon />
          <PauseCircleIcon />
        </div>
        <div className="forwards">
          <Forward30Icon />
        </div>
        <div className="speed">1.0x</div>

        <div className="from-time">00:00</div>
        <div className="progress-bar">
          <Progress />
        </div>
        <div className="to-time">00:00</div>
      </section>
    </>
  );
}
