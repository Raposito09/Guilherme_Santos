import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Language, type Translations } from './translations'

interface I18nContextType {
    lang: Language
    t: Translations
    setLang: (lang: Language) => void
}

const I18nContext = createContext<I18nContextType>({
    lang: 'pt',
    t: translations.pt,
    setLang: () => { },
})

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('pt')

    return (
        <I18nContext.Provider value={{ lang, t: translations[lang], setLang }}>
            {children}
        </I18nContext.Provider>
    )
}

export function useI18n() {
    return useContext(I18nContext)
}
