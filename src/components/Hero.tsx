import { motion } from 'framer-motion'
import { Github, Linkedin, FileDown, ArrowDown } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

// Detecta automaticamente o primeiro PDF em src/assets/resumes/
const pdfFiles = import.meta.glob('../assets/resumes/*.pdf', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const resumeEntries = Object.entries(pdfFiles)
const resumeUrl = resumeEntries.length > 0
    ? resumeEntries[0][1] as string
    : '#'

export default function Hero() {
    const { t } = useI18n()

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Glow orb */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                        {t.hero.greeting}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                        Guilherme{' '}
                        <span className="bg-gradient-to-r from-accent to-purple-accent bg-clip-text text-transparent">
                            Santos
                        </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-400 font-light">
                        {t.hero.title}
                    </p>
                    <p className="mt-3 text-base text-gray-400/80 max-w-xl mx-auto leading-relaxed">
                        {t.hero.description}
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]"
                    >
                        <ArrowDown size={16} />
                        {t.hero.viewProjects}
                    </a>
                    <a
                        href={resumeUrl}
                        download
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-dark-600 hover:border-accent/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
                    >
                        <FileDown size={16} />
                        {t.hero.downloadResume}
                    </a>
                    <a
                        href="https://github.com/guilherme-santos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 border border-dark-600 hover:border-accent/50 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/guilherme-santos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 border border-dark-600 hover:border-accent/50 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
