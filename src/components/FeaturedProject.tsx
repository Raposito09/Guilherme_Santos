import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function FeaturedProject() {
    const { t } = useI18n()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="featured-project" className="py-24 px-6 bg-dark-800/30">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        {t.featured.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        {t.featured.heading}
                    </h3>

                    <div className="bg-dark-800 border border-dark-600/50 rounded-2xl overflow-hidden">
                        {/* Top bar */}
                        <div className="bg-dark-700 px-6 py-3 flex items-center gap-2 border-b border-dark-600/50">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-4 text-xs text-gray-500 font-mono">
                                customer-churn-prediction/
                            </span>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <h4 className="text-2xl md:text-3xl font-bold text-white">
                                    {t.featured.projectTitle}
                                </h4>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Raposito09/churn-prediction"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-accent transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accent transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left column */}
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                                            {t.featured.problem}
                                        </h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {t.featured.problemText}
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                                            {t.featured.solution}
                                        </h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {t.featured.solutionText}
                                        </p>
                                    </div>
                                </div>

                                {/* Right column */}
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                                            {t.featured.architecture}
                                        </h5>
                                        <div className="bg-dark-900/50 rounded-lg p-4 font-mono text-xs text-gray-400 space-y-1">
                                            <p>
                                                <span className="text-accent">Data Ingestion</span> → CSV / SQL
                                            </p>
                                            <p>
                                                <span className="text-accent">Preprocessing</span> → Pandas pipeline
                                            </p>
                                            <p>
                                                <span className="text-accent">Feature Eng.</span> → Encoding + scaling
                                            </p>
                                            <p>
                                                <span className="text-accent">Model</span> → Logistic Regression
                                            </p>
                                            <p>
                                                <span className="text-accent">Evaluation</span> → Accuracy, ROC-AUC
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                                            {t.featured.results}
                                        </h5>
                                        <div className="flex gap-6">
                                            <div>
                                                <p className="text-3xl font-bold text-white">92%</p>
                                                <p className="text-xs text-gray-500">{t.featured.accuracy}</p>
                                            </div>
                                            <div>
                                                <p className="text-3xl font-bold text-white">0.89</p>
                                                <p className="text-xs text-gray-500">ROC-AUC</p>
                                            </div>
                                            <div>
                                                <p className="text-3xl font-bold text-white">15+</p>
                                                <p className="text-xs text-gray-500">{t.featured.features}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-dark-600/50">
                                {['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib'].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
