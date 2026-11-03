export type ProjectCategory = 'Residencial' | 'Comercial' | 'Interiores' | 'Reabilitação';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    location: string;
    year: number;
    area: string;
    description: string;
    features: string[];
    imagePlaceholderCount: number;
    featured?: boolean;
    image?: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    details: string[];
}

export interface PhilosophyPillar {
    icon: string;
    title: string;
    description: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}

export interface Profile {
    name: string;
    title: string;
    shortBio: string;
    longBio: string;
    philosophy: {
        heading: string;
        pillars: PhilosophyPillar[];
    };
    stats: Stat[];
    milestones: Milestone[];
    portrait?: string;
}

export interface SocialLink {
    platform: string;
    handle: string;
    url: string;
}

export interface ContactInfo {
    address: string;
    city: string;
    phone: string;
    email: string;
    hours: string;
    social: SocialLink[];
}

export interface InquiryForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
