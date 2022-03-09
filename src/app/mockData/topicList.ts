import firefighterEntranceExam from './img/firefighterEntranceExam.jpg';
import stub from './img/stub.jpg';
import lossControl from './img/lossControl.jpg';

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
    quiz: [
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
      {
        question: 'Which of the following is NOT part of an exam?',
        answer: `While public speaking about fire safety is part of the job,
        it would be rare for a department to ask you to do it as part
        of the exam! Once on board, you'd be given training and practice
        prior to giving a talk.`,
        variants: [
          {text: 'Reading-comprehension exercises', isCorrect: false},
          {text: 'A sample fire prevention speech', isCorrect: true},
          {text: 'Physical skills assessment', isCorrect: false},
          {text: 'Analysis of video scenarios', isCorrect: false},
        ],
      },
      {
        question: 'If you turn out for a call, but the fire is out by the time you get there, you should ....',
        answer: `This happens from time to time. Even if the caller only
         believed there was a fire, but was wrong,
        it's still considered "good intent." They should not be blamed for a false alarm.`,
        variants: [
          {text: 'Report the caller for a false alarm', isCorrect: false},
          {text: 'Check to make sure the fire is really out', isCorrect: true},
          {text: 'Promptly leave', isCorrect: false},
          {text: 'Hang around and hint that a cup of coffee would be nice', isCorrect: false},
        ],
      },
      {
        question: 'The protective clothing firefighters wear are called ___',
        answer: `A "turn out" is a call to report to the scene of a fire or an emergency.
         So turnout gear is what firefighters wear to do that.`,
        variants: [
          {text: 'Bibs and aprons', isCorrect: false},
          {text: 'Hazmat suits', isCorrect: false},
          {text: 'Pulaski gear', isCorrect: false},
          {text: 'Turnout gear', isCorrect: true},
        ],
      },
      {
        question: 'The ADA is the American ___ Act.',
        answer: `The ADA is relevant to the firefighters'
         exam because it means that candidates with physical
         or mental challenges must be allowed to apply
        and train for jobs, and reasonable accommodation
        must be made for them.`,
        variants: [
          {text: 'Delinquency', isCorrect: false},
          {text: 'Defense', isCorrect: false},
          {text: '(with) Disabilities', isCorrect: true},
          {text: 'Decontamination', isCorrect: false},
        ],
      },
      {
        question: 'The ADA is the American ___ Act.',
        answer: `The ADA is relevant to the firefighters'
         exam because it means that candidates with physical
         or mental challenges must be allowed to apply
        and train for jobs, and reasonable accommodation
        must be made for them.`,
        variants: [
          {text: 'Delinquency', isCorrect: false},
          {text: 'Defense', isCorrect: false},
          {text: '(with) Disabilities', isCorrect: true},
          {text: 'Decontamination', isCorrect: false},
        ],
      },
      {
        question: 'SCBA equipment is better known as a/an ___',
        answer: ` SCBA stands for self-contained breathing apparatus.
         It allows a firefighter to breathe in clean air, in smoke-filled buildings.`,
        variants: [
          {text: 'Air pack', isCorrect: true},
          {text: 'Aerator', isCorrect: false},
          {text: 'Self-rescuer', isCorrect: false},
          {text: 'Star of life', isCorrect: false},
        ],
      },
      {
        question: 'Which of these do you NOT have to worry about as you train for a physical abilities exam?',
        answer: ` SCBA stands for self-contained breathing apparatus.
         It allows a firefighter to breathe in clean air, in smoke-filled buildings.`,
        variants: [
          {text: 'Cardio', isCorrect: true},
          {text: 'Aerator', isCorrect: false},
          {text: 'Self-rescuer', isCorrect: false},
          {text: 'Star of life', isCorrect: false},
        ],
      },
    ],
  },
  {
    id: '2',
    img: lossControl,
    name: 'Flashcards: Loss control',
    description: `The purpose of this procedure is to describe the process to reduce,
     and in many cases eliminate, certain losses experienced during and following fires and other types of incidents.`,
    date: '2022-02-21T22:45:34.124Z',
    type: 'flashcards',
    keys: ['loss control', 'flashcards'],
    resources: [
      {
        name: 'Essentials of Fire Fighting. Ch. 18 - FF I - Loss Control',
        link: 'https://www.amazon.com/Essentials-Fire-Fighting-Department-Operations/dp/0133140806/ref=sr_1_2?crid=QX9BOUWPUAG7&keywords=essentials+of+firefighting&qid=1646429625&sprefix=essentials+of+fire+fighting%2Caps%2C104&sr=8-2'
      }
    ],
    questions: [
      {
        question: 'How does the philosophy of loss control impact fire suppression?',
        answer: `
        <p><strong>Loss Control</strong> - Practice of minimizing damage and providing customer service through effective mitigation and recovery efforts before, during, and after an incident.</p>
        <strong>Properly applied loss control activities include:</strong>
        <ul>
          <li>
            Minimizing damage to the structure, exposures, and contents.
          </li>
          <li>
            Eliminating the possibility of a fire re-igniting in the structure.
          </li>
          <li>
            Reducing the amount of time needed to repair and reopen for business.
          </li>
          <li>
            Reduce stress on the owner/occupants of the structure.
          </li>
          <li>
            Create goodwill for the fire department within the community.
          </li>
          <li>
            Minimize financial losses to the owner, occupant, insurance company, and community.
          </li>
        </ul>
`
      },
      {
        question: 'In what ways can precedent planning influence loss control?',
        answer: `
        <p>Preincident Planning helps to save the most critical things for business owners or families affected by a fire. For example, the owner may accept losing the structure itself as long as proprietary items such as client information and financial records are preserved.
        Some businesses never recover from a fire due to the loss of such critical items,
         even if they are fully insured.</p>
        <p>Effective loss control depends on good planning.</p>
        <strong>Loss control concerns that should be identified during a preincident plan include:</strong>
        <ul>
          <li>
            The most effective and least destructive means of gaining access to the structure (lockboxes, etc.).
          </li>
          <li>
           The most effective means of evacuating or protecting building occupants during a fire.
          </li>
          <li>
          The location of vital business records (computer servers, filing cabinets, vaults)
          in the structure and how to best protect them during a fire.
          </li>
          <li>
          When and how built-in fire suppression systems, such as automatic
          sprinklers and standpipes, are to be supported and used.
          </li>
          <li>
          How building contents are to be protected from smoke and water damage
          (salvage covers, plastic sheeting, removal from the structure, etc.).
          </li>
        </ul>
        `
      },
      {
        question: 'What is the best way to determine appropriate salvage procedures?',
        answer: `
        <p>
        The IC should make any decisions about delaying fire suppression affer taking into consideration
        the preincident plan, fire development, and any unsafe structural conditions.
        </p>
        <strong>The choice of salvage procedures will depend on:</strong>
        <ul>
        <li>Number of personnel available.</li>
        <li>Extent and location of the fire.</li>
        <li>Type, size, and quantity of the contents.</li>
        <li>Current weather conditions.</li>
        </ul>
        `
      },
      {
        question: 'What are the different types of salvage covers commonly used in the fire service?',
        answer: `
          <p>Salvage covers are made of <strong>waterproof canvas or vinyl</strong> and are manufactured in various sizes. These covers have reinforced corners and edge hems into which grommets are placed for hanging or draping. Vinyl synthetic covers are lightweight,
          easy to handle, economical, and practical for both indoor and outdoor use.</p>
          <p>Many departments use disposable <strong>heavy-duty plastic</strong> covers. The plastic is available on rolls and can be extended as needed to cover large areas. Covers can also be cut from the rolls
          in different shapes and sizes as needed. </p>
        `
      },
      {
        question: 'Why is it necessary to know several ways to fold, roil, spread, and improvise with salvage covers?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam quo saepe sint vero. Adipisci distinctio dolorem expedita illo illum in l
            audantium nisi praesentium quo repellendus`
      },
      {
        question: 'What ways can firefighters cover openings during salvage operations?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam quo saepe sint vero. Adipisci distinctio dolorem expedita illo illum in l
            audantium nisi praesentium quo repellendus`
      },
      {
        question: 'What methods can be used to maintain fire safety during overhaul operations?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam quo saepe sint vero. Adipisci distinctio dolorem expedita illo illum in l
            audantium nisi praesentium quo repellendus`
      },
      {
        question: 'How can a firefighter describe the factors that influence locating hidden fires?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam quo saepe sint vero. Adipisci distinctio dolorem expedita illo illum in l
            audantium nisi praesentium quo repellendus`
      },
      {
        question: 'What are some of the overhaul procedures used in the fire service?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam quo saepe sint vero. Adipisci distinctio dolorem expedita illo illum in l
            audantium nisi praesentium quo repellendus`
      },
      {
        question: 'How can using thermal imager be useful during overhaul?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quibusdam quo saepe sint vero. Adipisci distinctio dolorem expedita illo illum in l
            audantium nisi praesentium quo repellendus`
      },
    ]
  },
  // {
  //   id: '3',
  //   img: stub,
  //   name: 'How much do you know about vertical ventilation?',
  //   description: `Test your knowledge of sounding and walking on the roof,
  //   using roof ladders, working from an aerial, and cutting the hole
  //   and punching through`,
  //   date: '2022-02-21T22:45:34.124Z',
  //   type: 'topic',
  //   keys: ['vertical ventilation', 'quiz'],
  //   resources: [
  //     {
  //       name: 'firerescue1.com',
  //       link: 'https://www.firerescue1.com/firefighter-safety/articles/quiz-how-much-do-you-know-about-vertical-ventilation-PRl0bUFhhk5aS8GN/'
  //     }
  //   ],
  // },
  // {
  //   id: '4',
  //   img: stub,
  //   name: 'Test your knowledge of building construction',
  //   description: 'A firefighter’s guide to building loads, forces and hazards',
  //   date: '2022-02-21T22:45:34.124Z',
  //   type: 'topic',
  //   keys: ['building construction', 'quiz'],
  //   resources: [
  //     {
  //       name: 'Zoo.com',
  //       link: 'https://www.zoo.com/quiz/could-you-pass-a-firefighter-entrance-exam'
  //     }
  //   ],
  //   quiz: [],
  // },
  // {
  //   id: '5',
  //   img: stub,
  //   name: 'How well do you know SCBA?',
  //   description: 'Test your knowledge on SCBA standards, equations and more',
  //   date: '2022-02-21T22:45:34.124Z',
  //   type: 'topic',
  //   keys: ['SCBA', 'quiz'],
  //   resources: [
  //     {
  //       name: 'Zoo.com',
  //       link: 'https://www.zoo.com/quiz/could-you-pass-a-firefighter-entrance-exam'
  //     }
  //   ],
  //   quiz: [],
  // }
]
