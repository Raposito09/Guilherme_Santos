import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const dates = ['Mar 2026', 'Feb 2026', 'Jan 2026']
const tags = [
    ['Machine Learning', 'Python'],
    ['AWS', 'Docker', 'Python'],
    ['Data', 'Pandas'],
]

export default function Blog() {
    const { t } = useI18n()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="blog" className="py-24 px-6">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        {t.blog.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        {t.blog.heading}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {t.blog.posts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 * i }}
                                className="group bg-dark-800 border border-dark-600/50 rounded-xl p-6 flex flex-col hover:border-accent/30 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {dates[i]}
                                    </span>
                                    <span>·</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-3 flex items-start gap-2">
                                    {post.title}
                                    <ArrowUpRight
                                        size={16}
                                        className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                    />
                                </h4>

                                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-600/50">
                                    {tags[i].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
