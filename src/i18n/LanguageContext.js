import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

// Контекст хранит текущий язык и даёт доступ к переводам из любого компонента
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Язык по умолчанию — русский
  const [language, setLanguage] = useState('ru')

  // t — это объект с переводами для текущего языка
  const t = translations[language]

  // Переключение между русским и английским
  function toggleLanguage() {
    setLanguage(language === 'ru' ? 'en' : 'ru')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Удобный хук, чтобы не писать useContext(LanguageContext) в каждом компоненте
export function useLanguage() {
  return useContext(LanguageContext)
}
