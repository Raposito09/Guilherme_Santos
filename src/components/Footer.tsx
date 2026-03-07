export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-dark-600/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Guilherme Santos. Built with React &amp; Tailwind CSS.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/guilherme-santos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/guilherme-santos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:guilherme@email.com"
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
