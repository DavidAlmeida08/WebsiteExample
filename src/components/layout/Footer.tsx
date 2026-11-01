import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-main">ATELIER</span>
              <span className="footer__logo-sub">Arquitetura & Design</span>
            </a>
            <p className="footer__tagline">
              Espaços que resistem ao tempo.<br />
              Arquitectura com propósito.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Navegação rodapé">
            <p className="footer__nav-label overline">Navegação</p>
            <ul className="footer__nav-list">
              {[
                ['Sobre', '#sobre'],
                ['Projetos', '#projetos'],
                ['Serviços', '#servicos'],
                ['Contacto', '#contacto'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="footer__nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__nav-label overline">Contacto</p>
            <address className="footer__address">
              <p>Rua que não existe, 45, 3.º Dto.</p>
              <p>Mangualde, 3530-257</p>
              <a href="tel:+351926384022" className="footer__contact-link">
                +351 926 384 022
              </a>
              <a href="mailto:atelier@anaferreira.pt" className="footer__contact-link">
                mail@mail.pt
              </a>
            </address>
          </div>

          {/* Social */}
          <div className="footer__social-col">
            <p className="footer__nav-label overline">Redes Sociais</p>
            <ul className="footer__social-list">
              {[
                ['Instagram', '#'],
                ['LinkedIn', '#'],
                ['Behance', '#'],
              ].map(([platform, url]) => (
                <li key={platform}>
                  <a href={url} className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    {platform}
                    <span className="footer__social-arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            © {CURRENT_YEAR} David Almeida. Todos os direitos reservados.
          </p>
          <p className="footer__credits">
            Arquitetura & Design · Lisboa, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
