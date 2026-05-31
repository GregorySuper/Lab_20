import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

const sections = ['Волейбол', 'Баскетбол', 'Мини-футбол', 'Плавание', 'Настольный теннис', 'Бадминтон', 'Шахматы', 'Гиревой спорт']

function Contacts() {
  const { t } = useLanguage()

  const [applicantName, setApplicantName] = useState('')
  const [contact, setContact] = useState('')
  const [chosenSection, setChosenSection] = useState(sections[0])
  const [message, setMessage] = useState('')
  const [consentGiven, setConsentGiven] = useState(false)

  const [errorText, setErrorText] = useState('')
  const [isSent, setIsSent] = useState(false)

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault()

    if (applicantName.trim() === '' || contact.trim() === '') {
      setErrorText(t.contacts.error)
      return
    }

    if (!consentGiven) {
      setErrorText(t.consent.error)
      return
    }

    setErrorText('')
    setIsSent(true)
    setApplicantName('')
    setContact('')
    setChosenSection(sections[0])
    setMessage('')
    setConsentGiven(false)
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">{t.titles.contacts}</h2>

      <div className="contacts-layout">
        <div className="contacts-info">
          <h3>{t.contacts.clubName}</h3>
          <p className="contacts-department">{t.contacts.department}</p>
          <p>📍 {t.contacts.address}</p>
          <p>📞 +7 (863) 218-40-00 (доб. 10705)</p>
          <p>✉️ <a href="mailto:revenko@sfedu.ru">revenko@sfedu.ru</a></p>

          <h3 className="contacts-subheading">{t.contacts.socialsHeading}</h3>
          <div className="contacts-socials">
            <a href="https://vk.com/ssc_sfedu" target="_blank" rel="noreferrer">ВКонтакте</a>
            <a href="https://t.me/ssc_sfedu" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>

        <div className="contacts-form-wrapper">
          <h3>{t.contacts.formHeading}</h3>

          {isSent ? (
            <p className="form-success">{t.contacts.success}</p>
          ) : (
            <form className="application-form" onSubmit={handleSubmit}>
              <label>
                {t.contacts.name}
                <input
                  type="text"
                  value={applicantName}
                  onChange={(event) => setApplicantName(event.target.value)}
                  placeholder={t.contacts.namePlaceholder}
                />
              </label>

              <label>
                {t.contacts.contact}
                <input
                  type="text"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  placeholder={t.contacts.contactPlaceholder}
                />
              </label>

              <label>
                {t.contacts.section}
                <select
                  value={chosenSection}
                  onChange={(event) => setChosenSection(event.target.value)}
                >
                  {sections.map((section) => (
                    <option key={section} value={section}>{t.sports[section]}</option>
                  ))}
                </select>
              </label>

              <label>
                {t.contacts.message}
                <textarea
                  rows="4"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t.contacts.messagePlaceholder}
                ></textarea>
              </label>

              <label className="form-consent">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(event) => setConsentGiven(event.target.checked)}
                />
                <span>
                  {t.consent.before}
                  <Link to="/privacy" target="_blank">{t.consent.link}</Link>
                  {t.consent.after}
                </span>
              </label>

              {errorText && <p className="form-error">{errorText}</p>}

              <button type="submit" className="action-button">{t.contacts.submit}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacts
