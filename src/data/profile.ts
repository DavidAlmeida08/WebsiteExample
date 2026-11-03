import type { Profile } from '../types';

export const PROFILE: Profile = {
    name: 'Arquiteto',
    title: 'Arquiteto · OA 18420',
    shortBio:
        'Gabinete de arquitetura fundado no princípio da clareza espacial, rigor construtivo e diálogo atento com o lugar.',
    longBio: `Este website serve como demonstração de um dos produtos desenvolvidos por nós.

Criamos soluções web profissionais, modernas e personalizadas, adaptadas às necessidades de cada cliente. Criamos websites funcionais e intuitivos, que reforçam a presença digital e valorizam a imagem de cada negócio.`,
    philosophy: {
        heading: 'A luz constrói o espaço',
        pillars: [
            {
                icon: '01',
                title: 'Geometria & Silêncio',
                description:
                    'Procuramos a proporção essencial. A eliminação do supérfluo para permitir que a luz e o vazio revelem a arquitetura.',
            },
            {
                icon: '02',
                title: 'Verdade Construtiva',
                description:
                    'Betão, pedra maciça, madeira de poro aberto e aço escovado. Cada material expressa a sua textura e peso estrutural sem artifícios.',
            },
            {
                icon: '03',
                title: 'Permanência & Lugar',
                description:
                    'Edifícios pensados para perdurar décadas. Integramos sistemas passivos bioclimáticos e mão-de-obra artesanal portuguesa.',
            },
        ],
    },
    stats: [
        { value: '14', label: 'Anos de atelier' },
        { value: '62', label: 'Obras concluídas' },
        { value: '38.000 m²', label: 'Área construída' },
        { value: '8', label: 'Distinções nacionais' },
    ],
    milestones: [
        {
            year: '2009',
            title: 'FAUP & Basileia',
            description: 'Mestrado integrado em Arquitetura na FAUP. Colaboração em ateliê em Basileia.',
        },
        {
            year: '2012',
            title: 'Fundação do Atelier',
            description: 'Abertura do gabinete em Lisboa, com os primeiros projetos de habitação unifamiliar.',
        },
        {
            year: '2017',
            title: 'Menção de Reabilitação Urbana',
            description: 'Reconhecimento pelo restauro contemporâneo do Edifício das Olarias em Lisboa.',
        },
        {
            year: '2021',
            title: 'Atelier do Porto',
            description: 'Instalação do segundo polo de trabalho na Foz do Douro.',
        },
        {
            year: '2024',
            title: 'Projeto Sustentável do Ano',
            description: 'Nomeação com a Casa do Arco pela integração no parque natural de Sintra.',
        },
    ],
    portrait: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXoPf4UiFD9wRKIcFop0LEOVi0gm_3ozBls20gQs9Yg&s=10',
};

export const CONTACT_INFO = {
    address: 'Rua que não existe, 45, 3.º Dto.',
    city: '3530-257 Mangualde, Portugal',
    phone: '+351 926 384 022',
    email: 'email@email.pt',
    hours: 'Segunda a Sexta · 09h30 às 18h30',
    social: [
        { platform: 'Instagram', handle: '@anaferreira.arquitetura', url: '#' },
        { platform: 'LinkedIn', handle: 'Ana Ferreira Arquitectura', url: '#' },
        { platform: 'ArchDaily', handle: 'Atelier Ana Ferreira', url: '#' },
    ],
};
