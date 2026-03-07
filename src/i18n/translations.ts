export type Language = 'pt' | 'en' | 'es'

export interface Translations {
    nav: {
        about: string
        techStack: string
        projects: string
        blog: string
        timeline: string
        contact: string
    }
    hero: {
        greeting: string
        title: string
        description: string
        viewProjects: string
        downloadResume: string
    }
    about: {
        label: string
        heading: string
        p1: string
        p2: string
        p3: string
        stats: {
            languages: string
            cloud: string
            data: string
            projects: string
        }
    }
    techStack: {
        label: string
        heading: string
        categories: {
            languages: string
            cloud: string
            data: string
            tools: string
        }
    }
    projects: {
        label: string
        heading: string
        items: {
            title: string
            description: string
            features: string[]
        }[]
    }
    featured: {
        label: string
        heading: string
        projectTitle: string
        problem: string
        problemText: string
        solution: string
        solutionText: string
        architecture: string
        results: string
        accuracy: string
        features: string
    }
    blog: {
        label: string
        heading: string
        posts: {
            title: string
            excerpt: string
            readTime: string
        }[]
    }
    timeline: {
        label: string
        heading: string
        entries: {
            title: string
            description: string
        }[]
    }
    contact: {
        label: string
        heading: string
        name: string
        namePlaceholder: string
        email: string
        emailPlaceholder: string
        message: string
        messagePlaceholder: string
        send: string
        sent: string
        info: string
    }
    footer: {
        builtWith: string
    }
}

