import { useState } from 'react';
import c from './audio-list.module.scss';
import AudioItem from '../audio-item/AudioItem';
import { audioList } from '../../fake-data/audio-list-fake';

export default function AudioList() {
  return (
    <>
      <section className={c.audioList}>
        {audioList.map((item) => {
          return (
            <AudioItem
              key={item.id}
              {...item}
            />
          );
        })}
      </section>
    </>
  );
}
