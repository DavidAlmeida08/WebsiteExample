import { useEffect, useState } from 'react';
import ImagePlaceholder from '../../../components/ui/ImagePlaceholder';
import { PROJECTS } from '../../../data/projects';
import './Hero.css';

const HERO_SLIDES = PROJECTS.filter((project) => project.image);

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null);
    const [isPlaying] = useState(true);
    const activeProject = HERO_SLIDES[activeIndex];
    const previousProject = previousIndex === null ? null : HERO_SLIDES[previousIndex];

    useEffect(() => {
        if (!isPlaying || HERO_SLIDES.length < 2) return;

        const timeoutId = window.setTimeout(() => {
            const nextIndex = (activeIndex + 1) % HERO_SLIDES.length;
            const nextProject = HERO_SLIDES[nextIndex];

            if (!nextProject?.image) {
                setPreviousIndex(activeIndex);
                setActiveIndex(nextIndex);
                return;
            }

            const preloadedImage = new window.Image();
            let hasAdvanced = false;
            const advanceSlide = () => {
                if (hasAdvanced) return;
                hasAdvanced = true;
                setPreviousIndex(activeIndex);
                setActiveIndex(nextIndex);
            };

            preloadedImage.onload = advanceSlide;
            preloadedImage.onerror = advanceSlide;
            preloadedImage.src = nextProject.image;

            if (preloadedImage.complete) advanceSlide();
        }, 3000);

        return () => window.clearTimeout(timeoutId);
    }, [activeIndex, isPlaying]);

    useEffect(() => {
        if (previousIndex === null) return;

        const timeoutId = window.setTimeout(() => setPreviousIndex(null), 1100);
        return () => window.clearTimeout(timeoutId);
    }, [previousIndex]);

    if (!activeProject) return null;

    return (
        <section className="hero" aria-label="Apresentação do Atelier">
            <div className="hero__container container">
                <div className="hero__showcase">
                    <div
                        className="hero__frame"
                        aria-roledescription="carousel"
                        aria-label="Projetos em destaque"
                    >
                        {previousProject && (
                            <div
                                key={`slide-${previousProject.id}`}
                                className="hero__slide hero__slide--outgoing"
                                aria-hidden="true"
                            >
                                <ImagePlaceholder
                                    src={previousProject.image}
                                    alt=""
                                    aspectRatio="16/9"
                                    label={previousProject.title}
                                    size="lg"
                                />
                            </div>
                        )}
                        <div
                            key={`slide-${activeProject.id}`}
                            className={`hero__slide ${previousProject ? 'hero__slide--entering' : 'hero__slide--visible'}`}
                        >
                            <ImagePlaceholder
                                src={activeProject.image}
                                alt={`${activeProject.title} - ${activeProject.category}, ${activeProject.location}`}
                                aspectRatio="16/9"
                                label={activeProject.title}
                                size="lg"
                            />
                        </div>
                        <div className="hero__frame-overlay">
                            <div className="hero__frame-copy">
                                {previousProject && (
                                    <div
                                        key={`caption-${previousProject.id}`}
                                        className="hero__frame-meta hero__frame-meta--outgoing"
                                        aria-hidden="true"
                                    >
                                        <span className="hero__frame-name">{previousProject.title}</span>
                                        <span className="hero__frame-detail">
                                            {previousProject.category} · {previousProject.location} · {previousProject.year}
                                        </span>
                                    </div>
                                )}
                                <div
                                    key={`caption-${activeProject.id}`}
                                    className={`hero__frame-meta ${previousProject ? 'hero__frame-meta--entering' : 'hero__frame-meta--visible'}`}
                                >
                                    <span className="hero__frame-name">{activeProject.title}</span>
                                    <span className="hero__frame-detail">
                                        {activeProject.category} · {activeProject.location} · {activeProject.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
