import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useI18n } from '../i18n/I18nContext'

interface TechItem {
    name: string
    level: number
}

interface TechCategory {
    titleKey: 'languages' | 'cloud' | 'data' | 'tools'
    icon: string
    items: TechItem[]
}

const categories: TechCategory[] = [
    {
        titleKey: 'languages',
        icon: '⟨/⟩',
        items: [
            { name: 'Python', level: 85 },
            { name: 'SQL', level: 80 },
            { name: 'JavaScript', level: 70 },
            { name: 'TypeScript', level: 65 },
        ],
    },
    {
        titleKey: 'cloud',
        icon: '☁',
        items: [
            { name: 'AWS', level: 60 },
            { name: 'Linux', level: 70 },
        ],
    },
    {
        titleKey: 'data',
        icon: '📊',
        items: [
            { name: 'Pandas', level: 80 },
            { name: 'NumPy', level: 75 },
            { name: 'Power BI', level: 70 },
        ],
    },
    {
        titleKey: 'tools',
        icon: '🛠',
        items: [
            { name: 'Git', level: 80 },
            { name: 'VS Code', level: 90 },
            { name: 'Excel', level: 75 },
        ],
    },
]

export default function TechStack() {
    const { t } = useI18n()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="tech-stack" className="py-24 px-6 bg-dark-800/30">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        {t.techStack.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        {t.techStack.heading}
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, catIdx) => (
                            <motion.div
                                key={cat.titleKey}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * catIdx }}
                                className="bg-dark-800 border border-dark-600/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">{cat.icon}</span>
                                    <h4 className="text-lg font-semibold text-white">
                                        {t.techStack.categories[cat.titleKey]}
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    {cat.items.map((item, itemIdx) => (
                                        <div key={item.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-300">{item.name}</span>
                                                <span className="text-xs text-gray-500">{item.level}%</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-dark-600 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${item.level}%` } : {}}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 0.2 * catIdx + 0.1 * itemIdx,
                                                        ease: 'easeOut',
                                                    }}
                                                />
                                            </div>
                                        </div>
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
