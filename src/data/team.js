// Состав клуба основан на реальных представителях ССК ЮФУ и Управления развития спорта АФКиС ЮФУ
// (источник — досье по открытым данным sfedu.ru и rosstudsport.ru).
// role и sport — русские ключи (перевод из словаря). about двуязычное.
// Пустое поле sport означает, что метка вида спорта на карточке не показывается.

const teamMembers = [
  {
    id: 1,
    name: 'Сергей Ревенко',
    role: 'Президент клуба',
    sport: '',
    about: {
      ru: 'Основатель ССК ЮФУ (2014) и начальник Управления развития спорта АФКиС ЮФУ.',
      en: 'Founder of SFedU SSC (2014) and head of the Sports Development Office of AFCS SFedU.',
    },
  },
  {
    id: 2,
    name: 'Кристина Романова',
    role: 'Организатор',
    sport: 'Баскетбол',
    about: {
      ru: 'Отвечает за ключевые турниры и образовательную школу «ССК | СТАРТ», тренер баскетбольной команды «Пантеры ЮФУ».',
      en: 'In charge of key tournaments and the «SSC | START» school, coach of the «SFedU Panthers» basketball team.',
    },
  },
  {
    id: 3,
    name: 'Александра Бедросова',
    role: 'Тренер',
    sport: 'Баскетбол',
    about: {
      ru: 'Тренер женской сборной ЮФУ по баскетболу, методист Управления развития спорта.',
      en: 'Coach of the SFedU women’s basketball team and a methodologist of the Sports Development Office.',
    },
  },
  {
    id: 4,
    name: 'Ярослав Стрижеус',
    role: 'Тренер',
    sport: 'Баскетбол',
    about: {
      ru: 'Тренер мужской сборной ЮФУ по баскетболу.',
      en: 'Coach of the SFedU men’s basketball team.',
    },
  },
  {
    id: 5,
    name: 'Ксения Согомонян',
    role: 'Тренер',
    sport: 'Плавание',
    about: {
      ru: 'Тренер по плаванию, проводит тренировки в спорткомплексе «Южный меридиан».',
      en: 'Swimming coach, runs training sessions at the «Yuzhny Meridian» sports complex.',
    },
  },
  {
    id: 6,
    name: 'Софья Ярцева',
    role: 'Капитан команды',
    sport: 'Волейбол',
    about: {
      ru: 'Капитан женской сборной по волейболу — чемпионок АССК.Фест 2024.',
      en: 'Captain of the women’s volleyball team — ASSC.Fest 2024 champions.',
    },
  },
]

export default teamMembers
