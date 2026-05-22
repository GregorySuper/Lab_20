import teamMembers from '../data/team'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

function Team() {
  const { language, t } = useLanguage()

  return (
    <section className="container page-section">
      <h2 className="section-title">{t.titles.team}</h2>
      <p className="section-lead">{t.teamLead}</p>

      <div className="cards-grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-card">
            {/* Вместо фотографии используем первую букву имени — так карточка
                выглядит аккуратно, пока нет реальных фото */}
            <div className="team-avatar">{member.name.charAt(0)}</div>
            <h3>{member.name}</h3>
            <p className="team-role">{t.roles[member.role]}</p>
            {/* Метку вида спорта показываем только если он указан */}
            {member.sport && <span className="sport-tag">{t.sports[member.sport]}</span>}
            <p className="team-about">{member.about[language]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team
