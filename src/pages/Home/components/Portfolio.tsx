import { useState } from 'react';
import ImagePlaceholder from '../../../components/ui/ImagePlaceholder';
import { PROJECTS } from '../../../data/projects';
import type { Project, ProjectCategory } from '../../../types';
import './Portfolio.css';

type FilterOption = 'Todos' | ProjectCategory;

const FILTERS: FilterOption[] = [
    'Todos',
    'Residencial',
    'Comercial',
    'Interiores',
    'Reabilitação',
];

export default function Portfolio() {
    const [active, setActive] = useState<FilterOption>('Todos');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const visible = active === 'Todos'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active);

    return (
        <section id="projetos" className="portfolio" aria-label="Portfólio de Obras">
            <div className="container">
                {/* Header */}
                <div className="portfolio__header">
                    <h2 className="section-headline">
                        Veja os nossos projetos.
                    </h2>
                    <p className="section-subhead">
                        Projetos residenciais, comerciais e de reabilitação desenhados com rigor técnico e sensibilidade ao contexto português.
                    </p>
                </div>

                {/* Segmented Pill Filters */}
                <div className="portfolio__filter-bar">
                    <div className="portfolio__pill-group" role="tablist" aria-label="Filtrar por tipologia">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                role="tab"
                                aria-selected={active === f}
                                className={`portfolio__pill-btn ${active === f ? 'portfolio__pill-btn--active' : ''}`}
                                onClick={() => setActive(f)}
                            >
                                {f}
                                {f !== 'Todos' && (
                                    <span className="portfolio__pill-count">
                                        {PROJECTS.filter((p) => p.category === f).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="portfolio__grid">
                    {visible.map((project, i) => (
                        <article
                            key={project.id}
                            className={`portfolio__card ${project.featured && i % 3 === 0 ? 'portfolio__card--featured' : ''}`}
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                            aria-label={`Ver detalhes de ${project.title}`}
                        >
                            {/* Visual */}
                            <div className="portfolio__visual-wrap">
                                <ImagePlaceholder
                                    src={project.image}
                                    alt={project.title}
                                    aspectRatio={project.featured && i % 3 === 0 ? '16/10' : '4/3'}
                                    label={project.title}
                                    size="md"
                                />
                                <div className="portfolio__hover-pill">
                                    <span>Ver Ficha Técnica ↗</span>
                                </div>
                            </div>

                            {/* Card Meta */}
                            <div className="portfolio__card-body">
                                <div className="portfolio__card-top">
                                    <span className="portfolio__card-category">{project.category}</span>
                                    <span className="portfolio__card-year">{project.year}</span>
                                </div>

                                <h3 className="portfolio__card-title">{project.title}</h3>
                                <p className="portfolio__card-location">{project.location}</p>

                                <p className="portfolio__card-desc">{project.description}</p>

                                <div className="portfolio__card-specs">
                                    <span className="portfolio__spec-badge">{project.area}</span>
                                    {project.features.slice(0, 2).map((feat) => (
                                        <span key={feat} className="portfolio__spec-badge">
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Interactive Project Sheet Modal */}
                {selectedProject && (
                    <div
                        className="portfolio__modal-backdrop"
                        onClick={() => setSelectedProject(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedProject.title}
                    >
                        <div
                            className="portfolio__modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="portfolio__modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Fechar ficha técnica"
                            >
                                ✕
                            </button>

                            <div className="portfolio__modal-image-wrap">
                                <ImagePlaceholder
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    aspectRatio="16/9"
                                    label={selectedProject.title}
                                    size="lg"
                                />
                            </div>

                            <div className="portfolio__modal-content">
                                <div className="portfolio__modal-header">
                                    <div>
                                        <span className="portfolio__modal-category">{selectedProject.category} · {selectedProject.year}</span>
                                        <h2 className="portfolio__modal-title">{selectedProject.title}</h2>
                                        <p className="portfolio__modal-location">{selectedProject.location}</p>
                                    </div>
                                    <span className="portfolio__modal-area">{selectedProject.area}</span>
                                </div>

                                <div className="portfolio__modal-divider" />

                                <p className="portfolio__modal-desc">{selectedProject.description}</p>

                                <div className="portfolio__modal-specs-section">
                                    <span className="portfolio__modal-specs-title">Especificidades Técnicas & Materiais</span>
                                    <div className="portfolio__modal-tags">
                                        {selectedProject.features.map((f) => (
                                            <span key={f} className="portfolio__modal-tag">{f}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="portfolio__modal-cta">
                                    <a
                                        href="#contacto"
                                        onClick={() => setSelectedProject(null)}
                                        className="btn-pill btn-pill--primary"
                                    >
                                        Consultar Sobre Obra Semelhante
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
