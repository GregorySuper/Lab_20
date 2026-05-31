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
            <div className="team-avatar">
              {member.photo
                ? <img src={member.photo} alt={member.name} />
                : member.name.charAt(0)}
            </div>
            <h3>{member.name}</h3>
            <p className="team-role">{t.roles[member.role]}</p>
            {member.sport && <span className="sport-tag">{t.sports[member.sport]}</span>}
            <p className="team-about">{member.about[language]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team
