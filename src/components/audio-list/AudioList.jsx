import AudioItem from '../audio-item/AudioItem';
import { audioList } from '../../fake-data/audio-list-fake';

export default function AudioList() {
  return (
    <>
      <section className="audio-list">
        {audioList.map((item, index) => {
          return (
            <AudioItem
              key={index}
              {...item}
            />
          );
        })}
      </section>
      <AudioItem />
    </>
  );
}
