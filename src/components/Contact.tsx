import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section id="contact" className="py-24 px-6">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                        Contact
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Get In Touch
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-gray-400 mb-1.5"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]"
                            >
                                <Send size={16} />
                                {submitted ? 'Sent!' : 'Send Message'}
                            </button>
                        </form>

                        {/* Info */}
                        <div className="space-y-8">
                            <p className="text-gray-400 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or
                                opportunities to be part of your team. Feel free to reach out
                                through any of the channels below.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="https://github.com/guilherme-santos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-dark-800 border border-dark-600/50 rounded-lg flex items-center justify-center group-hover:border-accent/50 transition-colors">
                                        <Github size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">GitHub</p>
                                        <p className="text-xs text-gray-500">github.com/guilherme-santos</p>
                                    </div>
                                </a>

                                <a
                                    href="https://linkedin.com/in/guilherme-santos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-dark-800 border border-dark-600/50 rounded-lg flex items-center justify-center group-hover:border-accent/50 transition-colors">
                                        <Linkedin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">LinkedIn</p>
                                        <p className="text-xs text-gray-500">linkedin.com/in/guilherme-santos</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:guilherme@email.com"
                                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-dark-800 border border-dark-600/50 rounded-lg flex items-center justify-center group-hover:border-accent/50 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Email</p>
                                        <p className="text-xs text-gray-500">guilherme@email.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
