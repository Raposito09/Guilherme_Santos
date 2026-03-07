import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import emailjs from '@emailjs/browser'

// ⚠️ credencial do emailjs

const EMAILJS_SERVICE_ID = 'service_wmdcnb2'    // seu Service ID
const EMAILJS_TEMPLATE_ID = 'template_9df7ie9'  // seu Template ID  
const EMAILJS_PUBLIC_KEY = 'b1VOGOttgZBEWQ1oY'     // sua Public Key

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
    const { t } = useI18n()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<FormStatus>('idle')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        setStatus('sending')

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY,
            )
            setStatus('sent')
            formRef.current.reset()
            setTimeout(() => setStatus('idle'), 4000)
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    const buttonContent = () => {
        switch (status) {
            case 'sending':
                return (
                    <>
                        <Loader2 size={16} className="animate-spin" />
                        {t.contact.send}
                    </>
                )
            case 'sent':
                return (
                    <>
                        <CheckCircle2 size={16} />
                        {t.contact.sent}
                    </>
                )
            case 'error':
                return (
                    <>
                        <XCircle size={16} />
                        Erro
                    </>
                )
            default:
                return (
                    <>
                        <Send size={16} />
                        {t.contact.send}
                    </>
                )
        }
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
                        {t.contact.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        {t.contact.heading}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Form */}
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                                    {t.contact.name}
                                </label>
                                <input
                                    id="name"
                                    name="from_name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors"
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                                    {t.contact.email}
                                </label>
                                <input
                                    id="email"
                                    name="reply_to"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors"
                                    placeholder={t.contact.emailPlaceholder}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-gray-400 mb-1.5"
                                >
                                    {t.contact.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                    placeholder={t.contact.messagePlaceholder}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-lg transition-all duration-200 ${status === 'sent'
                                    ? 'bg-green-accent'
                                    : status === 'error'
                                        ? 'bg-red-500'
                                        : 'bg-accent hover:bg-accent-dark hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]'
                                    } disabled:opacity-70`}
                            >
                                {buttonContent()}
                            </button>
                        </form>

                        {/* Info */}
                        <div className="space-y-8">
                            <p className="text-gray-400 leading-relaxed">
                                {t.contact.info}
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="https://github.com/Raposito09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-dark-800 border border-dark-600/50 rounded-lg flex items-center justify-center group-hover:border-accent/50 transition-colors">
                                        <Github size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">GitHub</p>
                                        <p className="text-xs text-gray-500">github.com/Raposito09</p>
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
                                    href="mailto:guilhermesants8965@gmail.com"
                                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-dark-800 border border-dark-600/50 rounded-lg flex items-center justify-center group-hover:border-accent/50 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Email</p>
                                        <p className="text-xs text-gray-500">guilhermesants8965@gmail.com</p>
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
