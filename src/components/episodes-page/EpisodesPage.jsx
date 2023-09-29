import c from './episodes-page.module.scss';
import Controls from '../Controls/Controls';
import AudioList from '../audio-list/AudioList';
import Search from '../search/Search';

export default function EpisodesPage() {
  return (
    <>
      <section className={c.container}>
        <Search />
        <AudioList />
        <Controls />
      </section>
    </>
  );
}
