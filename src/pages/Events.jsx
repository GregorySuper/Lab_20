import { useState } from 'react'
import eventsList from '../data/events'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

function Events() {
  const { language, t } = useLanguage()

  // Выбранный вид спорта для фильтра ("Все" — показываем все мероприятия)
  const [selectedSport, setSelectedSport] = useState('Все')

  // Мероприятие, на которое пользователь записывается (для окна записи). null — окно закрыто.
  const [signUpEvent, setSignUpEvent] = useState(null)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [errorText, setErrorText] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)

  // Дата "2026-05-24" -> "24 мая" (название месяца берём из словаря по языку)
  function formatEventDate(dateString) {
    const parts = dateString.split('-')
    const day = Number(parts[2])
    const monthIndex = Number(parts[1]) - 1
    return day + ' ' + t.monthsGenitive[monthIndex]
  }

  // Собираем список видов спорта без повторов (храним русские ключи, показываем перевод)
  const sports = ['Все']
  eventsList.forEach((event) => {
    if (!sports.includes(event.sport)) {
      sports.push(event.sport)
    }
  })

  // Оставляем только мероприятия выбранного вида спорта
  const visibleEvents = eventsList
    .filter((event) => selectedSport === 'Все' || event.sport === selectedSport)
    .sort((firstEvent, secondEvent) => firstEvent.date.localeCompare(secondEvent.date))
  // Открываем окно записи на конкретное мероприятие и очищаем форму
  function openSignUp(event) {
    setSignUpEvent(event)
    setName('')
    setContact('')
    setErrorText('')
    setIsSignedUp(false)
  }

  function closeSignUp() {
    setSignUpEvent(null)
  }

  // Отправка формы записи. Без указанного контакта записаться нельзя.
  function handleSignUpSubmit(submitEvent) {
    submitEvent.preventDefault()
    if (name.trim() === '' || contact.trim() === '') {
      setErrorText(t.modal.error)
      return
    }
    setErrorText('')
    setIsSignedUp(true)
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">{t.titles.events}</h2>
      <p className="section-lead">{t.eventsLead}</p>

      {/* Кнопки фильтра по виду спорта */}
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

      {/* Окно записи появляется только после нажатия «Записаться» */}
      {signUpEvent && (
        <div className="modal-overlay" onClick={closeSignUp}>
          {/* Останавливаем всплытие, чтобы клик внутри окна его не закрывал */}
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
