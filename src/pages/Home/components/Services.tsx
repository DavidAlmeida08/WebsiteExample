import './Services.css';

export default function Services() {
    return (
        <section id="servicos" className="services" aria-label="Especialidades do Atelier">
            <div className="container">
                {/* Header */}
                <div className="services__header">

                    <h2 className="section-headline">
                        O nosso compromisso.
                    </h2>
                    <p className="section-subhead">
                        Acompanhamento integral em todas as fases do processo construtivo. Transformamos visão arquitetónica em realidade tangível com total controlo orçamental.
                    </p>
                </div>


                {/* Guarantees Bar */}
                <div className="services__commitments">
                    <div className="services__commitment-item">
                        <h4 className="services__commitment-title">Rigor Orçamental</h4>
                        <p className="services__commitment-desc">Medições detalhadas e mapa de quantidades rigoroso para evitar desvios durante a empreitada.</p>
                    </div>
                    <div className="services__commitment-item">
                        <h4 className="services__commitment-title">Coordenação Total</h4>
                        <p className="services__commitment-desc">Compatibilização 3D de todas as especialidades de engenharia antes de avançar para estaleiro.</p>
                    </div>
                    <div className="services__commitment-item">
                        <h4 className="services__commitment-title">Assistência Permanente</h4>
                        <p className="services__commitment-desc">Visitas semanais de acompanhamento e fiscalização até à receção final da obra.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
