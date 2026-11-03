import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
                <div className="navbar__container container">
                    {/* Logo */}
                    <a href="#" className="navbar__logo" onClick={closeMenu}>
                        <span className="navbar__logo-main">ATELIER</span>
                        <span className="navbar__logo-divider">·</span>
                        <span className="navbar__logo-sub">Arquitetura & Design</span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="navbar__nav" aria-label="Navegação principal">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="navbar__link">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a href="#contacto" className="navbar__cta">
                        Iniciar Projeto
                    </a>

                    {/* Hamburger */}
                    <button
                        className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Mobile drawer */}
            <div
                className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className="navbar__drawer-nav" aria-label="Menu mobile">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="navbar__drawer-link"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contacto" className="navbar__drawer-cta" onClick={closeMenu}>
                        Iniciar Projeto
                    </a>
                </nav>
                <p className="navbar__drawer-contact">
                    <a href="mailto:atelier@anaferreira.pt">atelier@anaferreira.pt</a>
                    <span>+351 21 347 89 00</span>
                </p>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="navbar__overlay"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </>
    );
}
