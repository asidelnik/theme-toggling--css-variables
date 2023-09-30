import c from './controls.module.scss';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
// import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Replay30Icon from '@mui/icons-material/Replay30';
import Forward30Icon from '@mui/icons-material/Forward30';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Progress from '../linear-progress/LinearProgress';
import clsx from 'clsx';

export default function Controls() {
  return (
    <>
      <section className={c.controls}>
        <div className={c.bookmark}>
          {/* <BookmarkBorderIcon /> */}
          <BookmarkIcon />
        </div>

        <div className={c.icons}>
          <div className={c.rewind}>
            <Replay30Icon className={clsx(c.iconMedium)} />
          </div>

          <div className={c.pausePlay}>
            {/* <PlayCircleFilledIcon className={clsx(c.iconLarge)} /> */}
            <PauseCircleIcon className={clsx(c.iconLarge)} />
          </div>
          <div className={c.forwards}>
            <Forward30Icon className={clsx(c.iconMedium)} />
          </div>
        </div>

        <div className={c.speed}>1.0x</div>

        {/*  */}
        <div className={c.fromTime}>00:00</div>
        <div className={c.progressBar}>
          <Progress />
        </div>
        <div className={c.toTime}>00:00</div>
      </section>
    </>
  );
}
