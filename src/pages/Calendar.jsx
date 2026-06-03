import { useState } from 'react'
import eventsList from '../data/events'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

function makeDateKey(year, month, day) {
  const monthPart = String(month + 1).padStart(2, '0')
  const dayPart = String(day).padStart(2, '0')
  return year + '-' + monthPart + '-' + dayPart
}

function Calendar() {
  const { language, t } = useLanguage()

  const today = new Date()   
  const [shownDate, setShownDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDay, setSelectedDay] = useState(null)

  const year = shownDate.getFullYear()
  const month = shownDate.getMonth()

  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // в JS воскресенье = 0, пересчитываем на неделю с понедельника (понедельник = 0)
  let firstWeekDay = new Date(year, month, 1).getDay()
  firstWeekDay = firstWeekDay === 0 ? 6 : firstWeekDay - 1

  function goToPreviousMonth() {
    setShownDate(new Date(year, month - 1, 1))
    setSelectedDay(null)
  }
  function goToNextMonth() {
    setShownDate(new Date(year, month + 1, 1))
    setSelectedDay(null)
  }

  function hasEvents(day) {
    const key = makeDateKey(year, month, day)
    return eventsList.some((event) => event.date === key)
  }

  const selectedEvents = eventsList.filter((event) => event.date === selectedDay)

  // сначала пустые ячейки до первого числа, затем сами числа месяца
  const cells = []
  for (let i = 0; i < firstWeekDay; i++) {
    cells.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day)
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">{t.titles.calendar}</h2>
      <p className="section-lead">{t.calendarLead}</p>

      <div className="calendar-layout">
      <div className="calendar">
        <div className="calendar-header">
          <button type="button" onClick={goToPreviousMonth} aria-label="Предыдущий месяц">‹</button>
          <span className="calendar-month">{t.months[month]} {year}</span>
          <button type="button" onClick={goToNextMonth} aria-label="Следующий месяц">›</button>
        </div>

        <div className="calendar-grid">
          {t.weekDays.map((weekDay) => (
            <div key={weekDay} className="calendar-weekday">{weekDay}</div>
          ))}

          {cells.map((day, index) => {
            if (day === null) {
              return <div key={'empty-' + index} className="calendar-cell empty"></div>
            }
            const dateKey = makeDateKey(year, month, day)
            const dayHasEvents = hasEvents(day)
            let cellClass = 'calendar-cell'
            if (dayHasEvents) cellClass += ' has-events'
            if (selectedDay === dateKey) cellClass += ' selected'
            return (
              <button
                key={dateKey}
                type="button"
                className={cellClass}
                onClick={() => setSelectedDay(dateKey)}
              >
                {day}
                {dayHasEvents && <span className="event-dot"></span>}
              </button>
            )
          })}
        </div>
      </div>

      {selectedDay && (
        <div className="calendar-day-events">
          {selectedEvents.length > 0 ? (
            selectedEvents.map((event) => (
              <div key={event.id} className="day-event">
                <span className="sport-tag">{t.sports[event.sport]}</span>
                <h3>{event.title[language]}</h3>
                <p>{event.place[language]} — {event.description[language]}</p>
              </div>
            ))
          ) : (
            <p className="no-events">{t.noEvents}</p>
          )}
        </div>
      )}
      </div>
    </section>
  )
}

export default Calendar
