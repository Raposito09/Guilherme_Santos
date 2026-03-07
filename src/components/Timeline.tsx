import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TimelineEntry {
    year: string
    title: string
    description: string
}

const entries: TimelineEntry[] = [
    {
        year: '2024',
        title: 'Foundation',
        description:
            'Started learning programming and technology fundamentals. Explored Python, algorithms, and basic data structures.',
    },
    {
        year: '2025',
        title: 'Growth',
        description:
            'Gained Help Desk experience and began cloud studies. Developed problem-solving and customer-facing technical skills.',
    },
    {
        year: '2026',
        title: 'Building',
        description:
            'Developing machine learning and cloud projects. Focused on data engineering, AWS, and scalable system design.',
    },
]

export default function Timeline() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="timeline" className="py-24 px-6 bg-dark-800/30">
            <div ref={ref} className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        Journey
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Career Progress
                    </h3>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-dark-600" />

                        <div className="space-y-12">
                            {entries.map((entry, i) => (
                                <motion.div
                                    key={entry.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 * i }}
                                    className={`relative flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent border-4 border-dark-900 z-10 mt-1.5" />

                                    {/* Content */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                                            {entry.year}
                                        </span>
                                        <h4 className="text-xl font-semibold text-white mb-2">
                                            {entry.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {entry.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
