import { useState } from 'react';
import AudioItem from '../audio-item/AudioItem';
import { audioList } from '../../fake-data/audio-list-fake';

export default function AudioList() {
  const [playingAudioItemId, setPlayingAudioItemId] = useState(null);
  return (
    <>
      <section className="audio-list">
        {audioList.map((item) => {
          return (
            <AudioItem
              key={item.id}
              {...item}
              isPlaying={playingAudioItemId === item.id}
              onPlay={() => setPlayingAudioItemId(item.id)}
            />
          );
        })}
      </section>
      <AudioItem />
    </>
  );
}
