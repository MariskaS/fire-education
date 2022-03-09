import firefighterEntranceExam from './img/firefighterEntranceExam.jpg';
import stub from './img/stub.jpg';
import co from './img/co.jpg';
import coScheme from './img/co2.jpg';
import lossControl from './img/lossControl.jpg';

export const TOPIC_LIST = [
  {
    id: '1',
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
  },
  {
    id: '2',
    img: lossControl,
    name: 'Flashcards: Loss control',
    description: `
    <p>Loss control is an important component of fire department service delivery with the philosophy of minimizing secondary damage
    to structures and their contents during and after fire control operations.</p>
    `,
    notes: `
    <ul>
    <li>Salvage and overhaul operations are two of the most effective means of loss control.</li>
    <li>
    It is very important for fire personnel to identify and protect valuable contents
    in structures affected by fire as well as searching for hidden fires so
    rekindling does not occur.
    </li>
    <li>
    Taking a customer-service oriented approach to loss control ensures that citizens’ property is adequately protected
    and that the reputation of the fire service is held in the highest regard.
    </li>
    </ul>
    `,
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
        <h5>Properly applied loss control activities include:</h5>
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
        <h5>Loss control concerns that should be identified during a preincident plan include:</h5>
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
        <h5>The choice of salvage procedures will depend on:</h5>
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
          <ul>
          <li>Canvas.</li>
          <li>Vinyl.</li>
          <li>Disposable heavy-duty plastic.</li>
          </ul>
          <p>Salvage covers are made of <strong>waterproof canvas or vinyl</strong> and are manufactured in various sizes. These covers have reinforced corners and edge hems into which grommets are placed for hanging or draping. Vinyl synthetic covers are lightweight,
          easy to handle, economical, and practical for both indoor and outdoor use.</p>
          <p>Many departments use disposable <strong>heavy-duty plastic</strong> covers. The plastic is available on rolls and can be extended as needed to cover large areas. Covers can also be cut from the rolls
          in different shapes and sizes as needed. </p>
        `
      },
      {
        question: 'Why is it necessary to know several ways to fold, roil, spread, and improvise with salvage covers?',
        answer: `
        <p>Improvised salvage covers catch and route water away from a location.</p>
        <h5>There are several different methods for folding/rolling and spreading covers:</h5>
        <ul>
        <li>One-Firefighter Spread with a Rolled Salvage Cover.</li>
        <li>One-Firefighter Spread with a Folded Cover.</li>
        <li>Two-Firefighter Spread with a Folded Cover.</li>
        </ul>
        `
      },
      {
        question: 'Salvage procedures include',
        answer: `
        <ul>
        <li>Moving contents to a safe location in the structure.</li>
        <li>Removing contents from the structure.</li>
        <li>Protecting the contents in place with salvage covers.</li>
        </ul>
        `
      },
      {
        question: 'The are two types of damage it is important to know about',
        answer: `
        <ul>
        <li>Primary - caused by fire, smoke.</li>
        <li>Secondary - results from fire suppression.</li>
        </ul>
        `
      },
      {
        question: 'Two tactics firefighters use are intended to reduce property damage.',
        answer: `
        <ul>
        <li>Salvage - Aid in reducing primary and secondary damage.</li>
        <li>Overhaul - searching for and extinguishing hidden or remaining fires after
        main body extinguished.</li>
        </ul>
        `
      },
      {
        question: 'A variety of tools and equipment are used during overhaul',
        answer: `
        <ul>
        <li>Pike poles, hooks - open ceilings to inspect for fire extension.</li>
        <li>Axe - open walls and floors.</li>
        <li>Prying tools - remove door frames, window frames, and baseboards.</li>
        <li>Power saws, drills, screwdrivers - install temporary doors and window coverings.</li>
        <li>Carryalls, buckets, tubs - carry debris or provide a basin for immersing smoldering material.</li>
        <li>Shovels, bale hooks, and pitchforks - move baled and loose materials.</li>
        <li>Thermal imager - check void spaces and look for hot spots.</li>
        </ul>
        `
      },
      {
        question: 'What ways can firefighters cover openings during salvage operations?',
        answer: `
        <p>Covering openings is critical to prevent further damage to the property.
        It includes Covering doors or windows, openings in roof, openings in upper-story floors, basements, crawl spaces.</p>
        `
      },
      {
        question: 'What methods can be used to maintain fire safety during overhaul operations?',
        answer: `
        <ul>
        <li>Inspecting the premises.</li>
        <li>Developing an operational plan.</li>
        <li>Providing needed tools and equipment.</li>
        <li>Eliminating or mitigating hazards (including securing any remaining utilities).</li>
        <li>Monitoring the atmosphere for carbon monoxide (CO) and hydrogen cyanide(HCN).
        levels before removing SCBA</li>
</ul>
        `
      },
      {
        question: 'How can a firefighter describe the factors that influence locating hidden fires?',
        answer: `
          <h5>There are four methods to use when locating hidden fires:</h5>
          <ul>
          <li>Sight - discoloration of materials, peeling paint, smoke emissions from cracks,
           cracked plaster, rippled wallpaper and burned areas.</li>
          <li>Touch - heat felt through walls and floors.</li>
          <li>Sound - popping or cracking of fire burning and hissing of steam.</li>
          <li>Electronic Sensors - thermal(heat) signature detection with thermal imager and infrared heat detection.</li>
          </ul>
          <p>The structural condition of an area must be evaluated before searching for hidden fires!</p>
        `
      },
      {
        question: 'What are some of the overhaul procedures used in the fire service?',
        answer: `
        <p>Overhaul procedures should begin as soon as possible after the order is given.</p>
        <ul>
        <li>If the fire extended to other areas, determine the path.</li>
        <li>If floor beams have burned at party wall ends, overhaul the ends by flushing the voids
        in the wall with water.</li>
        <li>Thoroughly check insulation materials because they can
        retain hidden fires for a prolonged period.</li>
        <li>Do not make random openings.</li>
        <li>Understanding basic building construction can help.</li>
        <li>Search in concealed spaces.</li>
        <li>Make openings in neat, planned manner.</li>
        <li>Open ceilings from below.</li>
        <li>When pulling any ceiling, do not stand directly under the area to be opened.</li>
        <li>Always wear full PPE including respiratory protection when pulling ceilings.</li>
        <li>Small burning objects frequently uncovered.</li>
        <li>Large smoldering items such as mattresses etc. should be taken outside the structure where they
        can be thoroughly extinguished.</li>
        <li>Do not disturb evidence, work in close coordination with the fire investigator.</li>
        <li>The use of wetting agents such as Class A foam is of considerable value when extinguishing hidden fires..</li>
        <li>The only way to ensure that fires in bales of items such as rags, cotton, and hay are extinguished
        is to break them apart.</li>
</ul>
        `
      },
      {
        question: 'How can using thermal imager be useful during overhaul?',
        answer: `
        <p>Firefighters can use TIs to find hidden fires in concealed spaces such a floors,
         ceilings, and walls without having to open up the areas and visually inspect them. This
         reduces the time needed to perform a search and limits the secondary
         damage to the structure</p>
        <p>Thermal imagers must not replace your senses!</p>
        `
      },
    ]
  },
  {
    id: '3',
    img: co,
    name: 'Carbon Monoxide',
    description: `Protecting yourself is simple.
  Sure, safeguarding your home and family from a threat that you can’t see,
 smell or taste may sound like a tall order.
  But if you know the risks it’s actually pretty easy.`,
    content: `
      <h3>CO Facts</h3>
<ol>
<li><strong>1</strong><p>CO is produced any time a fuel is burned. Potential sources include gas or oil furnaces, water heaters, space heaters, clothes dryers, barbecue grills, fireplaces,
wood-burning stoves, gas ovens, generators, and car exhaust fumes.</p></li>
<li><strong>2</strong><p>Carbon monoxide poisoning is the leading cause of accidental poisoning deaths in America. (Centers for Disease Control)</p></li>
<li><strong>3</strong><p>More than two-thirds of Americans use gas, wood, kerosene or another fuel as their home's major heat source.</p></li>
<li><strong>4</strong><p>65% of carbon monoxide poisoning deaths from consumer products are due to heating systems.</p></li>
<li><strong>5</strong><p>Only 50% of homes in America have CO alarms, according to industry surveys.</p></li>
<li><strong>6</strong><p>An idling vehicle in an attached garage, even with the garage door opened, can produce concentrated amounts of CO that can enter your home through the garage door or nearby windows.</p></li>
<li><strong>7</strong><p>Portable generators were involved in the majority of CO deaths involving engine-driven tools from 1999 through 2012. (CPSC)</p></li>
<li><strong>8</strong><p>A poorly maintained gas stove can give off twice the amount of CO than one that is in good working order.</p></li>
</ol>
<img src="${coScheme}">
<h3>Tips for Prevention</h3>
<ol>
<li><strong>1</strong><p>Install at least one battery-powered CO alarm or AC-powered unit with battery backup on each level of your home and near sleeping areas.</p></li>
<li><strong>2</strong><p>Do not use charcoal or gas grills inside or operate outdoors near a window where CO fumes could seep in.</p></li>
<li><strong>3</strong><p>Check all CO alarms in your home. Do they use the most accurate sensing technology? Do they need new batteries?</p></li>
<li><strong>4</strong><p>Replace CO alarms every five to seven years to benefit from the latest technology upgrades.</p></li>
<li><strong>5</strong><p>Have a licensed professional inspect heating systems and other fuel-burning appliances annually.</p></li>
<li><strong>6</strong><p>Install fuel-burning appliances properly and operate them according to the manufacturer's instructions.</p></li>
<li><strong>7</strong><p>Keep chimneys clear of animal nests, leaves and residue to ensure proper venting. Have all fireplaces cleaned and inspected annually.</p></li>
<li><strong>8</strong><p>Do not block or seal shut the exhaust flues or ducts used by water heaters, ranges and clothes dryers.</p></li>
<li><strong>9</strong><p>Do not leave your car running in an attached garage or carport.</p></li>
<li><strong>10</strong><p>Do not use ovens or stoves to heat your home.</p></li>
</ol>
<blockquote><div>Keep you and your family safe from carbon monoxide!</div></blockquote>
    `,
    date: '2022-02-21T22:45:34.124Z',
    type: 'topic',
    keys: ['Carbon Monoxide', 'topic'],
    resources: [
      {
        name: 'West Chester Borough Fire Department',
        link: 'https://www.facebook.com/WCBFire'
      }
    ],
  },
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
