import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Cloud, Database, Terminal } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function About() {
    const { t } = useI18n()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    const stats = [
        { icon: <Code2 size={20} />, label: t.about.stats.languages, value: '4+' },
        { icon: <Cloud size={20} />, label: t.about.stats.cloud, value: 'AWS' },
        { icon: <Database size={20} />, label: t.about.stats.data, value: '5+' },
        { icon: <Terminal size={20} />, label: t.about.stats.projects, value: '10+' },
    ]

    return (
        <section id="about" className="py-24 px-6">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        {t.about.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        {t.about.heading}
                    </h3>

                    <div className="grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-3 space-y-4">
                            <p
                                className="text-gray-300 leading-relaxed [&>b]:text-white [&>b]:font-medium"
                                dangerouslySetInnerHTML={{ __html: t.about.p1 }}
                            />
                            <p className="text-gray-400 leading-relaxed">{t.about.p2}</p>
                            <p className="text-gray-400 leading-relaxed">{t.about.p3}</p>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                    className="bg-dark-800 border border-dark-600/50 rounded-xl p-5 text-center hover:border-accent/30 transition-colors duration-300"
                                >
                                    <div className="text-accent mb-2 flex justify-center">{stat.icon}</div>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
