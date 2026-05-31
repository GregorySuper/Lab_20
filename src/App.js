import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Team from './pages/Team'
import Calendar from './pages/Calendar'
import Events from './pages/Events'
import Contacts from './pages/Contacts'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/team" element={<Team />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
