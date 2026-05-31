import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

function Privacy() {
  const { t } = useLanguage()

  return (
    <section className="container page-section">
      <h2 className="section-title">{t.privacy.title}</h2>

      <div className="legal-page">
        <p className="legal-updated">{t.privacy.updated}</p>
        <p className="legal-intro">{t.privacy.intro}</p>

        {t.privacy.sections.map((section) => (
          <div key={section.heading} className="legal-section">
            <h3>{section.heading}</h3>
            <p>{section.text}</p>
          </div>
        ))}

        <p className="legal-note">{t.privacy.note}</p>
      </div>
    </section>
  )
}

export default Privacy
