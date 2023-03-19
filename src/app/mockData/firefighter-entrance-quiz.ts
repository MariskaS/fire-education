import firefighterEntranceExam from "./img/firefighterEntranceExam.jpg";

export const FIREFIGHTER_ENTRANCE_QUIZ = {
  id: 'firefighterEntranceQuiz',
  img: firefighterEntranceExam,
  name: 'Quiz: Could You Pass a Firefighter Entrance Exam?',
  description: `
    <p>
    So you want to be a firefighter. Well, there's a lot to learn first.
    For example, is it considered arson if the property a person burns
    is his or her own? And what should you do if you arrive at a call
    and find out that it was a false alarm?
    </p>`,
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
}
