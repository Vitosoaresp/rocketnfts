import { PopularTheWeek } from './components/PopularTheWeek';
import { TheBestArtists } from './components/TheBestArtists';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Information } from './components/Information';

function App() {
  return (
    <>
      <About />
      <Information />
      <PopularTheWeek />
      <TheBestArtists />
      <Footer />
    </>
  );
}

export default App;
