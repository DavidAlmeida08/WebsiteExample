import ImagePlaceholder from '../../../components/ui/ImagePlaceholder';
import { PROFILE } from '../../../data/profile';
import './About.css';

export default function About() {
    const { name, title, longBio, portrait } = PROFILE;

    return (
        <section id="sobre" className="about" aria-label="Sobre a Arquiteta">
            <div className="container">
                {/* Header */}
                <div className="about__header">
                    <h2 className="section-headline">
                        O silêncio como matéria de projeto.
                    </h2>
                    <p className="section-subhead">
                        Recusamos modas e formalismos efémeros. Cada espaço nasce do diálogo atento com a topografia, a luz natural e a autenticidade dos materiais.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="about__bento">
                    {/* Bento Card 1: Portrait */}
                    <div className="about__bento-portrait">
                        <ImagePlaceholder
                            src={portrait}
                            alt={`Retrato de ${name}`}
                            aspectRatio="4/5"
                            label={`Retrato de ${name}`}
                            size="lg"
                        />
                        <div className="about__portrait-caption">
                            <span className="about__portrait-name">{name}</span>
                            <span className="about__portrait-title">{title}</span>
                        </div>
                    </div>

                    {/* Bento Card 2: Narrative */}
                    <div className="about__bento-narrative">
                        <span className="about__kicker">Apresentação</span>
                        <div className="about__bio-text">
                            {longBio.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
