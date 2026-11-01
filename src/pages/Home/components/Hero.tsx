import ImagePlaceholder from '../../../components/ui/ImagePlaceholder';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Apresentação do Atelier">
      <div className="hero__container container">
        {/* Eyebrow & Title */}
        <div className="hero__intro">

        </div>

        {/* Featured Visual Canvas */}
        <div className="hero__showcase">
          <div className="hero__frame">
            <ImagePlaceholder
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt="Casa do Arco — Arquitetura de betão aparente e vidro em Sintra"
              aspectRatio="16/9"
              label="Casa do Arco · Mangualde"
              size="lg"
            />
            <div className="hero__frame-overlay">
              <div className="hero__frame-meta">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
