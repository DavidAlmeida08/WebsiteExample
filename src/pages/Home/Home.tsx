import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}
