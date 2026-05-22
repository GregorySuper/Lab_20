import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import News from './pages/News'
import Team from './pages/Team'
import Calendar from './pages/Calendar'
import Events from './pages/Events'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

// Главный компонент. Шапка и подвал показываются всегда,
// а в центре через маршрутизацию меняется содержимое страницы.
function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/team" element={<Team />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Если адрес не совпал ни с одним маршрутом — показываем страницу 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
