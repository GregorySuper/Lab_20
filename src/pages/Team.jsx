import teamMembers from '../data/team'
import './pages.css'

function Team() {
  return (
    <section className="container page-section">
      <h2 className="section-title">Команда</h2>
      <p className="section-lead">
        Тренеры и спортсмены клуба «Южная стая» — те, кто защищает честь
        университета на соревнованиях.
      </p>

      <div className="cards-grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-card">
            {/* Вместо фотографии используем первую букву имени — так карточка
                выглядит аккуратно, пока нет реальных фото */}
            <div className="team-avatar">{member.name.charAt(0)}</div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <span className="sport-tag">{member.sport}</span>
            <p className="team-about">{member.about}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team
