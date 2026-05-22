import { useState } from 'react'
import './pages.css'

// Список секций для выпадающего списка в форме
const sections = ['Баскетбол', 'Волейбол', 'Футбол', 'Лёгкая атлетика', 'Плавание', 'Настольный теннис']

function Contacts() {
  // Отдельное состояние под каждое поле формы — так понятнее, что где хранится
  const [applicantName, setApplicantName] = useState('')
  const [contact, setContact] = useState('')
  const [chosenSection, setChosenSection] = useState(sections[0])
  const [message, setMessage] = useState('')

  // Текст ошибки и признак успешной отправки
  const [errorText, setErrorText] = useState('')
  const [isSent, setIsSent] = useState(false)

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault() // отменяем стандартную перезагрузку страницы

    // Простая проверка: имя и контакт обязательны
    if (applicantName.trim() === '' || contact.trim() === '') {
      setErrorText('Пожалуйста, заполните имя и контакт для связи.')
      return
    }

    // Если всё хорошо — показываем сообщение об успехе и очищаем форму
    setErrorText('')
    setIsSent(true)
    setApplicantName('')
    setContact('')
    setChosenSection(sections[0])
    setMessage('')
  }

  return (
    <section className="container page-section">
      <h2 className="section-title">Контакты</h2>

      <div className="contacts-layout">
        {/* Левая колонка — контактная информация клуба */}
        <div className="contacts-info">
          <h3>Спортивный клуб ЮФУ «Южная стая»</h3>
          <p>📍 г. Ростов-на-Дону, ул. Большая Садовая, 105/42</p>
          <p>📞 +7 (863) 000-00-00</p>
          <p>✉️ ssk@sfedu.ru</p>

          <h3 className="contacts-subheading">Мы в соцсетях</h3>
          <div className="contacts-socials">
            <a href="https://vk.com" target="_blank" rel="noreferrer">ВКонтакте</a>
            <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>

        {/* Правая колонка — форма заявки */}
        <div className="contacts-form-wrapper">
          <h3>Подать заявку в клуб</h3>

          {isSent ? (
            <p className="form-success">
              Спасибо, заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </p>
          ) : (
            <form className="application-form" onSubmit={handleSubmit}>
              <label>
                Имя
                <input
                  type="text"
                  value={applicantName}
                  onChange={(event) => setApplicantName(event.target.value)}
                  placeholder="Как вас зовут"
                />
              </label>

              <label>
                Контакт для связи
                <input
                  type="text"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  placeholder="Телефон, e-mail или ник в Telegram"
                />
              </label>

              <label>
                Интересующая секция
                <select
                  value={chosenSection}
                  onChange={(event) => setChosenSection(event.target.value)}
                >
                  {sections.map((section) => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </label>

              <label>
                Сообщение
                <textarea
                  rows="4"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Расскажите о своём опыте (необязательно)"
                ></textarea>
              </label>

              {/* Подсказка об ошибке появляется, только если поля не заполнены */}
              {errorText && <p className="form-error">{errorText}</p>}

              <button type="submit" className="action-button">Подать заявку</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacts
