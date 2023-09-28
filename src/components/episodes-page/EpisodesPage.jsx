import Controls from '../Controls/Controls';
import AudioList from '../audio-list/AudioList';
import Search from '../search/Search';

export default function EpisodesPage() {
  return (
    <>
      <Search />
      <AudioList />
      <Controls />
    </>
  );
}
