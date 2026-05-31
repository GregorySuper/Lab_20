// Состав клуба основан на реальных представителях ССК ЮФУ и Управления развития спорта АФКиС ЮФУ
// (источник — досье по открытым данным sfedu.ru и rosstudsport.ru).
// role и sport — русские ключи (перевод из словаря). about двуязычное.
// Пустое поле sport означает, что метка вида спорта на карточке не показывается.
// Как вставить фото участника — см. файл site/КАК_ДОБАВИТЬ_ФОТО.md (поле photo).

const teamMembers = [
  {
    id: 1,
    name: 'Сергей Ревенко',
    role: 'Президент клуба',
    sport: '',
    photo: '/img/team/revenko.jpg',
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
    photo: '/img/team/pomanov.jpg',
    about: {
      ru: 'Отвечает за ключевые турниры и образовательную школу «ССК | СТАРТ», менеджер баскетбольной команды.',
      en: 'In charge of key tournaments and the «SSC | START» school, manager of the «SFedU Panthers» basketball team.',
    },
  },
  {
    id: 3,
    name: 'Виктория Волк',
    role: 'Тренер',
    sport: 'Баскетбол',
    photo: '/img/team/volk.jpg',
    about: {
      ru: 'Тренер женской сборной ЮФУ по баскетболу.',
      en: 'Coach of the SFedU women’s basketball team.',
    },
  },
  {
    id: 4,
    name: 'Ярослав Стрижеус',
    role: 'Тренер',
    sport: 'Баскетбол',
    photo: '/img/team/strish.jpg',
    about: {
      ru: 'Тренер мужской сборной ЮФУ по баскетболу.',
      en: 'Coach of the SFedU men’s basketball team.',
    },
  },
  {
    id: 5,
    name: 'Кирилл Козырев',
    role: 'Председатель ССК',
    sport: '',
    photo: '/img/team/koz.jpg',
    about: {
      ru: 'Председатель спортивного студенческого клуба, который защищает интересы активистов в клубе.',
      en: 'Chairman of the student sports club, which protects the interests of activists in the club.',
    },
  },
  {
    id: 6,
    name: 'Александр Петров',
    role: 'Руководитель СКК',
    sport:'Киберспорт',
    photo: '/img/team/petr.jpg',
    about: {
      ru: 'Организатор киберспортивных соревнований.',
      en: 'Organizer of esports competitions.',
    },
  },
]

export default teamMembers
