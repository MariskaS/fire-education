import nimsImg from './img/nims-scheme.png';
import icsSructure from './img/ics-sructure.png';
import delegatingIncidentManagementResponsibilities from './img/delegating-incident-management-responsibilities.png';
import prevention from '../img/prevention.jpg';

export const ICS_100 = {
  id: '6',
  img: prevention,
  name: 'Flashcards: ICS-100',
  description: `
    <p>ICS 100, Introduction to the Incident Command System, introduces the Incident Command System (ICS) and provides the foundation for higher level ICS training.`,
  date: '2022-02-21T22:45:34.124Z',
  type: 'flashcards',
  keys: ['ICS-100', 'flashcards'],
  resources: [
    {
      name: 'IS-0100.c: An Introduction to the Incident Command System, ICS 100',
      link: 'https://training.fema.gov/is/courseoverview.aspx?code=IS-100.c&lang=en'
    }
  ],
  questions: [
    {
      question: 'What is the Incident Command System?',
      answer: `
        <p>The Incident Command System (ICS) is a standardized approach to incident management that:</p>
        <ul>
        <li>Is used for all kinds of incidents by all types of organizations and at all levels of government; ICS is applicable to small incidents as well as large and complex ones.</li>
        <li>Can be used not only for emergencies, but also for planned events.</li>
        <li>Enables a coordinated response among various jurisdictions and agencies.</li>
        <li>Establishes common processes for incident-level planning and resource management.</li>
        <li>Allows for the integration of resources (such as facilities, equipment, personnel) within a common organizational structure.</li>
        </ul>`
    },
    {
      question: 'ICS as a Component of the National Incident Management System (NIMS)',
      answer: `<p>The National Incident Management System (NIMS) is a systematic,
proactive approach to guide all levels of government, nongovernmental
organizations (NGOs), and the private sector to work together to prevent,
protect against, mitigate, respond to, and recover from the effects of incidents.
NIMS provides a consistent foundation for all incidents,
ranging from daily occurrences to incidents requiring a coordinated Federal response.</p>`
    },
    {
      question: 'NIMS is organized into three major components:',
      answer: `<ul>
<li>Resource Management;</li>
<li>Command and Coordination - including the Incident Command System;</li>
<li>Communications and Information Management;</li>
</ul>`
    },
    {
      question: 'Benefits of ICS',
      answer: `
<p>The Incident Command System (ICS) has positively impacted incident management efforts by:</p>
<ul>
<li>Clarifying chain of command and supervision responsibilities to improve accountability.</li>
<li>Leveraging interoperable communications systems and plain language to improve communications.</li>
<li>Providing an orderly, systematic planning process.</li>
<li>Implementing a common, flexible, predesigned management structure.</li>
<li>Fostering cooperation between diverse disciplines and agencies.</li>
</ul>`
    },
    {
      question: 'ICS helps to ensure:',
      answer: `
<ul>
<li>The safety of responders, community members, and others.</li>
<li>The achievement of incident objectives.</li>
<li>The efficient use of resources.</li>
</ul>`
    },
    {
      question: 'Describe the 14 NIMS management characteristics.',
      answer: `
<ol class="fr-dynamic-content-list">
<li>Common Terminology</li>
<li>Modular Organization</li>
<li>Management by Objectives</li>
<li>Incident Action Planning</li>
<li>Manageable Span of Control</li>
<li>Incident Facilities and Locations</li>
<li>Comprehensive Resource Management</li>
<li>Integrated Communications</li>
<li>Establishment and Transfer of Command</li>
<li>Unified Command</li>
<li>Chain of Command and Unity of Command</li>
<li>Accountability</li>
<li>Dispatch/Deployment</li>
<li>Information and Intelligence Management</li>
</ol>`
    },
    {
      question: 'Common Terminology',
      answer: `Allows diverse incident management and support organizations to work together across a wide variety of emergency functions and hazard scenarios. This common terminology covers the following:
<ul>
<li>Organizational Functions: Major functions and functional units with incident management responsibilities are named and defined. They remain standard and consistent.</li>
<li>Resource Descriptions: Major resources – including personnel, equipment, teams, and facilities – are given common names and are “typed” with respect to their capabilities.</li>
<li>Incident Facilities: Common terminology is used to designate the facilities in the vicinity of the incident area.</li>
</ul>
<p>During an incident:</p>
<ul>
<li>Communications should use common terms.</li>
<li>Organizations should avoid radio codes, agency-specific codes, acronyms, or jargon. Usage of these types of codes may cause confusion or possibly compromise life safety due to a misunderstanding or misinterpretation.</li>
</ul>`
    },
    {
      question: 'Modular Organization',
      answer: `The Incident Command System (ICS) organizational structure develops in a modular fashion based on the incident’s size and complexity.
<ul>
<li>The responsibility for the establishment and expansion of the ICS modular organization rests with the Incident Commander.</li>
<li>As the incident grows more complex, the ICS organization may expand as functional responsibilities are delegated.</li>
</ul>`
    },
    {
      question: 'Management by Objectives',
      answer: `
The Incident Commander or Unified Command (which will be discussed later),
 establishes incident objectives that drive incident operations.
<ul>
<li>Establishing specific, measurable incident objectives.</li>
<li>Identifying strategies, tactics, tasks and activities to achieve the objectives.</li>
<li>Developing and issuing assignments, plans, procedures, and protocols to accomplish identified tasks.</li>
<li>Documenting results for the incident objectives.</li>
</ul>`
    },
    {
      question: 'Incident Facilities and Locations',
      answer: `
Depending upon the incident size and complexity, various types of support facilities
may be established by Incident Command. These designated facilities typically include:
<ul>
<li>Incident Command Post (ICP)</li>
<li>Incident base, staging areas, and camps</li>
<li>Mass casualty triage areas</li>
<li>Point-of-distribution</li>
<li>Emergency shelters</li>
</ul>`
    },
    {
      question: 'Information and intelligence may be gathered from a variety of sources, including:',
      answer: `
<ul>
<li>911 calls</li>
<li>Radio, video and data communications among responders</li>
<li>Situation Reports (SITREPS)</li>
<li>Technical specialists from organizations such as the National Weather Service</li>
<li>Reports from field observers</li>
<li>Geospatial products, such as GIS, etc.</li>
<li>Print, online, broadcast, and social media</li>
<li>Risk assessments</li>
<li>Terroristic or violent threats</li>
<li>Surveillance of disease outbreaks</li>
<li>Structural plans and vulnerabilities</li>
</ul>`
    },
    {
      question: 'ICS Functional Area Descriptions',
      answer: `
<ul>
<li>
Incident Command: Sets the incident objectives, strategies, and priorities, and has overall responsibility for the incident.</li>
<li>Operations: Conducts operations to reach the incident objectives. Establishes tactics and directs all operational resources.</li>
<li>Planning: Supports the incident action planning process by tracking resources, collecting/analyzing information, and maintaining documentation.</li>
<li>Logistics: Arranges for resources and needed services to support achievement of the incident objectives (resources can include personnel, equipment, teams, supplies, and facilities).</li>
<li>Finance/Administration: Monitors costs related to the incident. Provides accounting, procurement, time recording, and cost analyses.</li>
</ul>`
    },
    {
      question: 'ICS Structure',
      answer: `
<p>The standard Incident Command System (ICS) organizational structure is shown here. Incident Command, which could be a single Incident Commander or a Unified Command, will lead the effort and, as needed, assign Command Staff and General Staff. For the remainder of this lesson, we will discuss the Incident Command function and the members of the Command Staff.</p>
<div class="fr-dynamic-content-list__img" style="background-image: url("${icsSructure}")"></div>
`
    },
    {
      question: 'Delegating Incident Management Responsibilities',
      answer: `
<p>For very small, routine, or short-duration incidents, it is possible that the Incident Commander will not establish any of the Staff positions. In this case, the Incident Commander will personally manage all ICS functions.</p>
<div class="fr-dynamic-content-list__img" style="background-image: url("${delegatingIncidentManagementResponsibilities}")"></div>
`
    },
    {
      question: 'ICS Command Staff',
      answer: `
<p>
Depending upon the size and type of incident or event, the Incident Commander may designate personnel to provide information, safety, and liaison services.
 In the Incident Command System (ICS), the Command Staff may include:</p>
<ul>
<li>Public Information Officer, who interfaces with the public and media and/or with other agencies with incident-related information requirements.</li>
<li>Safety Officer, who monitors incident operations and advises the Incident Commander on all matters relating to safety, including the health and safety of incident management personnel.</li>
<li>Liaison Officer, who serves as the Incident Commander’s point of contact for representatives of governmental agencies, non-governmental organizations (NGOs), and private-sector organizations.</li>
</ul>
<p>Incident Commanders may also choose to appoint technical specialists (such as legal, medical, science and technology, or access and functional needs) to act as command advisors.</p>
<p>The Command Staff reports directly to the Incident Commander. In a complex incident, Assistant Officers may be assigned to each of the Command Staff functions.</p>
`
    },
    {
      question: '[Accountability] Dispatch/Deployment',
      answer: `
<p>
Resources should be deployed only when requested or when dispatched
 by an appropriate authority through established resource management systems.</p>
 <p>Resources not requested should refrain from self-dispatching to avoid overburdening the incident command.</p>
`
    },
    {
      question: '[Accountability] Information and Intelligence Management',
      answer: `
<p>Information and intelligence are important in the Incident Command System (ICS).</p>
 <p>Incident management must establish a process for gathering,
  analyzing, assessing, sharing, and managing incident-related
   information and intelligence. In NIMS, "intelligence"
    refers exclusively to threat-related information developed by law enforcement,
  medical surveillance, and other investigative organizations.</p>
`
    },
    {
      question: '[Accountability] Comprehensive Resource Management',
      answer: `
<p>describes standard mechanisms to identify requirements,
 order and acquire, mobilize, track and report, demobilize,
  and reimburse and restock resources such as personnel,
   teams, facilities, equipment and supplies.</p>
`
    },
    {
      question: `Scenario: You are the American Red Cross liaison in the Emergency Operation Center and you print up a list of the location of materials necessary to outfit the shelters. Materials stored in both facilities are adequate to meet the initial needs. Both the College and the Middle School are implementing their respective
       plans and are establishing necessary staffing
       to support the shelter requirements. What NIMS Management Characteristic is being demonstrated?`,
      answer: `
<p>Comprehensive Resource Management</p>
`
    },
    {
      question: `Scenario: Due to the complexity of the incident,
       the Incident Commander has expanded the Operations
        Section to include an Evacuation Group. What NIMS Management Characteristic is being demonstrated?`,
      answer: `
<p>Modular Organization</p>
`
    },
    {
      question: `Scenario: You are the City Fire Chief and are evaluating
       the supervisory structure needed to manage the Incident Command Post staff.
       You are also identifying senior representatives from the Health Care community and from Public Works to help develop objectives to protect
        the residents of the nursing home and the critical water resources of the community.
        Select the three NIMS Management Characteristics you are supporting.`,
      answer: `
<p>Incident Facilities and Locations, Establishment and Transfer of Command, Unified Command</p>
`
    },
    {
      question: `[Establishment and Transfer of Command] Unified Command`,
      answer: `
<p>In a Unified Command there is no single "Commander." Instead the Unified Command manages the incident through jointly approved objectives. Unified Command allows agencies with different legal, geographic, and functional responsibilities to work together effectively
 without affecting individual agency authority, responsibility, or accountability.</p>
 <p>Unified Command is typically established when no single jurisdiction, agency or organization has the authority and/or resources to manage the incident on its own. This can include incidents involving multiple jurisdictions, a single jurisdiction with multiagency involvement,
  or multiple jurisdictions with multiagency involvement.</p>
`
    },
    {
      question: `General Staff immediately come together and begin developing strategies. General Staff Chiefs are:
      1. Evaluating staffing and supervisory needs in the Incident Command Post.
      2. Identifying resource shortfalls.
      3. Updating planning documents.
      What NIMS Management Characteristics are you supporting?`,
      answer: `
<p>Management by Objectives, Incident Action Planning, Manageable Span of Control</p>
`
    },
    {
      question: `Scenario: You are the Operations Section Chief
       at the Incident Command Post and request that all
        response communications be conducted using a pre-determined set of frequencies.
       You also remind everyone in the field to use plain language. What NIMS Management Characteristics are you supporting?`,
      answer: `
<p>Common Terminology, Integrated Communications</p>
`
    },
    {
      question: `Common Terminology`,
      answer: `
<p>In accordance with Common Terminology, you have asked that everyone use plain language to promote understanding between all parties.
</p>
`
    },
    {
      question: `Integrated Communications`,
      answer: `<p>In accordance with Integrated Communications, you have developed
 and implemented a common communications plan by asking that
 all response communications be conducted using a pre-determined set of frequencies.</p>`
    },
    {
      question: `Scenario: The Operations Section has determined that the Emergency Medical Services, the Fire Department, and the School Bus Company will be assigned to the evacuation of the Nursing Home. They will all converge at City Hall and will be dispatched, as appropriate, to begin the
       rapid and safe movement of the residents to their temporary shelter locations.
        What NIMS Management Characteristic is being demonstrated?`,
      answer: `<p>Dispatch/Deployment</p>`
    },
    {
      question: `Scenario: You are the President of Lawrence College. You and the American Red Cross Shelter Manager have contacted the Incident Command Post concerning the ability to meet the nutritional and long term pharmaceutical needs of the elderly residents.
       The Liaison Officer requests assistance from the Emergency Operations Center.
       What NIMS Management Characteristic is being demonstrated?`,
      answer: `<p>Comprehensive Resource Management</p>`
    },
  ],
  notes: `
    <ol>
    <li>ICS is a standardized management tool that allows better coordination and use of resources.</li>
    <li>ICS represents organizational “best practices” and has become the standard for emergency management.</li>
    <li>ICS can be used to manage the response for all incidents and planned events.</li>
    <li>Using ICS for every incident or planned event provides the practice that will help to maintain and improve skills needed to effectively coordinate larger or more complex efforts.</li>
    <li>
    It is important to note that the Incident Command System (ICS)
     is just one part of NIMS. </br>
     <div class="fr-dynamic-content-list__img" style="background-image: url('${nimsImg}');"/>

     </li>
     <li>ICS works! It saves lives!</li>
    </ol>
    `,
}
