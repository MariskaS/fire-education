import firefighterEntranceExam from './img/firefighterEntranceExam.jpg';
import stub from './img/stub.jpg';

export const TOPIC_LIST = [
  {
    id: '1',
    img: firefighterEntranceExam,
    name: 'Quiz: Could You Pass a Firefighter Entrance Exam?',
    description: `So you want to be a firefighter. Well, there's a lot to learn first.
    For example, is it considered arson if the property a person burns
    is his or her own? And what should you do if you arrive at a call
    and find out that it was a false alarm?`,
    date: '2022-02-21T22:45:34.124Z',
    type: 'quiz',
    keys: ['Entrance Exam', 'quiz'],
    resources: [
      {
        name: 'Zoo.com',
        link: 'https://www.zoo.com/quiz/could-you-pass-a-firefighter-entrance-exam'
      }
    ],
    questions: [
      {
        question: 'Which of these qualifies as a first responder?',
        answer: `Civilians are often first responders - people who provide
    help at the scene of an emergency until professional help arrives.
    Many fire departments teach courses like "CERT,"
    which stands for Community Emergency Response Training.`,
        variants: [
          {text: 'A firefighter', isCorrect: false},
          {text: 'A police officer', isCorrect: false},
          {text: 'An EMT-B or better', isCorrect: false},
          {text: 'Anyone who has had emergency training', isCorrect: true},
        ],
      },
      {
        question: 'The act of setting a fire deliberately with intent to do harm is ___.',
        answer: `Obviously, not all fire-setting is arson. Letting a
    backcountry campfire get out of hand can result in civil charges,
    but it's highly unlikely campers would be charged with arson.`,
        variants: [
          {text: 'Arson', isCorrect: true},
          {text: 'Kindling', isCorrect: false},
          {text: 'Controlled burning', isCorrect: false},
          {text: 'Malicious mischief', isCorrect: false},
        ],
      },
      {
        question: 'Which of these tasks might you have to perform as part of the physical exam?',
        answer: `A physical abilities test isn't just a test of your physical
     strength and stamina. You'll be showing evaluators
     that you can do actual tasks that are part of the job.
     Of course, strength and dexterity are certainly part of that.`,
        variants: [
          {text: 'Drag a hose', isCorrect: true},
          {text: 'Raise a ladder', isCorrect: false},
          {text: 'Climb stairs', isCorrect: false},
          {text: 'Any of these', isCorrect: false},
        ],
      },
    ],
  },
  {
    id: '2',
    img: stub,
    name: 'How much do you know about vertical ventilation?',
    description: `Test your knowledge of sounding and walking on the roof,
    using roof ladders, working from an aerial, and cutting the hole
    and punching through`,
    date: '2022-02-21T22:45:34.124Z',
    type: 'quiz',
    keys: ['vertical ventilation', 'quiz'],
    resources: [
      {
        name: 'firerescue1.com',
        link: 'https://www.firerescue1.com/firefighter-safety/articles/quiz-how-much-do-you-know-about-vertical-ventilation-PRl0bUFhhk5aS8GN/'
      }
    ],
    questions: [],
  },
  {
    id: '3',
    img: stub,
    name: 'Test your knowledge of building construction',
    description: 'A firefighter’s guide to building loads, forces and hazards',
    date: '2022-02-21T22:45:34.124Z',
    type: 'quiz',
    keys: ['building construction', 'quiz'],
    resources: [
      {
        name: 'Zoo.com',
        link: 'https://www.zoo.com/quiz/could-you-pass-a-firefighter-entrance-exam'
      }
    ],
    questions: [],
  },
  {
    id: '4',
    img: stub,
    name: 'How well do you know SCBA?',
    description: 'Test your knowledge on SCBA standards, equations and more',
    date: '2022-02-21T22:45:34.124Z',
    type: 'quiz',
    keys: ['SCBA', 'quiz'],
    resources: [
      {
        name: 'Zoo.com',
        link: 'https://www.zoo.com/quiz/could-you-pass-a-firefighter-entrance-exam'
      }
    ],
    questions: [],
  }
]
