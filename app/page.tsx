import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import OurApproach from './components/OurApproach';
import NewsCarousel from './components/NewsCarousel';
import GetInTouch from './components/GetInTouch';
export default function Home() {
  // Background image
  return (
    <main>
      <Hero />
      <OurStory />
      <Projects />
      <Leadership />
      <OurApproach />
      <NewsCarousel />
      <GetInTouch />
    </main>
  );
}
