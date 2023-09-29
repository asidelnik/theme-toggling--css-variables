import s from './podcasts-app.module.scss';
import TabsNav from '../tabs-nav/TabsNav';

export default function PodcastsApp() {
  return (
    <>
      <main className={s.container}>
        <h1>Podcasts</h1>
        <TabsNav />
      </main>
    </>
  );
}
