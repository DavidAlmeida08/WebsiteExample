import type { Service } from '../types';

export const SERVICES: Service[] = [
    {
        id: 'concepcao',
        icon: '◻',
        title: 'Conceção Arquitetónica',
        description:
            'Do programa funcional à obra concluída — desenvolvemos projetos de arquitetura residencial, comercial e pública com rigor técnico e sensibilidade estética.',
        details: [
            'Estudo prévio e anteprojeto',
            'Projeto de execução completo',
            'Coordenação de especialidades',
            'Assistência técnica em obra',
        ],
    },
    {
        id: 'interiores',
        icon: '◈',
        title: 'Design de Interiores',
        description:
            'Espaços que expressam identidade. Criamos ambientes interiores coerentes, funcionais e belos — da paleta de materiais ao mobiliário desenhado à medida.',
        details: [
            'Conceito e moodboard',
            'Projeto de interiores e mobiliário',
            'Caderno de especificações',
            'Acompanhamento de execução',
        ],
    },
    {
        id: 'licenciamento',
        icon: '◉',
        title: 'Licenciamento & Urbanismo',
        description:
            'Navegamos a complexidade regulatória para que o seu projeto avance sem entraves. Tratamos de todo o processo junto das entidades licenciadoras.',
        details: [
            'Consulta prévia e viabilidade',
            'Pedidos de informação prévia',
            'Processo de licenciamento camarário',
            'Autorizações e comunicações prévias',
        ],
    },
    {
        id: 'gestao',
        icon: '◐',
        title: 'Gestão e Acompanhamento de Obra',
        description:
            'Presença permanente em obra para garantir que o projeto é executado com fidelidade ao design, dentro do prazo e do orçamento definido.',
        details: [
            'Direção e fiscalização de obra',
            'Gestão de empreiteiros e prazos',
            'Controlo de qualidade e custos',
            'Relatórios de progresso periódicos',
        ],
    },
];
