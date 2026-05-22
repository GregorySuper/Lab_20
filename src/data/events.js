// Мероприятия по реальным секциям и базам ССК ЮФУ. Конкретные даты — иллюстративные
// (актуальное расписание клуб публикует во ВКонтакте и Telegram). Дата в формате ГГГГ-ММ-ДД.
// sport — русский ключ (перевод из словаря); title/place/description двуязычные.

const eventsList = [
  {
    id: 1,
    date: '2026-05-25',
    sport: 'Шахматы',
    title: {
      ru: 'Турнир по шахматам «УниверЛига ЮФУ»',
      en: 'The «UniverLeague SFedU» chess tournament',
    },
    place: { ru: 'Шахматный клуб СОК «Южный меридиан»', en: '«Yuzhny Meridian» chess club' },
    description: {
      ru: 'Студенческий турнир в рамках серии «УниверЛига ЮФУ». Участвуют игроки любого уровня.',
      en: 'A student tournament of the «UniverLeague SFedU» series. Players of any level are welcome.',
    },
  },
  {
    id: 2,
    date: '2026-05-27',
    sport: 'Баскетбол',
    title: {
      ru: 'Тренировка сборных по баскетболу',
      en: 'Basketball teams training',
    },
    place: { ru: 'Спортзал ИММКН, ул. Мильчакова, 8А', en: 'IMMCS gym, Milchakova St, 8A' },
    description: {
      ru: 'Тренировки проходят по понедельникам, средам и пятницам: женская сборная — в 16:30, мужская — в 19:00.',
      en: 'Training is held on Mondays, Wednesdays and Fridays: the women’s team at 16:30, the men’s team at 19:00.',
    },
  },
  {
    id: 3,
    date: '2026-06-03',
    sport: 'Плавание',
    title: {
      ru: 'Набор и тренировка по плаванию',
      en: 'Swimming recruitment and training',
    },
    place: { ru: 'СОК «Южный меридиан», ул. Благодатная, 161/1', en: '«Yuzhny Meridian», Blagodatnaya St, 161/1' },
    description: {
      ru: 'Приглашаем студентов в секцию плавания. Занятия проходят в бассейне спорткомплекса.',
      en: 'We invite students to the swimming section. Sessions are held in the sports complex pool.',
    },
  },
  {
    id: 4,
    date: '2026-06-10',
    sport: 'Волейбол',
    title: {
      ru: 'Открытая тренировка женской сборной по волейболу',
      en: 'Open training of the women’s volleyball team',
    },
    place: { ru: 'Спорткомплекс ЮФУ', en: 'SFedU sports complex' },
    description: {
      ru: 'Тренировка чемпионок АССК.Фест. Можно прийти на просмотр и попробовать свои силы.',
      en: 'A training of the ASSC.Fest champions. You can come for a tryout and test your skills.',
    },
  },
  {
    id: 5,
    date: '2026-06-15',
    sport: 'Мини-футбол',
    title: {
      ru: 'Студенческий турнир по мини-футболу',
      en: 'Student futsal tournament',
    },
    place: { ru: 'Спортивные площадки кампуса ЮФУ', en: 'SFedU campus sports grounds' },
    description: {
      ru: 'Турнир среди команд факультетов. Регистрация команд — на странице «Контакты».',
      en: 'A tournament among faculty teams. Team registration is on the «Contacts» page.',
    },
  },
  {
    id: 6,
    date: '2026-05-24',
    sport: 'Мини-футбол',
    title: {
      ru: 'Кубок ректора по мини-футболу',
      en: 'Rector cup futsal tournament',
    },
    place: { ru: 'Спортивные площадки кампуса ЮФУ', en: 'SFedU campus sports grounds' },
    description: {
      ru: 'Турнир среди команд факультетов и выпускников. Регистрация команд — на странице «Контакты».',
      en: 'A tournament among faculty teams and graduates teams. Team registration is on the «Contacts» page.',
    },
  },
]

export default eventsList
