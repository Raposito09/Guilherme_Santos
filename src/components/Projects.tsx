import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
    title: string
    description: string
    technologies: string[]
    features: string[]
    github: string
    demo?: string
}

const projects: Project[] = [
    {
        title: 'Customer Churn Prediction',
        description:
            'Machine learning model to predict customer churn using logistic regression and data preprocessing techniques.',
        technologies: ['Python', 'Pandas', 'Scikit-learn'],
        features: [
            'Data preprocessing',
            'Feature engineering',
            'Model training',
            'Accuracy evaluation',
        ],
        github: 'https://github.com/guilherme-santos/churn-prediction',
    },
    {
        title: 'Data Analysis Dashboard',
        description:
            'Data exploration and visualization project using Python and Power BI for actionable business insights.',
        technologies: ['Python', 'Power BI', 'Pandas', 'SQL'],
        features: [
            'Interactive dashboards',
            'Data cleaning pipeline',
            'Statistical analysis',
            'Visual storytelling',
        ],
        github: 'https://github.com/guilherme-santos/data-dashboard',
        demo: '#',
    },
    {
        title: 'Cloud API Deployment',
        description:
            'REST API deployed on AWS using Docker and Python, showcasing cloud infrastructure and containerization skills.',
        technologies: ['Python', 'AWS', 'Docker', 'Flask'],
        features: [
            'RESTful endpoints',
            'Docker containerization',
            'AWS deployment',
            'API documentation',
        ],
        github: 'https://github.com/guilherme-santos/cloud-api',
    },
]

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="projects" className="py-24 px-6">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        Projects
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        What I've Built
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 * i }}
                                className="group bg-dark-800 border border-dark-600/50 rounded-xl p-6 flex flex-col hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h4>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-accent transition-colors"
                                            aria-label={`${project.title} GitHub`}
                                        >
                                            <Github size={18} />
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-accent transition-colors"
                                                aria-label={`${project.title} Demo`}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <ul className="space-y-1">
                                        {project.features.map((f) => (
                                            <li
                                                key={f}
                                                className="text-xs text-gray-500 flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 bg-accent rounded-full" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-600/50">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
