import { Link } from 'react-router-dom'
import './pages.css'

// Эта страница показывается, когда пользователь зашёл по несуществующему адресу
function NotFound() {
  return (
    <section className="container not-found">
      <img src="/img/mascot.svg" alt="Маскот клуба" className="not-found-mascot" />
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">
        Такой страницы нет. Кажется, стая убежала не туда.
      </p>
      <Link to="/" className="action-button">Вернуться на главную</Link>
    </section>
  )
}

export default NotFound
