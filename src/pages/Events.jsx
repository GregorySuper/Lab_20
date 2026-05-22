import { useState } from 'react'
import eventsList from '../data/events'
import './pages.css'

const monthNames = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
]

// Дата "2026-05-24" -> "24 мая"
function formatEventDate(dateString) {
  const parts = dateString.split('-')
  const day = Number(parts[2])
  const monthIndex = Number(parts[1]) - 1
  return day + ' ' + monthNames[monthIndex]
}

function Events() {
  // Выбранный вид спорта для фильтра. "Все" — показываем все мероприятия.
  const [selectedSport, setSelectedSport] = useState('Все')

  // Собираем список видов спорта без повторов, чтобы построить кнопки фильтра
  const sports = ['Все']
  eventsList.forEach((event) => {
    if (!sports.includes(event.sport)) {
      sports.push(event.sport)
    }
  })

  // Оставляем только мероприятия выбранного вида спорта
  const visibleEvents = eventsList.filter((event) => {
    return selectedSport === 'Все' || event.sport === selectedSport
  })

  // Обработчик нажатия на кнопку «Записаться»
  function handleSignUp(eventTitle) {
    alert('Вы записаны на мероприятие: ' + eventTitle + '. Мы свяжемся с вами!')
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">Мероприятия</h2>
      <p className="section-lead">
        Ближайшие турниры, тренировки и забеги клуба. Выберите вид спорта,
        чтобы отфильтровать список.
      </p>

      {/* Кнопки фильтра по виду спорта */}
      <div className="filter-buttons">
        {sports.map((sport) => (
          <button
            key={sport}
            type="button"
            className={selectedSport === sport ? 'filter-button active' : 'filter-button'}
            onClick={() => setSelectedSport(sport)}
          >
            {sport}
          </button>
        ))}
      </div>

      <div className="events-list">
        {visibleEvents.map((event) => (
          <article key={event.id} className="event-card">
            <div className="event-date-badge">{formatEventDate(event.date)}</div>
            <div className="event-body">
              <span className="sport-tag">{event.sport}</span>
              <h3>{event.title}</h3>
              <p className="event-place">📍 {event.place}</p>
              <p>{event.description}</p>
            </div>
            <button
              type="button"
              className="action-button"
              onClick={() => handleSignUp(event.title)}
            >
              Записаться
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Events
