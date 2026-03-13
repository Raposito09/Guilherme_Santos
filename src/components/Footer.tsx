import { useI18n } from '../i18n/I18nContext'

export default function Footer() {
    const { t } = useI18n()

    return (
        <footer className="py-8 px-6 border-t border-dark-600/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Guilherme Santos. {t.footer.builtWith}
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Raposito09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/guilherme-pereira-santos-06007b2b5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:guilhermesants8965@gmail.com"
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
