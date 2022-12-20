import firefighterEntranceExam from './img/firefighterEntranceExam.jpg';
import stub from './img/stub.jpg';
import co from './img/co.jpg';
import fireControl from './img/fireControl.jpg';
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
    <ol>
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
    </ol>
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
    img: lossControl,
    name: 'Flashcards: HAZMAT',
    description: `
    <p>...</p>
    <ol>
    <li>...</li>
    </ol>
    `,
    notes: `
    <ol>
    <li>Hazardous materials can be present at any incident scene,
    and responders should always be aware of their possible presence
     and the unique challenges they pose.</li>
    <li>Responders must be abel to recognize containers that may
     contain hazardous materials, and be able to predict
    what types of hazard may be involved.</li>
    <li>
    Responders should be abel to predict the behavior of hazardous materials,
    and how to recognize and respond to incident involving terrorist attacks and illicit laboratories.
    </li>
    </ol>
    `,
    date: '2022-02-21T22:45:34.124Z',
    type: 'flashcards',
    keys: ['hazmat', 'flashcards'],
    resources: [
      {
        name: 'Essentials of Fire Fighting. Ch. ...',
        link: 'https://www.amazon.com/Essentials-Fire-Fighting-Department-Operations/dp/0133140806/ref=sr_1_2?crid=QX9BOUWPUAG7&keywords=essentials+of+firefighting&qid=1646429625&sprefix=essentials+of+fire+fighting%2Caps%2C104&sr=8-2'
      },
      {
        name: 'FEMA Hazardous Materials Incidents',
        link: 'https://www.fema.gov/sites/default/files/2020-07/hazardous-materials-incidents.pdf'
      },
      {
        name: 'Lower and Upper Explosive Limits for Flammable Gases and Vapors',
        link: 'https://www.wermac.org/safety/safety_what_is_lel_and_uel.html'
      },
      {
        name: 'lower explosive limit (LEL)',
        link: 'https://www.owp.csus.edu/glossary/lower-explosive-limit.php#:~:text=The%20lowest%20concentration%20of%20a,lower%20flammable%20limit%20(LFL).'
      },
      {
        name: 'GEMBO - Geneal hazardous material behavior model',
        link: 'https://ebrary.net/131030/health/gembo'
      }
  ],
    questions: [
      {
        question: `When hazard materials are being transported by rail the shipping papers are
        most likely to be wit the`,
        answer: `
        <p>conductor or engineer</p>`
      },
      {
        question: `Triangular-shaped pattern of a hazardous material with a point source at the breach and
        a wide base downgrade:`,
        answer: `
        <p>Cone (ch.24 - p.1086).</p>`
      },
      {
        question: `Surface-following pattern of liquid hazardous material that is affected by gravity
         and topographical contours:`,
        answer: `
        <p>Stream (ch.24 - p.1086).</p>`
      },
      {
        question: `Three-dimensional (including depth), slow-flowing liquid dispersion. Liquid assume the shape of
        their container, typically accumulating in low areas:`,
        answer: `
        <p>Pool (ch.24 - p.1086).</p>`
      },
      {
        question: `___ is an irregularly shaped pattern of an airborne hazardous
         material influenced by wind and/or topography in its downrange course`,
        answer: `
        <p>Plume (ch.24 - p.1086).</p>`
      },
      {
        question: `___ is a pattern of an airborne hazardous material where the material
        has collectively risen above the ground or water`,
        answer: `
        <p>Cloud (ch.24 - p.1086).</p>`
      },
      {
        question: `___ is a semicircular or dome-shaped pattern of an airborne hazardous material that is still partially
        in contact with the ground or water`,
        answer: `
        <p>A hemispheric release (ch.24 - p.1085).</p>`
      },
      {
        question: `Identify the 3 pieces that should be always be printed on a pipeline on  a warning sign`,
        answer: `
        <ul>
        <li>ownership of the pipeline</li>
        <li>emergency phone number</li>
        <li>info about pipeline contents</li>
        </ul>`
      },
      {
        question: `4 types of locations that could target for criminal or terrorist activity using hazmat materials`,
        answer: `
        <ul>
        <li>military installations</li>
        <li>telecom facilities</li>
        <li>places of historical significance</li>
        <li>mass transit system</li>
        </ul>`
      },
      {
        question: `At the awareness level you are responsible`,
        answer: `
        <p>recognizing the presence of hazardous materials</p>`
      },
      {
        question: `The dispersion of a material is sometimes referred to a as ___. ___ occurs when a product disperses,
        forming a danger zone.`,
        answer: `
        <p>Engulfment (ch.24-p.1084)</p>`
      },
      {
        question: `___ can mix with air and travel great distances to an ignition source. (Flammable liquids (and Combustible Liquids)`,
        answer: `
        <p>Vapor (ch.24-p.1164)</p>`
      },
      {
        question: `___ standard system for the identification of Hazards of Materials for Emergency Response,
        gives a widely recognized method for indicating the presence of hazardous materials at commercial,
        manufacturing, institutional, and other fixed-storage facilities.`,
        answer: `
        <p>NFPA 704 (ch.24-p.1164)</p>`
      },
      {
        question: `NFPA 704 - the rating is assigned to three categories: 1. health ...`,
        answer: `
        <ol>
        <li>health</li>
        <li>flammability</li>
        <li>instability</li>
        </ol>
        <p>(ch.24-p.1179)</p>`
      },
      {
        question: `___ Caused by runoff from fire control. (Flammable liquids (and Combustible Liquids)`,
        answer: `
        <p>Environmental hazards (pollution) (ch.24-p.1164)</p>`
      },
      {
        question: `NFPA 704: the health rating is located on the ___ background`,
        answer: `
        <p>blue (ch.24-p.1164)</p>`
      },
      {
        question: `NFPA 704: the flammability rating is located on the ___ background`,
        answer: `
        <p>red (ch.24-p.1164)</p>`
      },
      {
        question: `NFPA 704: the instability hazard rating is located on the ___ background`,
        answer: `
        <p>yellow (ch.24-p.1164)</p>`
      },
      {
        question: `One limitation of using your sense to determine the presence of a hazardous material is the`,
        answer: `
        <p>if you are close enough to sense hazardous materials, you may have already endangered yourself</p>`
      },
      {
        question: `At the fixed facility, the best places to look for the names of the hazardous materials are the SDS and the`,
        answer: `
        <p>Emergency planning documents</p>`
      },
      {
        question: `Corrosive materials can`,
        answer: `
        <p>Destroy body tissue in contact</p>`
      },
      {
        question: `At concentrations lower then LEL, a mixture is:`,
        answer: `
        <p>Too lean to burn</p>`
      },
      {
        question: `Thermal hazards are`,
        answer: `
        <p>caused by exposure to extreme temperatures either hot or cold</p>`
      },
      {
        question: `Materials that are toxic to humans in inhaled, swallowed, absorbed, or enter through breaks in skin`,
        answer: `
        <p>Poisonous</p>`
      },
      {
        question: `Using your sense of smell to identify a hazardous material can put you at risk of exposure by way of`,
        answer: `
        <p>Inhalation</p>`
      },
      {
        question: `Terrorist incident characterised by the rapid onset of medical
        symptoms and easily observed signatures are`,
        answer: `
        <p>Chemical incidents</p>`
      },
      {
        question: `The onset of symptoms from a biological terrorist incident`,
        answer: `
        <p>Depends on the biological agent used</p>`
      },
      {
        question: `Occupation safety and health administration(OSHA) recommends awareness personnel`,
        answer: `
        <p>notify the proper authorities and not take actions above their training level</p>`
      },
      {
        question: `Awareness level objectives`,
        answer: `
        <ul>
            <li>Recognize hazardous materials/WMD incident</li>
            <li>Take initial actions</li>
            <li>Implement Incident Command System(ICS)</li>
            <li>Understand your role in hazardous materials/WMD response</li>
        </ul>`
      },
      {
        question: `Responder requirements will be set by the ___, this is the governing body that sets operatio
        policy and procedures for your jurisdiction`,
        answer: `
        <p>Authority Having Jurisdiction(AHJ)</p>`
      },
      {
        question: `Hazardous Material`,
        answer: `
        <p>substance that can be dangerous to human health or environment if not controlled</p>`
      },
      {
        question: `dangerous goods`,
        answer: `
        <p>Alternate term for hazardous materials,
         used in Canada and other Countries. U.S. or Canadian term for hazardous materials aboard an aircraft.</p>`
      },
      {
        question: `Weapon of Mass Destruction (WMD) is a`,
        answer: `
        <p>Weapon that can cause death or serious injury to large number of people</p>`
      },
      {
        question: `CBRNE`,
        answer: `
        <p>Chemical, Biological, Radiological, Nuclear, Explosive</p>`
      },
      {
        question: `___ is the unlawful force or violence against people or property to intimidate`,
        answer: `
        <p>Terrorism</p>`
      },
      {
        question: `condition, substance, or device that can directly cause injury or loss`,
        answer: `
        <p>Hazard</p>`
      },
      {
        question: `short term conditions that appear within hours or days (rapidly)`,
        answer: `
        <p>Acute health effects</p>`
      },
      {
        question: `Chronic health effects`,
        answer: `
        <p>Long term conditions that may take years to appear</p>`
      },
      {
        question: `Green highlighting indicates that a material:`,
        answer: `
        <p>Is a toxic inhalation hazard.</p>`
      },
      {
        question: `a breach:`,
        answer: `
        <p>Occurs when a container is stressed beyond its limits of recovery.</p>`
      },
      {
        question: `Which is true of the relationship between temperature and vapor pressure:`,
        answer: `
        <p>The higher the temperature of a substance, the higher the vapor pressure will be</p>`
      },
      {
        question: `In which step of the APIE process do responders
        initially attempt to identify the hazardous material involved?:`,
        answer: `
        <p>Step 1: Analyze the incident.</p>`
      },
      {
        question: `APIE Response model (4 steps):`,
        answer: `
        <ol>
        <li>Step 1: Analyze the incident</li>
        <li>Step 2: Plan the initial response</li>
        <li>Step 3: Implement the response</li>
        <li>Step 4: Evaluate progress</li>
        </ol>`
      },
      {
        question: `The shapes of different hazardous materials container
        and packaging can provide(only CAN not ALWAYS):`,
        answer: `
        <p>helpful information about the materials inside.</p>`
      },
      {
        question: `A vapor density of less than one indicates that the vapor:`,
        answer: `
        <p>Is lighter than air</p>`
      },
      {
        question: `GEMBO is a model used to`,
        answer: `
        <p>
        GEMBO is short for GENERAL HAZARDOUS MATERIAL BEHAVIOR MODEL.
        Describe how hazardous materials are accidentally released
        from their containers and how they behave after that release</p>`
      },
      {
        question: `TRACEM (6 hazmat hazard types)`,
        answer: `
        <p>Thermal, radiological, asphyxiation, chemical, Etiological (biological), mechanical</p>`
      },
      {
        question: `Polymerization`,
        answer: `
        <p>a chemical process that combines several monomers to form a large polymer molecule</p>`
      },
      {
        question: `Gases that convert to liquids when cooled to or below -130c`,
        answer: `
        <p>Cryogens</p>`
      },
      {
        question: `Radiation that causes a chemical change in atoms by removing their electrons. Most hazardous and energetic.`,
        answer: `
        <p>Ionizing radiation</p>`
      },
      {
        question: `least energetic and visible light or radio waves. Waves composed of oscillating electric or magnetic fields`,
        answer: `
        <p>nonionizing radiation</p>`
      },
      {
        question: `Four types of ionizing radiation`,
        answer: `
        <p>Alpha, beta, gamma, neutron. All are extremely hazardous</p>`
      },
      {
        question: `Positively charged, emitted from nucleus of heavy r.d. elements like uranium.
         Lose energy rapidly cant penetrate skin. So, not hazard outside body.`,
        answer: `
        <p>Alpha radiation</p>`
      },
      {
        question: `Pos or neg, emitted from nucleus of Tritium or carbon 14.
         Fast moving, penetrate skin and cause radiation damage. Travel 20ft`,
        answer: `
        <p>Beta radiation</p>`
      },
      {
        question: `high energy photons that accompany alpha or beta.
         Highly penetrating and can inflict sever radia damage. Standard ppe is not enough`,
        answer: `
        <p>Gamma radiation</p>`
      },
      {
        question: `MOST Dangerous, produce by fission reactions.
         Dificult to measure. Very hazardous to health`,
        answer: `
        <p>Neutron radiation</p>`
      },
      {
        question: `Routes of entry (6)`,
        answer: `
        <p>inhalation, ingestion, skin contact, injection, absorption and penetration</p>`
      },
      {
        question: `Prevent body from absorbing oxygen, nitrogen`,
        answer: `
        <p>Asphyxiants</p>`
      },
      {
        question: `Damage spread through an entire system`,
        answer: `
        <p>Systemic effect</p>`
      },
      {
        question: `IDLH`,
        answer: `
        <p>Immediately Dangerous to Life and Health</p>`
      },
      {
        question: `cause temporary but sometimes severe inflammation to the eyes, skin, or respiratory system`,
        answer: `
        <p>Irritants</p>`
      },
      {
        question: `Cause involuntary muscle contractions`,
        answer: `
        <p>Convulsants</p>`
      },
      {
        question: `reproduce in cells and dont respond to antibiotics`,
        answer: `
        <p>Viruses</p>`
      },
      {
        question: `rapidly released gases create a shock wave that travels out from center of the blast`,
        answer: `
        <p>Blast pressure wave (shock wave)</p>`
      },
      {
        question: `ability of a substance to chemically react with other materials`,
        answer: `
        <p>reactivity</p>`
      },
      {
        question: `shrapnel fragmentation`,
        answer: `
        <p>debris thrown outward in all directions</p>`
      },
      {
        question: `blasts near ground level create shock waves causing ground to shake`,
        answer: `
        <p>seismic effect</p>`
      },
      {
        question: `corrosive material that damages the skin or body tissue is considered exposure by`,
        answer: `
        <p>contact</p>`
      },
      {
        question: `responder Cooley hears a loud hiss for a being a dummy`,
        answer: `
        <p>evacuate the area to where he can no longer hear see or smell gass</p>`
      },
      {
        question: `petroleum and hazaardous liquid pipeline structures include`,
        answer: `
        <p>pump stations</p>`
      },
      {
        question: `identify the ERG that is opened to the section that lists the UN/NA numbers in order`,
        answer: `
        <p>yellow pages</p>`
      },
      {
        question: `Terrorists have been known to use compact sedans as IEDs.(Improvised Explosive Devices). Evacuation ___`,
        answer: `
        <p>1500 feet</p>`
      },
      {
        question: `all of the following are personal safety considerations to
        evalute when responding to an incident where criminal or terrorists activty is suspected except`,
        answer: `
        <p>the smell emanating from the scene</p>`
      },
      {
        question: `use guide 111 in the ERG`,
        answer: `
        <p>only until more specific info is available</p>`
      },
      {
        question: `info about a materials health hazard will be found in the`,
        answer: `
        <p>potential hazard area of the orange guide pages in the ERG</p>`
      },
      {
        question: `The shape of the isolation zone, or protective action distance, at a HazMat incident is a:`,
        answer: `
        <p>square</p>`
      },
      {
        question: `A typical situation when you should use the isolation distances found in the ERG's orange guide pages is when:`,
        answer: `
        <p>a hazardous material is exposed to fire</p>`
      },
      {
        question: `the type of protective action that requires you to keep everyone who is not directly involved in the ERO`,
        answer: `
        <p>isolating the area and denying entry</p>`
      },
      {
        question: `among other things the IPAD for a material involved at an incident is based on the`,
        answer: `
        <p>time of day</p>`
      },
      {
        question: `evacuation may require you to do all of the following except`,
        answer: `
        <p>find a building where windows and doors can be closed tightly</p>`
      },
      {
        question: `if a contamination risk exists and you need to provide first aid to a victim`,
        answer: `
        <p>be sure the victim has been decontaminated (ch.24 - p.1197)</p>`
      },
      {
        question: `___ is a  detailed information bulletin prepared by a chemical's
        manufacturer or importer that provides specific information about the product. ___ are formatted according
        Globally Harmonized System(GHS) specifications.`,
        answer: `
        <p>SDS (ch.24 - p.1200)</p>`
      },
      {
        question: `___ gas that is converted into a liquid by being cooled below -130 F (-90 C).`,
        answer: `
        <p>Cryogen (ch.24 - p.1200)</p>`
      },
      {
        question: `___ gas that is converted into a liquid by being cooled below -130 F (-90 C).`,
        answer: `
        <p>Cryogen (ch.24 - p.1200)</p>`
      },
      {
        question: `(Shipping papers). The basic description provided in
         shipping papers will follow a sequence best remembered by the acronym ISHP. This acronym means:`,
        answer: `
        <ol>
        <li>I = Identification Number</li>
        <li>S = Proper Shipping Name</li>
        <li>H = Hazard class or division</li>
        <li>P = Packing group</li>
        </ol>
        <p>(ch.24 - p.1200)</p>`
      },
      {
        question: `The orange placard image with the number 1 indicates a(n):`,
        answer: `
        <p>explosive</p>`
      },
      {
        question: `The shipping papers for hazardous materials shipped by air are located:`,
        answer: `
        <p>in the cockpit</p>`
      },
      {
        question: `If a hazardous material leak exists, you should:`,
        answer: `
        <p>initiate the notification process.</p>`
      },
      {
        question: `The method for recognizing the presence of hazardous materials that is MOST likely to endanger your health is:`,
        answer: `
        <p>inhaling the released material.</p>`
      },
      {
        question: `Identify FOUR possible ignition sources that may be found at the scene of a hazardous materials incident.`,
        answer: `
        <ul>
        <li>heated surfaces</li>
        <li>open flames</li>
        <li>lightning</li>
        <li>cutting and welding operations</li>
        </ul>`
      },
      {
        question: `identify 3 types of hazard info found in the orange section of the ERG`,
        answer: `
        <ul>
        <li>fire and explosion hazards</li>
        <li>protective clothing to wear</li>
        <li>spill or leak</li>
        </ul>`
      },
      {
        question: `identify 4 specific actions you should take when an incident is suspected to involve criminal or terrorist activity`,
        answer: `
        <ul>
        <li>isolate potentially exposed people or animals using the ERG</li>
        <li>document the bio agent that is suspected of being present</li>
        <li>prevent secondary contamination wait for decon of victims</li>
        <li>establish control zones and access control ponts using the ERG</li>
        </ul>`
      },
      {
        question: `identify the three organizations whose local state and federal req. you need to comply with at the hazmat awareness level`,
        answer: `
        <ul>
        <li>OSHA</li>
        <li>DOT</li>
        <li>EPA</li>
        </ul>`
      },
      {
        question: `Identify your FOUR main responsibilities at the Awareness level.`,
        answer: `
        <ul>
        <li>call for trained personnel</li>
        <li>recognize the presence of hazardous materials</li>
        <li>protect yourself</li>
        <li>secure the area</li>
        </ul>`
      },
      {
        question: `Identify THREE types of hazard information found in the orange section of the Emergency Response Guidebook.`,
        answer: `
        <ul>
        <li>fire and explosion hazards</li>
        <li>protective clothing to wear</li>
        <li>spill or leak response actions</li>
        </ul>`
      },
      {
        question: `DOT class 6 division q materials consist of`,
        answer: `
        <p>poisonous material</p>`
      },
      {
        question: `Identify the Emergency Response Guidebook that is opened to the section that lists the UN/NA numbers in order.`,
        answer: `
        <p>Yellow and green label</p>`
      },
      {
        question: `Using the attached ERG, determine the UN/NA number and guide
         number for propane. Select the ERG to look up the correct answer.`,
        answer: `
        <p>UN/NA number 1075 or 1978 and guide number 115</p>`
      },
      {
        question: `Identify the THREE pieces of information that will be found on all shipping papers`,
        answer: `
        <ul>
        <li>proper shipping name</li>
        <li>four-digit UN/NA number</li>
        <li>hazard class</li>
        </ul>`
      },
      {
        question: `using the DOT hazard classification system, certain hazards can be determined by the`,
        answer: `
        <p>color of the label or placard</p>`
      },
      {
        question: `the DOT class for radioactive materials is`,
        answer: `
        <p>7</p>`
      },
      {
        question: `the type of material found in DOT class 2 div. 2 is an`,
        answer: `
        <p>liquefied gas</p>`
      },
      {
        question: `highway / railway / airplane /ship`,
        answer: `
        <p>bill of lading / train list / air bill / dangerous cargo manifest</p>`
      },
      {
        question: `nfpa 704 diamond: blue / red / yellow / white`,
        answer: `
        <p>health / fire / reactivity / special info</p>`
      },
      // { TODO: ?
      //   question: `all of the following may be sensory clues that you can use to
      //    recognize the presence of a hazardous material except`,
      //   answer: `
      //   <p>looking in the health hazard section of the SDS</p>`
      // },
      {
        question: `When trying to identify a specific material that has been delivered by truck,
         one common difficulty you may encounter is that the:`,
        answer: `
        <p>shipment contains a mixed load of hazardous materials</p>`
      },
      {
        question: `To find the appropriate guide page within the Emergency Response Guidebook, you must:`,
        answer: `
        <p>use the four-digit identification number or product name of the material</p>`
      },
      {
        question: `The type of protective action that requires you to
         keep everyone who is not directly involved in the emergency response operations,
         including unprotected emergency responders, away from the incident area is known as:`,
        answer: `
        <p>isolating the area and denying entry</p>`
      },
      {
        question: `A material that is a flammable solid would be classified as a Class ____ hazardous material.`,
        answer: `
        <p>4.1</p>`
      },
      {
        question: `Explosives that have a fire hazard and either a minor blast or minor projection hazard,
         or both, but no mass explosion hazard are in the DOT Class 1, Division:`,
        answer: `
        <p>3</p>`
      },
      {
        question: `The type of material found in DOT Class 2, Division 2 is a(n):`,
        answer: `
        <p>Non-flammable, non-toxic* gases</p>`
      },
      {
        question: `A material that yields oxygen, causing or enhancing
         the combustion of other materials is classified as a(n):`,
        answer: `
        <p>Oxidizer</p>`
      },
    ]
  },
  {
    id: '4',
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
  {
    id: '5',
    img: fireControl,
    name: 'Flashcards: Fire Control',
    description: `
    <p>Loss control is an important component of fire department service delivery with the philosophy of minimizing secondary damage
    to structure and their contents during and after fire control operations.</p>
    `,
    // notes: `
    // <ol>
    // <li>Salvage and overhaul operations are two of the most effective means of loss control.</li>
    // <li>
    // It is very important for fire personnel to identify and protect valuable contents
    // in structures affected by fire as well as searching for hidden fires so
    // rekindling does not occur.
    // </li>
    // <li>
    // Taking a customer-service oriented approach to loss control ensures that citizens’ property is adequately protected
    // and that the reputation of the fire service is held in the highest regard.
    // </li>
    // </ul>
    // `,
    date: '2022-02-21T22:45:34.124Z',
    type: 'flashcards',
    keys: ['fire control', 'flashcards'],
    resources: [
      {
        name: 'Essentials of Fire Fighting. Ch. 17 - FF I - Fire Control',
        link: 'https://www.amazon.com/Essentials-Fire-Fighting-Department-Operations/dp/0133140806/ref=sr_1_2?crid=QX9BOUWPUAG7&keywords=essentials+of+firefighting&qid=1646429625&sprefix=essentials+of+fire+fighting%2Caps%2C104&sr=8-2'
      }
    ],
    questions: [
      {
        question: 'What initial factors must be considered when suppressing fires?',
        answer: `
        <p>Your duties and assigned tasks will depend on your departmental standardization
        procedures(SOPs), your assigned job on your company, the amount of fire involvement,
        and the type of structure involved.
        </p>
        <ul>
        <li>Hoseline selection.</li>
        <li>Nozzle selection.</li>
        <li>Making entry.</li>
        <li>Fire attack.</li>
        <li>Gas cooling.</li>
        <li>Fires in upper levels of structure.</li>
        <li>Below ground structure fires.</li>
        <li>Exposure protection.</li>
        <li>Controlling building utilities.</li>
        </ul>
`
      },
      {
        question: 'What are the factors that must be considered when making entry?',
        answer: `
<p>The IC supervisor will decide where and from what direction to make entry for an interior fire attack.
Generally, attack hoselines are placed to protect firefighters, occupants, and property. However, you should be aware of some of the
factors that are used to make the decision, which include:
</p>
<ul>
<li>Wind direction and velocity</li>
<li>Building construction</li>
<li>Initial fire location</li>
<li>Location of occupants</li>
<li>Exposures</li>
</ul><br/>
<p>Additional pre-entry considerations critical to firefighter safety and effectiveness:</p>
<ul>
<li>Read the fire behavior indicators</li>
<li>Understand the crew's tactical assignment</li>
<li>Identify emergency escape routes</li>
<li>Ensure SCBA is operating functionally</li>
<li>Ensure PASS is functioning</li>
<li>Verify radio transmission</li>
<li>Identify hazards</li>
<li>Evaluate forcible entry requirements</li>
        </ul>
`
      },
      {
        question: 'How do direct attack and combination attack techniques compare with one another?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the main differences between indirect attack and gas cooling techniques?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How does the presence or absence of a standpipe system impact upper level structure fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the main actions that should be taken when attacking a below ground structure fire?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How quickly can floor assemblies over basements reach a point of collapse?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How can using exposure protection or controlling building utilities help in fire control?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the steps that must be taken when supporting a fire protection system at a protected structure?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How should a master stream device be properly deployed?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How should a master stream device be properly deployed?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What situations may require suppression of a class C fire?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are some safety guidelines that can be used when suppressing class C fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How can a class D fire be suppressed?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What steps should be taken when suppressing a vehicle fire?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the factors that influence suppression' +
          'methods in stacked and piled materials, small unattached structures, and trash containers?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are a few of the main causes of ground cover fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How do surface fires and crown fires compare with ground fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What three elements influence ground cover fire behavior?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the parts of a typical ground cover fire?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What types of protective clothing and equipment can be used when fighting ground cover fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How do direct attack and indirect attack methods for ground cover fires compare with one another?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What safety principles and practices should firefighters use when fighting ground cover fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the priorities that must be considered when beginning fire ground operations?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the fire ground roles a Firefighter II may need to coordinate at an accident?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How should command be established at an incident?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What hazards may be present at fires in underground spaces?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What safety precautions should be taken at flammable/combustible liquid fire incidents?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How do suppression methods for water-based and non-water based suppression systems differ?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'What are the ways water can be used to control Class B fires?',
        answer: `
        <p>...</p>
        <ul>
        <li>...</li>
        </ul>
`
      },
      {
        question: 'How do suppression methods' +
          ' for bulk transport vehicle fires and flammable gas incidents compare with one another?',
        answer: `
        <p>...</p>
`
      },
    ],
    notes: `
    <ol>
    <li>DO NOT open the door until you have a changed hoseline and are ready to control the
    conditions encountered.</li>
    <li>Basement fires weaken the main floor of a structure creating a constant danger of structural collapse.</li>
    <li>Thermal imagers (TI) will not always provide an accurate assessment of the structural integrity of the floor system.</li>
    <li>Natural gas that leaks underground in wet soil can lose its odorant and become difficult to detect without instruments.</li>
    <li>Solar panels generate current whenever there is a light source (sunlight, moonlight, artificial lighting) and are always energized (one solar panel can generate
    enough power to kill a person).</li>
    <li>Added water weight from master stream operations increases the potential for structural collapse.</li>
    <li>Before initiating fire suppression activities, stop the flow of electricity to the device involved.</li>
    <li>Assume that all power energized until the power company informs you otherwise.</li>
    <li>Only personnel who are properly trained and equipped for confined-space entry should enter a utility vault.</li>
    <li>Before cutting into walls and ceiling that may contain electrical wiring or gas piping,
    verify with the IC that electrical and gas utilities have been shut off.</li>
    <li>[Electrical Emergencies] To exit a ground gradient area, keep both feet in contact with each other and hop or shuffle out of the affected area.</li>
    <li>[Vehicle fire attack] There may be no visual indicators that a vehicle uses an alternative fuel source.</li>
    <li>[Vehicle fire attack] Do not cut contact any orange, blue, or yellow color-coded electrical cables or components in electric or hybrid vehicles.</li>
    <li>[Trash Container Fires] Ground cover fires can be deadly to firefighters even if they are working in very light fuel or working
    during the overhaul phase of an operation.</li>
    <li>Do not allow additional assigned duties to prevent tou from deploying in your primary rescue capacity when working as a RIC/RIT member.</li>
    <li>PPE soiled with flammable and combustible liquids may ignite when exposed to heat.</li>
    <li>Only firefighters who have practiced using hoselines for crew protection should do so during an emergency.</li>
    <li>If gas is burning from a broken gas pipe, do not extinguish the fire. Provide protection for exposures.</li>
    </ol>
    `,
  },
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
