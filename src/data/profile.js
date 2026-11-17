// Personal details and written content live here so you can edit them in one place.
// Everything in this file is shown publicly on the website.
const profile = {
  name: 'Samuel Damilare Amos',
  role: 'Frontend Developer',
  intro:
    "I'm Samuel Damilare, a frontend developer who works with HTML, CSS, JavaScript and React. I enjoy taking a design and turning it into a website that's easy to use on a phone or computer.",
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
    "I'm a frontend developer and Software Engineering graduate who enjoys building websites that are clear, responsive and easy to use. I work mainly with HTML, CSS, JavaScript and React, and I pay attention to the details that make a page feel right, from its layout and spacing to how it works on a phone.",
    'One of my biggest projects so far is MCO, a full-stack scheduling system I built for my final-year project. I handled the frontend, backend, database and scheduling logic myself. It gave me experience taking an idea from planning through development to deployment.',
    "I also completed Data Quotient's Frontend Engineering programme in 2025, where I built pages from design references and strengthened my responsive development skills. I'm looking to keep growing as a developer while contributing to a team or helping clients bring their ideas online.",
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