export const translations: Record<Language, Translations> = {
    pt: {
        nav: {
            about: 'Sobre',
            techStack: 'Tecnologias',
            projects: 'Projetos',
            blog: 'Blog',
            timeline: 'Jornada',
            contact: 'Contato',
        },
        hero: {
            greeting: 'Olá, eu sou',
            title: 'Estudante de Ciência da Computação | Entusiasta de Cloud, Dados e Backend',
            description:
                'Apaixonado por construir sistemas eficientes, soluções orientadas a dados e aplicações em nuvem.',
            viewProjects: 'Ver Projetos',
            downloadResume: 'Baixar Currículo',
        },
        about: {
            label: 'Sobre',
            heading: 'Quem Eu Sou',
            p1: 'Sou um estudante de Ciência da Computação apaixonado por <b>computação em nuvem</b>, <b>engenharia de dados</b> e <b>aprendizado de máquina</b>. Gosto de transformar problemas complexos em soluções elegantes e escaláveis.',
            p2: 'Com experiência prática construindo projetos com Python, SQL e ferramentas modernas de análise de dados, estou focado em desenvolver aplicações práticas que resolvem problemas reais. Atualmente aprofundando meus conhecimentos em design de sistemas escaláveis, arquitetura em nuvem e desenvolvimento backend.',
            p3: 'Acredito em escrever código limpo e manutenível, aprendendo continuamente novas tecnologias. Meu objetivo é contribuir para equipes de engenharia impactantes que constroem produtos em escala.',
            stats: {
                languages: 'Linguagens',
                cloud: 'Plataformas Cloud',
                data: 'Ferramentas de Dados',
                projects: 'Projetos',
            },
        },
        techStack: {
            label: 'Tecnologias',
            heading: 'Tecnologias Que Utilizo',
            categories: {
                languages: 'Linguagens',
                cloud: 'Cloud',
                data: 'Dados',
                tools: 'Ferramentas',
            },
        },
        projects: {
            label: 'Projetos',
            heading: 'O Que Eu Construí',
            items: [
                {
                    title: 'Previsão de Churn de Clientes',
                    description:
                        'Modelo de machine learning para prever churn de clientes usando regressão logística e técnicas de pré-processamento de dados.',
                    features: [
                        'Pré-processamento de dados',
                        'Engenharia de features',
                        'Treinamento de modelo',
                        'Avaliação de acurácia',
                    ],
                },
                {
                    title: 'Dashboard de Análise de Dados',
                    description:
                        'Projeto de exploração e visualização de dados usando Python e Power BI para insights de negócios acionáveis.',
                    features: [
                        'Dashboards interativos',
                        'Pipeline de limpeza de dados',
                        'Análise estatística',
                        'Storytelling visual',
                    ],
                },
                {
                    title: 'Deploy de API na Cloud',
                    description:
                        'API REST implantada na AWS usando Docker e Python, demonstrando habilidades em infraestrutura cloud e containerização.',
                    features: [
                        'Endpoints RESTful',
                        'Containerização Docker',
                        'Deploy na AWS',
                        'Documentação da API',
                    ],
                },
            ],
        },
        featured: {
            label: 'Destaque',
            heading: 'Projeto em Destaque',
            projectTitle: 'Previsão de Churn de Clientes',
            problem: 'Problema',
            problemText:
                'Empresas perdem receita significativa devido ao churn de clientes. Identificar clientes em risco precocemente permite estratégias proativas de retenção, mas métodos tradicionais carecem de precisão preditiva.',
            solution: 'Solução',
            solutionText:
                'Construí um pipeline de machine learning usando regressão logística para prever churn de clientes com alta acurácia. Implementei fluxos completos de pré-processamento, engenharia de features e avaliação de modelo.',
            architecture: 'Arquitetura',
            results: 'Resultados',
            accuracy: 'Acurácia',
            features: 'Features',
        },
        blog: {
            label: 'Blog',
            heading: 'Notas de Engenharia',
            posts: [
                {
                    title: 'Entendendo Regressão Logística',
                    excerpt:
                        'Um mergulho profundo na regressão logística — a matemática por trás, quando usar e como implementar do zero em Python.',
                    readTime: '8 min de leitura',
                },
                {
                    title: 'Construindo Minha Primeira API Cloud',
                    excerpt:
                        'Guia passo a passo para construir, containerizar e implantar uma API REST na AWS usando Flask e Docker.',
                    readTime: '12 min de leitura',
                },
                {
                    title: 'Técnicas de Limpeza de Dados com Pandas',
                    excerpt:
                        'Dicas práticas e padrões para lidar com dados ausentes, duplicados e formatos inconsistentes em datasets reais.',
                    readTime: '6 min de leitura',
                },
            ],
        },
        timeline: {
            label: 'Jornada',
            heading: 'Progresso na Carreira',
            entries: [
                {
                    title: 'Fundação',
                    description:
                        'Comecei a aprender programação e fundamentos de tecnologia. Explorei Python, algoritmos e estruturas de dados básicas.',
                },
                {
                    title: 'Crescimento',
                    description:
                        'Adquiri experiência em Help Desk e iniciei estudos em cloud. Desenvolvi habilidades de resolução de problemas e atendimento técnico.',
                },
                {
                    title: 'Construção',
                    description:
                        'Desenvolvendo projetos de machine learning e cloud. Focado em engenharia de dados, AWS e design de sistemas escaláveis.',
                },
            ],
        },
        contact: {
            label: 'Contato',
            heading: 'Entre em Contato',
            name: 'Nome',
            namePlaceholder: 'Seu nome',
            email: 'Email',
            emailPlaceholder: 'seu@email.com',
            message: 'Mensagem',
            messagePlaceholder: 'Sua mensagem...',
            send: 'Enviar Mensagem',
            sent: 'Enviado!',
            info: 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua equipe. Fique à vontade para entrar em contato pelos canais abaixo.',
        },
        footer: {
            builtWith: 'Feito com React & Tailwind CSS.',
        },
    },

    en: {
        nav: {
            about: 'About',
            techStack: 'Tech Stack',
            projects: 'Projects',
            blog: 'Blog',
            timeline: 'Timeline',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hello, I'm",
            title: 'Computer Science Student | Cloud, Data & Backend Enthusiast',
            description:
                'Passionate about building efficient systems, data-driven solutions and cloud-based applications.',
            viewProjects: 'View Projects',
            downloadResume: 'Download Resume',
        },
        about: {
            label: 'About',
            heading: 'Who I Am',
            p1: "I'm a Computer Science student deeply passionate about <b>cloud computing</b>, <b>data engineering</b>, and <b>machine learning</b>. I thrive on turning complex problems into elegant, scalable solutions.",
            p2: "With hands-on experience building projects using Python, SQL, and modern data analysis tools, I'm focused on developing practical applications that solve real-world problems. Currently diving deeper into scalable system design, cloud architecture, and backend development.",
            p3: 'I believe in writing clean, maintainable code and continuously learning new technologies. My goal is to contribute to impactful engineering teams building products at scale.',
            stats: {
                languages: 'Languages',
                cloud: 'Cloud Platforms',
                data: 'Data Tools',
                projects: 'Projects',
            },
        },
        techStack: {
            label: 'Tech Stack',
            heading: 'Technologies I Work With',
            categories: {
                languages: 'Languages',
                cloud: 'Cloud',
                data: 'Data',
                tools: 'Tools',
            },
        },
        projects: {
            label: 'Projects',
            heading: "What I've Built",
            items: [
                {
                    title: 'Customer Churn Prediction',
                    description:
                        'Machine learning model to predict customer churn using logistic regression and data preprocessing techniques.',
                    features: [
                        'Data preprocessing',
                        'Feature engineering',
                        'Model training',
                        'Accuracy evaluation',
                    ],
                },
                {
                    title: 'Data Analysis Dashboard',
                    description:
                        'Data exploration and visualization project using Python and Power BI for actionable business insights.',
                    features: [
                        'Interactive dashboards',
                        'Data cleaning pipeline',
                        'Statistical analysis',
                        'Visual storytelling',
                    ],
                },
                {
                    title: 'Cloud API Deployment',
                    description:
                        'REST API deployed on AWS using Docker and Python, showcasing cloud infrastructure and containerization skills.',
                    features: [
                        'RESTful endpoints',
                        'Docker containerization',
                        'AWS deployment',
                        'API documentation',
                    ],
                },
            ],
        },
        featured: {
            label: 'Featured',
            heading: 'Highlighted Project',
            projectTitle: 'Customer Churn Prediction',
            problem: 'Problem',
            problemText:
                'Businesses lose significant revenue due to customer churn. Identifying at-risk customers early enables proactive retention strategies, but traditional methods lack predictive accuracy.',
            solution: 'Solution',
            solutionText:
                'Built a machine learning pipeline using logistic regression to predict customer churn with high accuracy. Implemented comprehensive data preprocessing, feature engineering, and model evaluation workflows.',
            architecture: 'Architecture',
            results: 'Results',
            accuracy: 'Accuracy',
            features: 'Features',
        },
        blog: {
            label: 'Blog',
            heading: 'Engineering Notes',
            posts: [
                {
                    title: 'Understanding Logistic Regression',
                    excerpt:
                        'A deep dive into logistic regression — the math behind it, when to use it, and how to implement it from scratch in Python.',
                    readTime: '8 min read',
                },
                {
                    title: 'Building My First Cloud API',
                    excerpt:
                        'Step-by-step guide on building, containerizing, and deploying a REST API on AWS using Flask and Docker.',
                    readTime: '12 min read',
                },
                {
                    title: 'Data Cleaning Techniques with Pandas',
                    excerpt:
                        'Practical tips and patterns for handling missing data, duplicates, and inconsistent formats in real-world datasets.',
                    readTime: '6 min read',
                },
            ],
        },
        timeline: {
            label: 'Journey',
            heading: 'Career Progress',
            entries: [
                {
                    title: 'Foundation',
                    description:
                        'Started learning programming and technology fundamentals. Explored Python, algorithms, and basic data structures.',
                },
                {
                    title: 'Growth',
                    description:
                        'Gained Help Desk experience and began cloud studies. Developed problem-solving and customer-facing technical skills.',
                },
                {
                    title: 'Building',
                    description:
                        'Developing machine learning and cloud projects. Focused on data engineering, AWS, and scalable system design.',
                },
            ],
        },
        contact: {
            label: 'Contact',
            heading: 'Get In Touch',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            message: 'Message',
            messagePlaceholder: 'Your message...',
            send: 'Send Message',
            sent: 'Sent!',
            info: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team. Feel free to reach out through any of the channels below.",
        },
        footer: {
            builtWith: 'Built with React & Tailwind CSS.',
        },
    },

    es: {
        nav: {
            about: 'Sobre Mí',
            techStack: 'Tecnologías',
            projects: 'Proyectos',
            blog: 'Blog',
            timeline: 'Trayectoria',
            contact: 'Contacto',
        },
        hero: {
            greeting: 'Hola, soy',
            title: 'Estudiante de Ciencias de la Computación | Entusiasta de Cloud, Datos y Backend',
            description:
                'Apasionado por construir sistemas eficientes, soluciones basadas en datos y aplicaciones en la nube.',
            viewProjects: 'Ver Proyectos',
            downloadResume: 'Descargar CV',
        },
        about: {
            label: 'Sobre Mí',
            heading: 'Quién Soy',
            p1: 'Soy un estudiante de Ciencias de la Computación apasionado por la <b>computación en la nube</b>, la <b>ingeniería de datos</b> y el <b>aprendizaje automático</b>. Me encanta transformar problemas complejos en soluciones elegantes y escalables.',
            p2: 'Con experiencia práctica construyendo proyectos con Python, SQL y herramientas modernas de análisis de datos, estoy enfocado en desarrollar aplicaciones prácticas que resuelven problemas reales. Actualmente profundizando en diseño de sistemas escalables, arquitectura cloud y desarrollo backend.',
            p3: 'Creo en escribir código limpio y mantenible, aprendiendo continuamente nuevas tecnologías. Mi objetivo es contribuir a equipos de ingeniería impactantes que construyen productos a escala.',
            stats: {
                languages: 'Lenguajes',
                cloud: 'Plataformas Cloud',
                data: 'Herramientas de Datos',
                projects: 'Proyectos',
            },
        },
        techStack: {
            label: 'Tecnologías',
            heading: 'Tecnologías Que Utilizo',
            categories: {
                languages: 'Lenguajes',
                cloud: 'Cloud',
                data: 'Datos',
                tools: 'Herramientas',
            },
        },
        projects: {
            label: 'Proyectos',
            heading: 'Lo Que He Construido',
            items: [
                {
                    title: 'Predicción de Abandono de Clientes',
                    description:
                        'Modelo de machine learning para predecir el abandono de clientes usando regresión logística y técnicas de preprocesamiento.',
                    features: [
                        'Preprocesamiento de datos',
                        'Ingeniería de features',
                        'Entrenamiento de modelo',
                        'Evaluación de precisión',
                    ],
                },
                {
                    title: 'Dashboard de Análisis de Datos',
                    description:
                        'Proyecto de exploración y visualización de datos usando Python y Power BI para insights de negocio accionables.',
                    features: [
                        'Dashboards interactivos',
                        'Pipeline de limpieza de datos',
                        'Análisis estadístico',
                        'Storytelling visual',
                    ],
                },
                {
                    title: 'Deploy de API en la Nube',
                    description:
                        'API REST desplegada en AWS usando Docker y Python, demostrando habilidades en infraestructura cloud y containerización.',
                    features: [
                        'Endpoints RESTful',
                        'Containerización Docker',
                        'Deploy en AWS',
                        'Documentación de API',
                    ],
                },
            ],
        },
        featured: {
            label: 'Destacado',
            heading: 'Proyecto Destacado',
            projectTitle: 'Predicción de Abandono de Clientes',
            problem: 'Problema',
            problemText:
                'Las empresas pierden ingresos significativos debido al abandono de clientes. Identificar clientes en riesgo tempranamente permite estrategias proactivas de retención, pero los métodos tradicionales carecen de precisión predictiva.',
            solution: 'Solución',
            solutionText:
                'Construí un pipeline de machine learning usando regresión logística para predecir el abandono de clientes con alta precisión. Implementé flujos completos de preprocesamiento, ingeniería de features y evaluación de modelo.',
            architecture: 'Arquitectura',
            results: 'Resultados',
            accuracy: 'Precisión',
            features: 'Features',
        },
        blog: {
            label: 'Blog',
            heading: 'Notas de Ingeniería',
            posts: [
                {
                    title: 'Entendiendo la Regresión Logística',
                    excerpt:
                        'Una inmersión profunda en la regresión logística — la matemática detrás, cuándo usarla y cómo implementarla desde cero en Python.',
                    readTime: '8 min de lectura',
                },
                {
                    title: 'Construyendo Mi Primera API Cloud',
                    excerpt:
                        'Guía paso a paso para construir, containerizar y desplegar una API REST en AWS usando Flask y Docker.',
                    readTime: '12 min de lectura',
                },
                {
                    title: 'Técnicas de Limpieza de Datos con Pandas',
                    excerpt:
                        'Consejos prácticos y patrones para manejar datos faltantes, duplicados y formatos inconsistentes en datasets reales.',
                    readTime: '6 min de lectura',
                },
            ],
        },
        timeline: {
            label: 'Trayectoria',
            heading: 'Progreso Profesional',
            entries: [
                {
                    title: 'Base',
                    description:
                        'Comencé a aprender programación y fundamentos de tecnología. Exploré Python, algoritmos y estructuras de datos básicas.',
                },
                {
                    title: 'Crecimiento',
                    description:
                        'Adquirí experiencia en Help Desk e inicié estudios en cloud. Desarrollé habilidades de resolución de problemas y atención técnica.',
                },
                {
                    title: 'Construcción',
                    description:
                        'Desarrollando proyectos de machine learning y cloud. Enfocado en ingeniería de datos, AWS y diseño de sistemas escalables.',
                },
            ],
        },
        contact: {
            label: 'Contacto',
            heading: 'Ponte en Contacto',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            email: 'Email',
            emailPlaceholder: 'tu@email.com',
            message: 'Mensaje',
            messagePlaceholder: 'Tu mensaje...',
            send: 'Enviar Mensaje',
            sent: '¡Enviado!',
            info: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para formar parte de tu equipo. No dudes en contactarme por cualquiera de los canales de abajo.',
        },
        footer: {
            builtWith: 'Hecho con React & Tailwind CSS.',
        },
    },
}
