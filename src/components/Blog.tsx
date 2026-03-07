import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Calendar } from 'lucide-react'

interface BlogPost {
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
}

const posts: BlogPost[] = [
    {
        title: 'Understanding Logistic Regression',
        excerpt:
            'A deep dive into logistic regression — the math behind it, when to use it, and how to implement it from scratch in Python.',
        date: 'Mar 2026',
        readTime: '8 min read',
        tags: ['Machine Learning', 'Python'],
    },
    {
        title: 'Building My First Cloud API',
        excerpt:
            'Step-by-step guide on building, containerizing, and deploying a REST API on AWS using Flask and Docker.',
        date: 'Feb 2026',
        readTime: '12 min read',
        tags: ['AWS', 'Docker', 'Python'],
    },
    {
        title: 'Data Cleaning Techniques with Pandas',
        excerpt:
            'Practical tips and patterns for handling missing data, duplicates, and inconsistent formats in real-world datasets.',
        date: 'Jan 2026',
        readTime: '6 min read',
        tags: ['Data', 'Pandas'],
    },
]

export default function Blog() {
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
                        Blog
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Engineering Notes
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 * i }}
                                className="group bg-dark-800 border border-dark-600/50 rounded-xl p-6 flex flex-col hover:border-accent/30 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {post.date}
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
                                    {post.tags.map((tag) => (
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
