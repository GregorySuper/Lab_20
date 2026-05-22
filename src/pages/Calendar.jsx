import { useState } from 'react'
import eventsList from '../data/events'
import './pages.css'

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
]
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// Собираем ключ даты вида "2026-05-24" из года, месяца и дня с ведущими нулями
function makeDateKey(year, month, day) {
  const monthPart = String(month + 1).padStart(2, '0')
  const dayPart = String(day).padStart(2, '0')
  return year + '-' + monthPart + '-' + dayPart
}

function Calendar() {
  // Месяц, который сейчас показан в календаре (по умолчанию — текущий)
  const [shownDate, setShownDate] = useState(new Date(2026, 4, 1))
  // Дата, выбранная пользователем (по ней показываем мероприятия снизу)
  const [selectedDay, setSelectedDay] = useState(null)

  const year = shownDate.getFullYear()
  const month = shownDate.getMonth()

  // Сколько дней в месяце
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // День недели первого числа (в JS воскресенье = 0, поэтому пересчитываем на понедельник = 0)
  let firstWeekDay = new Date(year, month, 1).getDay()
  firstWeekDay = firstWeekDay === 0 ? 6 : firstWeekDay - 1

  // Переключение на предыдущий и следующий месяц
  function goToPreviousMonth() {
    setShownDate(new Date(year, month - 1, 1))
    setSelectedDay(null)
  }
  function goToNextMonth() {
    setShownDate(new Date(year, month + 1, 1))
    setSelectedDay(null)
  }

  // Проверяем, есть ли в этот день хотя бы одно мероприятие
  function hasEvents(day) {
    const key = makeDateKey(year, month, day)
    return eventsList.some((event) => event.date === key)
  }

  // Мероприятия выбранного дня
  const selectedEvents = eventsList.filter((event) => event.date === selectedDay)

  // Собираем массив ячеек: сначала пустые (сдвиг до первого числа), потом числа месяца
  const cells = []
  for (let i = 0; i < firstWeekDay; i++) {
    cells.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day)
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">Календарь мероприятий</h2>
      <p className="section-lead">
        Дни с мероприятиями отмечены точкой. Нажмите на дату, чтобы увидеть,
        что запланировано.
      </p>

      <div className="calendar">
        <div className="calendar-header">
          <button type="button" onClick={goToPreviousMonth} aria-label="Предыдущий месяц">‹</button>
          <span className="calendar-month">{monthNames[month]} {year}</span>
          <button type="button" onClick={goToNextMonth} aria-label="Следующий месяц">›</button>
        </div>

        <div className="calendar-grid">
          {weekDays.map((weekDay) => (
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

      {/* Список мероприятий выбранного дня */}
      {selectedDay && (
        <div className="calendar-day-events">
          {selectedEvents.length > 0 ? (
            selectedEvents.map((event) => (
              <div key={event.id} className="day-event">
                <span className="sport-tag">{event.sport}</span>
                <h3>{event.title}</h3>
                <p>{event.place} — {event.description}</p>
              </div>
            ))
          ) : (
            <p className="no-events">На этот день мероприятий нет.</p>
          )}
        </div>
      )}
    </section>
  )
}

export default Calendar
