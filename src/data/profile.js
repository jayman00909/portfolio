// Personal details and written content live here so you can edit them in one place.
// Everything in this file is shown publicly on the website.
const profile = {
  name: 'Samuel Damilare Amos',
  role: 'Frontend Developer',
  intro:
    'I build clean, responsive interfaces with HTML, CSS, JavaScript and React, turning designs into working pages, forms and interactive tools.',
  email: 'ssamueldamilare6@gmail.com',
  phone: '+234 810 295 9360',
  phoneLink: '+2348102959360',
  github: 'https://github.com/jayman00909',
  linkedin: 'https://www.linkedin.com/in/oluwadamilare-samuel-585860383',

  // Short facts shown next to the introduction (all taken from the CV).
  highlights: [
    {
      label: 'Education',
      value: 'B.Sc. Software Engineering, Osun State University',
    },
    {
      label: 'Certified',
      value: 'Frontend Engineering Associate, Data Quotient (2025)',
    },
    {
      label: 'Final-year project',
      value: 'MCO, a full-stack project scheduling system',
    },
  ],

  about: [
    "I'm a frontend developer with a degree in Software Engineering. I turn designs into responsive pages, forms and interactive tools, and I care about layout, spacing and readable code.",
    'My final-year project, MCO, is a full-stack scheduling system that I built on my own. It taught me how a React interface connects to a real API and database, and how to take a project from an empty folder to a live deployment.',
    "In 2025 I completed Data Quotient's Frontend Engineering programme and earned the Frontend Engineering Associate certification.",
  ],

  skills: [
    {
      group: 'Frontend',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Responsive design',
        'Forms and validation',
        'Light / dark theming',
      ],
    },
    {
      group: 'Used in my final-year project',
      items: [
        'Redux Toolkit',
        'React Router',
        'Axios',
        'Node.js and Express',
        'PostgreSQL',
      ],
    },
    {
      group: 'Tools',
      items: ['Git and GitHub', 'Vite', 'Vercel'],
    },
  ],

  experience: [
    {
      title: 'Frontend Engineering Associate Intern',
      place: 'Data Quotient',
      note: 'Industrial training (SIWES), 2025',
      points: [
        'Completed the Frontend Engineering programme and earned the Frontend Engineering Associate certification (September 2025).',
        'Built landing pages from reference designs, including Fylo (hero, productivity section, testimonial card, early-access email capture and footer) and Abordi (device-mockup hero, section navigation and app-store calls to action).',
        'Focused on responsive layout, consistent spacing and clear visual hierarchy across every section.',
      ],
    },
    {
      title: 'Final-year project: MCO scheduling system',
      place: 'Osun State University',
      note: '2026',
      points: [
        'Designed and built a full-stack project scheduling system that ranks tasks and assigns developers using multi-criteria optimisation.',
        'Responsible for requirements, the scheduling engine, the database, the API, every screen of the React frontend, and deployment.',
      ],
    },
  ],

  education: {
    degree: 'B.Sc. Software Engineering',
    place: 'Osun State University',
    note: '2026',
  },

  certifications: [
    { name: 'Frontend Engineering Associate', issuer: 'Data Quotient', date: 'September 2025' },
    { name: 'Introduction to HTML', issuer: 'SoloLearn', date: 'November 2025' },
    {
      name: 'Generative AI, Master',
      issuer: 'Nigeria Learning Passport (Federal Ministry of Education)',
      date: 'July 2025',
    },
    {
      name: 'Working and Collaborating Online',
      issuer: 'Nigeria Learning Passport (Federal Ministry of Education)',
      date: 'July 2025',
    },
  ],
}

export default profile
