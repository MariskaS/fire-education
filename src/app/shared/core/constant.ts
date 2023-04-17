export const STATE_STATUS = {
  idle: 'idle',
  loading: 'loading',
  failed: 'failed',
};

export const HEADING_TYPE = {
  title: 'title',
  subtitle: 'subtitle',
};

export const TOPIC_TYPE = {
  flashcards: 'flashcards',
  quiz: 'quiz',
  topic: 'topic',
  all: 'all',
};

export const TITLE = {
  topics: 'topics',
  WCFD: 'WCFD',
  answers: 'Answers',
  answer: 'answer',
  summary: 'summary',
  question: 'question',
}

export const SOCIAL = {
  facebook: 'facebook',
  website: 'website',
}

export const BUTTON_TYPE = {
  promoAccent: 'promo-accent',
  promoPrimary: 'promo-primary',
  accent: 'accent',
}

export const TOPIC_LIST_DROPDOWN = [
  {
    id: 0,
    title: TOPIC_TYPE.all,
    selected: true,
    key: TOPIC_TYPE.all
  },
  {
    id: 1,
    title: TOPIC_TYPE.topic,
    selected: false,
    key: TOPIC_TYPE.topic
  },
  {
    id: 2,
    title: TOPIC_TYPE.quiz,
    selected: false,
    key: TOPIC_TYPE.quiz
  },
  {
    id: 3,
    title: TOPIC_TYPE.flashcards,
    selected: false,
    key: TOPIC_TYPE.flashcards
  },
]

export const BUTTON_TEXT = {
  letsGo: 'Let\'s Go',
  volunteer: 'Volunteer',
  tryAgain: 'try again',
  back: 'Go back',
  home: 'Go Home Page',
}

export const BUTTON_LINK = {
  volunteer: 'https://www.firstwestchester.org/content/volunteer/',
}

export const HOME = {
  title: 'Ready to become a firefighter?',
  subtitle: 'This application contains information for the firefighter apprentice to help improve skills.',
  social: {
    title: 'Find us on social media',
    links: [
      {
        icon: SOCIAL.facebook,
        name: 'First West Chester Firefighters',
        link: 'https://www.facebook.com/FirstWestChesterFireCo',
      },
      {
        icon: SOCIAL.website,
        name: 'Official Website for the West Chester Fire Department',
        link: 'https://www.wcfiredept.org/',
      },
    ]
  },
}

export const ERROR = {
  oops: 'Ooops...',
  somethingWentWrong: 'Something went wrong',
  technicalWork: 'Technical work in progress, please try again later.',
}

export const THEME = {
  dark: 'dark',
  light: 'light',
}

export const COMPANY_INFO = {
  fromYear: '1799',
  name: 'First West Chester Fire Co.',
  link: 'https://firstwestchester.org/',
  email: 'info@firstwestchester.org',
  address: 'First West Chester Fire Company 70 South Bradford Avenue West Chester, PA 19382',
  poweredBy: {
    text: 'Powered by members of the First West Chester Fire Company No. 1 Station 51',
    link: 'https://firstwestchester.org/',
  },
}
