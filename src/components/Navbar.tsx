import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import type { Language } from '../i18n/translations'

const langLabels: Record<Language, string> = {
    pt: 'PT',
    en: 'EN',
    es: 'ES',
}

const langFullNames: Record<Language, string> = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
}

export default function Navbar() {
    const { lang, t, setLang } = useI18n()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [langMenuOpen, setLangMenuOpen] = useState(false)

    const navLinks = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.techStack, href: '#tech-stack' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.blog, href: '#blog' },
        { label: t.nav.timeline, href: '#timeline' },
        { label: t.nav.contact, href: '#contact' },
    ]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close lang menu when clicking outside
    useEffect(() => {
        const handleClick = () => setLangMenuOpen(false)
        if (langMenuOpen) {
            document.addEventListener('click', handleClick)
            return () => document.removeEventListener('click', handleClick)
        }
    }, [langMenuOpen])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark-900/80 backdrop-blur-xl border-b border-dark-600/50'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold text-white tracking-tight hover:text-accent transition-colors"
                >
                    GS<span className="text-accent">.</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setLangMenuOpen(!langMenuOpen)
                            }}
                            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 px-2.5 py-1.5 border border-dark-600/50 rounded-lg hover:border-accent/50"
                        >
                            <Globe size={14} />
                            {langLabels[lang]}
                        </button>

                        {langMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 bg-dark-800 border border-dark-600/50 rounded-lg overflow-hidden shadow-xl min-w-[140px]">
                                {(Object.keys(langLabels) as Language[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => {
                                            setLang(l)
                                            setLangMenuOpen(false)
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${lang === l
                                                ? 'bg-accent/10 text-accent'
                                                : 'text-gray-400 hover:bg-dark-700 hover:text-white'
                                            }`}
                                    >
                                        {langFullNames[l]}
                                        <span className="text-xs opacity-60">{langLabels[l]}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    {/* Mobile language switcher */}
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setLangMenuOpen(!langMenuOpen)
                            }}
                            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1.5 border border-dark-600/50 rounded-lg"
                        >
                            <Globe size={12} />
                            {langLabels[lang]}
                        </button>
                        {langMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 bg-dark-800 border border-dark-600/50 rounded-lg overflow-hidden shadow-xl min-w-[130px] z-50">
                                {(Object.keys(langLabels) as Language[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => {
                                            setLang(l)
                                            setLangMenuOpen(false)
                                        }}
                                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${lang === l
                                                ? 'bg-accent/10 text-accent'
                                                : 'text-gray-400 hover:bg-dark-700 hover:text-white'
                                            }`}
                                    >
                                        {langFullNames[l]}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-dark-600/50">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
