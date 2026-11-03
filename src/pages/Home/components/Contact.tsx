import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { CONTACT_INFO } from '../../../data/profile';
import {
    MESSAGE_SERVICE_DISABLED_MESSAGE,
    MESSAGE_SERVICE_ENABLED,
    sendMessage,
} from '../../../services/messageService';
import type { InquiryForm, FormStatus } from '../../../types';
import './Contact.css';

const INITIAL_FORM: InquiryForm = {
    name: '',
    email: '',
    phone: '',
    subject: 'Habitação Unifamiliar',
    message: '',
};

const SUBJECT_OPTIONS = [
    'Habitação Unifamiliar',
    'Reabilitação de Património',
    'Projeto Comercial ou Sede',
    'Design de Interiores & Remodelação',
    'Estudo de Viabilidade / PIP',
    'Outro Assunto',
];

export default function Contact() {
    const [formData, setFormData] = useState<InquiryForm>(INITIAL_FORM);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [feedback, setFeedback] = useState<string>('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!MESSAGE_SERVICE_ENABLED) {
            setStatus('error');
            setFeedback(MESSAGE_SERVICE_DISABLED_MESSAGE);
            return;
        }

        setStatus('loading');
        setFeedback('');

        try {
            const result = await sendMessage(formData);
            if (result.success) {
                setStatus('success');
                setFeedback(result.message);
                setFormData(INITIAL_FORM);
            } else {
                setStatus('error');
                setFeedback(result.message);
            }
        } catch {
            setStatus('error');
            setFeedback('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }
    };

    return (
        <section id="contacto" className="contact" aria-label="Contacto e Formulário">
            <div className="container">
                {/* Header */}
                <div className="contact__header">
                    <h2 className="section-headline">
                        Cada obra nasce de uma conversa.
                    </h2>
                    <p className="section-subhead">
                        Partilhe a sua ideia ou necessidade connosco. Analisamos a viabilidade do terreno, enquadramento regulatório e programa funcional.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="contact__grid">
                    {/* Studio Info Card */}
                    <div className="contact__info-card">
                        <div>
                            <span className="contact__info-kicker">Atelier Principal</span>
                            <h3 className="contact__info-city">Mangualde</h3>
                            <p className="contact__info-address">
                                {CONTACT_INFO.address}<br />
                                {CONTACT_INFO.city}
                            </p>
                        </div>

                        <div className="contact__info-row">
                            <span className="contact__info-label">Linha Geral</span>
                            <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="contact__info-link">
                                {CONTACT_INFO.phone}
                            </a>
                        </div>

                        <div className="contact__info-row">
                            <span className="contact__info-label">Email de Projetos</span>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="contact__info-link">
                                {CONTACT_INFO.email}
                            </a>
                        </div>

                        <div className="contact__info-row">
                            <span className="contact__info-label">Horário de Gabinete</span>
                            <span className="contact__info-val">{CONTACT_INFO.hours}</span>
                        </div>

                        <div className="contact__socials-wrap">
                            <span className="contact__info-label">Canais Oficiais</span>
                            <div className="contact__social-pills">
                                {CONTACT_INFO.social.map((s) => (
                                    <a
                                        key={s.platform}
                                        href={s.url}
                                        className="contact__social-pill"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {s.platform} ↗
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="contact__form-card">
                        <form onSubmit={handleSubmit} className="contact__form" noValidate>
                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label htmlFor="name" className="contact__label">
                                        Nome Completo <span className="contact__req">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Seu nome"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="contact__input"
                                    />
                                </div>

                                <div className="contact__field">
                                    <label htmlFor="email" className="contact__label">
                                        Endereço de Email <span className="contact__req">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="seu.email@exemplo.pt"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="contact__input"
                                    />
                                </div>
                            </div>

                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label htmlFor="phone" className="contact__label">
                                        Contacto Telefónico
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+351 900 000 000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="contact__input"
                                    />
                                </div>

                                <div className="contact__field">
                                    <label htmlFor="subject" className="contact__label">
                                        Tipologia de Obra <span className="contact__req">*</span>
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="contact__select"
                                    >
                                        {SUBJECT_OPTIONS.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="contact__field">
                                <label htmlFor="message" className="contact__label">
                                    Descrição do Projeto ou Terreno <span className="contact__req">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Indique a localização prevista, área estimada do terreno e os objetivos gerais para o projeto..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="contact__textarea"
                                />
                            </div>

                            {feedback && (
                                <div
                                    className={`contact__alert contact__alert--${status}`}
                                    role="alert"
                                >
                                    {feedback}
                                </div>
                            )}

                            <div className="contact__form-actions">
                                {!MESSAGE_SERVICE_ENABLED && (
                                    <p className="contact__service-notice" role="status">
                                        {MESSAGE_SERVICE_DISABLED_MESSAGE} Contacte-nos através de{' '}
                                        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={!MESSAGE_SERVICE_ENABLED || status === 'loading'}
                                    className="btn-pill btn-pill--primary"
                                >
                                    {status === 'loading' ? 'A enviar formulário...' : 'Enviar Mensagem'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
