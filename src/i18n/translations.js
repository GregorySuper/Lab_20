// Словарь переводов сайта. Все тексты интерфейса хранятся здесь на двух языках.
// Чтобы добавить язык, нужно дописать ещё один объект по образцу.

export const translations = {
  ru: {
    nav: { news: 'Новости', team: 'Команда', calendar: 'Календарь', events: 'Мероприятия', contacts: 'Контакты' },
    apply: 'Подать заявку',

    // Текст логотипа в шапке (название клуба и девиз)
    logo: { title: 'ССК ЮФУ', subtitle: '«Южная стая»' },

    hero: {
      label: 'Спортивный студенческий клуб ЮФУ',
      title: 'Южная стая',
      subtitle: 'Тренировки, турниры и большие победы. Присоединяйся к команде и проведи студенческие годы в спорте.',
      cta: 'Подать заявку',
    },

    titles: {
      news: 'Новости',
      team: 'Команда',
      calendar: 'Календарь мероприятий',
      events: 'Мероприятия',
      contacts: 'Контакты',
    },

    teamLead: 'Руководство и тренеры клуба «Южная стая» — те, кто организуют соревнования в университете.',
    eventsLead: 'Ближайшие турниры, тренировки и забеги клуба. Выберите вид спорта, чтобы отфильтровать список.',
    calendarLead: 'Дни с мероприятиями отмечены точкой. Нажмите на дату, чтобы увидеть, что запланировано.',

    all: 'Все',
    signUp: 'Записаться',
    readMore: 'Читать полностью',
    backToNews: '← Назад к новостям',
    noEvents: 'На этот день мероприятий нет.',

    weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsGenitive: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],

    modal: {
      title: 'Запись на мероприятие',
      name: 'Имя',
      contact: 'Контакт для связи',
      namePlaceholder: 'Как вас зовут',
      contactPlaceholder: 'Телефон, e-mail или ник в Telegram',
      error: 'Укажите имя и контакт — иначе мы не сможем с вами связаться.',
      submit: 'Записаться',
      successTitle: 'Заявка принята!',
      successText: (title) => 'Вы записаны на «' + title + '». Мы свяжемся с вами по указанному контакту и подтвердим участие.',
      done: 'Готово',
    },

    contacts: {
      clubName: 'Студенческий спортивный клуб ЮФУ «Южная стая»',
      department: 'Управление развития спорта АФКиС ЮФУ',
      address: '344006, г. Ростов-на-Дону, ул. Большая Садовая, 105/42',
      socialsHeading: 'Мы в соцсетях',
      formHeading: 'Подать заявку в клуб',
      name: 'Имя',
      contact: 'Контакт для связи',
      section: 'Интересующая секция',
      message: 'Сообщение',
      namePlaceholder: 'Как вас зовут',
      contactPlaceholder: 'Телефон, e-mail или ник в Telegram',
      messagePlaceholder: 'Расскажите о своём опыте (необязательно)',
      error: 'Пожалуйста, заполните имя и контакт для связи.',
      success: 'Спасибо, заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      submit: 'Подать заявку',
    },

    footer: {
      about: 'Студенческий спортивный клуб ЮФУ «Южная стая». Основан в 2014 году, развивает 26 видов спорта, член АССК России. Чемпионы АССК.Фест по волейболу.',
      sectionsHeading: 'Разделы',
      contactsHeading: 'Контакты',
      address: '344006, г. Ростов-на-Дону, ул. Большая Садовая, 105/42',
      rights: (year) => '© ' + year + ' ССК ЮФУ «Южная стая».',
    },

    notFound: {
      text: 'Такой страницы нет. Кажется, стая убежала не туда.',
      back: 'Вернуться на главную',
    },

    // Названия ролей и видов спорта — общие для нескольких страниц
    roles: {
      'Президент клуба': 'Президент клуба',
      'Организатор': 'Спортивно-массовая работа',
      'Капитан команды': 'Капитан команды',
      'Спортсмен': 'Спортсмен',
      'Тренер': 'Тренер',
      'Руководитель СКК': 'Руководитель СКК',
      'Председатель ССК': 'Председатель ССК',
    },
    sports: {
      'Волейбол': 'Волейбол',
      'Баскетбол': 'Баскетбол',
      'Мини-футбол': 'Мини-футбол',
      'Плавание': 'Плавание',
      'Настольный теннис': 'Настольный теннис',
      'Бадминтон': 'Бадминтон',
      'Шахматы': 'Шахматы',
      'Гиревой спорт': 'Гиревой спорт',
      'Киберспорт': 'Киберспорт',
    },
  },

  en: {
    nav: { news: 'News', team: 'Team', calendar: 'Calendar', events: 'Events', contacts: 'Contacts' },
    apply: 'Apply now',

    logo: { title: 'SFedU SSC', subtitle: '«Southern Pack»' },

    hero: {
      label: 'SFedU Student Sports Club',
      title: 'Southern Pack',
      subtitle: 'Training sessions, tournaments and big wins. Join the team and spend your student years in sport.',
      cta: 'Apply now',
    },

    titles: {
      news: 'News',
      team: 'Team',
      calendar: 'Events calendar',
      events: 'Events',
      contacts: 'Contacts',
    },

    teamLead: 'The management and coaches of the Southern Pack Club are those who organize competitions at the university.',
    eventsLead: 'Upcoming tournaments, training sessions and races of the club. Pick a sport to filter the list.',
    calendarLead: 'Days with events are marked with a dot. Click a date to see what is scheduled.',

    all: 'All',
    signUp: 'Sign up',
    readMore: 'Read more',
    backToNews: '← Back to news',
    noEvents: 'No events on this day.',

    weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'],
    monthsGenitive: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'],

    modal: {
      title: 'Event sign-up',
      name: 'Name',
      contact: 'Contact',
      namePlaceholder: 'Your name',
      contactPlaceholder: 'Phone, e-mail or Telegram',
      error: 'Please enter your name and contact — otherwise we cannot reach you.',
      submit: 'Sign up',
      successTitle: 'Request accepted!',
      successText: (title) => 'You are signed up for «' + title + '». We will contact you and confirm your participation.',
      done: 'Done',
    },

    contacts: {
      clubName: 'SFedU Student Sports Club «Southern Pack»',
      department: 'Sports Development Office, AFCS SFedU',
      address: '344006, Rostov-on-Don, Bolshaya Sadovaya St, 105/42',
      socialsHeading: 'Find us online',
      formHeading: 'Join the club',
      name: 'Name',
      contact: 'Contact',
      section: 'Sport section',
      message: 'Message',
      namePlaceholder: 'Your name',
      contactPlaceholder: 'Phone, e-mail or Telegram',
      messagePlaceholder: 'Tell us about your experience (optional)',
      error: 'Please fill in your name and contact.',
      success: 'Thank you, your request has been sent! We will contact you soon.',
      submit: 'Apply now',
    },

    footer: {
      about: 'SFedU Student Sports Club «Southern Pack». Founded in 2014, develops 26 sports, member of ASSC Russia. ASSC.Fest champions in volleyball.',
      sectionsHeading: 'Sections',
      contactsHeading: 'Contacts',
      address: '344006, Rostov-on-Don, Bolshaya Sadovaya St, 105/42',
      rights: (year) => '© ' + year + ' SFedU SSC «Southern Pack».',
    },

    notFound: {
      text: 'There is no such page. Looks like the pack ran the wrong way.',
      back: 'Back to home',
    },

    roles: {
      'Президент клуба': 'Club president',
      'Организатор': 'Sports & events office',
      'Капитан команды': 'Team captain',
      'Спортсмен': 'Athlete',
      'Тренер': 'Coach',
      'Руководитель СКК': 'Manager SKK',
      'Председатель ССК': 'Chairman SSK',
    },
    sports: {
      'Волейбол': 'Volleyball',
      'Баскетбол': 'Basketball',
      'Мини-футбол': 'Futsal',
      'Плавание': 'Swimming',
      'Настольный теннис': 'Table tennis',
      'Бадминтон': 'Badminton',
      'Шахматы': 'Chess',
      'Гиревой спорт': 'Kettlebell lifting',
      'Киберспорт': 'Cyber sport',
    },
  },
}
