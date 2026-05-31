import { useState } from 'react'
import { Link } from 'react-router-dom'
import eventsList from '../data/events'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

function Events() {
  const { language, t } = useLanguage()

  const [selectedSport, setSelectedSport] = useState('Все')

  // мероприятие, на которое записываемся; null — окно закрыто
  const [signUpEvent, setSignUpEvent] = useState(null)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [consentGiven, setConsentGiven] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)

  // "2026-05-24" -> "24 мая"
  function formatEventDate(dateString) {
    const parts = dateString.split('-')
    const day = Number(parts[2])
    const monthIndex = Number(parts[1]) - 1
    return day + ' ' + t.monthsGenitive[monthIndex]
  }

  // список видов спорта без повторов
  const sports = ['Все']
  eventsList.forEach((event) => {
    if (!sports.includes(event.sport)) {
      sports.push(event.sport)
    }
  })

  // даты ГГГГ-ММ-ДД сравниваются как строки — это совпадает с хронологией
  const visibleEvents = eventsList
    .filter((event) => selectedSport === 'Все' || event.sport === selectedSport)
    .sort((firstEvent, secondEvent) => firstEvent.date.localeCompare(secondEvent.date))

  function openSignUp(event) {
    setSignUpEvent(event)
    setName('')
    setContact('')
    setConsentGiven(false)
    setErrorText('')
    setIsSignedUp(false)
  }

  function closeSignUp() {
    setSignUpEvent(null)
  }

  function handleSignUpSubmit(submitEvent) {
    submitEvent.preventDefault()
    if (name.trim() === '' || contact.trim() === '') {
      setErrorText(t.modal.error)
      return
    }
    if (!consentGiven) {
      setErrorText(t.consent.error)
      return
    }
    setErrorText('')
    setIsSignedUp(true)
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">{t.titles.events}</h2>
      <p className="section-lead">{t.eventsLead}</p>

      <div className="filter-buttons">
        {sports.map((sport) => (
          <button
            key={sport}
            type="button"
            className={selectedSport === sport ? 'filter-button active' : 'filter-button'}
            onClick={() => setSelectedSport(sport)}
          >
            {sport === 'Все' ? t.all : t.sports[sport]}
          </button>
        ))}
      </div>

      <div className="events-list">
        {visibleEvents.map((event) => (
          <article key={event.id} className="event-card">
            <div className="event-date-badge">{formatEventDate(event.date)}</div>
            <div className="event-body">
              <span className="sport-tag">{t.sports[event.sport]}</span>
              <h3>{event.title[language]}</h3>
              <p className="event-place">📍 {event.place[language]}</p>
              <p>{event.description[language]}</p>
            </div>
            <button
              type="button"
              className="action-button"
              onClick={() => openSignUp(event)}
            >
              {t.signUp}
            </button>
          </article>
        ))}
      </div>

      {signUpEvent && (
        <div className="modal-overlay" onClick={closeSignUp}>
          {/* клик по самому окну не должен закрывать его */}
          <div className="modal-window" onClick={(clickEvent) => clickEvent.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeSignUp} aria-label="Закрыть">×</button>

            {isSignedUp ? (
              <div className="modal-result">
                <h3>{t.modal.successTitle}</h3>
                <p>{t.modal.successText(signUpEvent.title[language])}</p>
                <button type="button" className="action-button" onClick={closeSignUp}>{t.modal.done}</button>
              </div>
            ) : (
              <form className="application-form" onSubmit={handleSignUpSubmit}>
                <h3>{t.modal.title}</h3>
                <p className="modal-event-title">{signUpEvent.title[language]}</p>

                <label>
                  {t.modal.name}
                  <input
                    type="text"
                    value={name}
                    onChange={(inputEvent) => setName(inputEvent.target.value)}
                    placeholder={t.modal.namePlaceholder}
                  />
                </label>

                <label>
                  {t.modal.contact}
                  <input
                    type="text"
                    value={contact}
                    onChange={(inputEvent) => setContact(inputEvent.target.value)}
                    placeholder={t.modal.contactPlaceholder}
                  />
                </label>

                <label className="form-consent">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(checkboxEvent) => setConsentGiven(checkboxEvent.target.checked)}
                  />
                  <span>
                    {t.consent.before}
                    <Link to="/privacy" target="_blank">{t.consent.link}</Link>
                    {t.consent.after}
                  </span>
                </label>

                {errorText && <p className="form-error">{errorText}</p>}

                <button type="submit" className="action-button">{t.modal.submit}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Events
