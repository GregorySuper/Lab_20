import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // запоминаем выбранный язык в localStorage, чтобы он не сбрасывался при перезагрузке
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage === 'en' || savedLanguage === 'ru' ? savedLanguage : 'ru'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = translations[language]

  function toggleLanguage() {
    setLanguage(language === 'ru' ? 'en' : 'ru')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
