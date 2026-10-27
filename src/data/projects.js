// Project content. To add a project, copy one of the objects below and edit it.
// Screenshots live in /public/images and are referenced from the site root.

// The flagship project, shown large at the top of the Projects section.
export const featured = {
  title: 'MCO: Multi-Criteria Optimization Scheduling',
  label: 'Final-year project, built solo',
  summary:
    'A project scheduling system that decides what a software team should work on next, and who should do it, by scoring every task against five weighted criteria instead of a single deadline.',
  points: [
    'Scores each task on deadline urgency, developer skill match, dependency readiness, business value and effort, with manager-adjustable weights.',
    'Holds blocked tasks behind ready ones and flags circular dependencies, so every schedule can actually be followed.',
    'Shows a score breakdown for each task, so a manager can see why it ranks where it does.',
    'Role-based access for admins, managers and developers, with JWT login, hashed passwords and rate-limited sign-in.',
  ],
  role: 'Sole developer: requirements, scheduling engine, database, API, every screen of the frontend, security and deployment.',
  tags: [
    'React',
    'Redux Toolkit',
    'React Router',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Vercel',
  ],
  links: [
    { label: 'Live demo', href: 'https://imcpss.vercel.app' },
    {
      label: 'README and screenshots',
      href: 'https://github.com/jayman00909/mco-scheduling-system',
    },
  ],
  images: [
    {
      src: '/images/mco/schedule.png',
      alt: 'MCO schedule page: tasks ranked by priority score, with the five criteria weights shown above the table.',
      width: 1897,
      height: 927,
    },
    {
      src: '/images/mco/project-board.png',
      alt: 'MCO task board: each task card shows its deadline, effort, required skills, assigned developer and priority score.',
      width: 1886,
      height: 925,
    },
    {
      src: '/images/mco/manager-dashboard.png',
      alt: 'MCO manager dashboard: projects with task counts and completion.',
      width: 1918,
      height: 927,
    },
  ],
}

// Smaller projects, shown as cards.
export const projects = [
  {
    title: 'Auto Loan Calculator',
    label: 'Personal project',
    description:
      'Works out the monthly payment, total interest and total cost of a vehicle loan from the price, down payment, interest rate and term.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: {
      src: '/images/projects/loan-calculator.png',
      alt: 'Auto Loan Calculator with the fields filled in and the monthly payment, total interest and total paid shown below.',
      width: 1280,
      height: 800,
    },
    links: [
      { label: 'Live demo', href: '/demos/loan-calculator/index.html' },
    ],
  },
  {
    title: 'Creator Profile Page',
    label: 'Personal project',
    description:
      'A profile page with a stats row, tabbed About, Portfolio, Testimonials and Contact sections, and a light and dark theme switch. The person shown is fictional.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: {
      src: '/images/projects/creator-profile.png',
      alt: 'Creator profile page for a fictional creator, with a stats row and tabs for About, Portfolio, Testimonials and Contact.',
      width: 1280,
      height: 800,
    },
    links: [
      { label: 'Live demo', href: '/demos/creator-profile/index.html' },
    ],
  },
  {
    title: 'Fylo Landing Page',
    label: 'Data Quotient training project',
    description:
      'A file-storage landing page built from a reference design: hero, productivity section, testimonial, early-access email form and a multi-link footer.',
    tags: ['React', 'Vite', 'CSS'],
    image: {
      src: '/images/projects/fylo.png',
      alt: 'Fylo landing page hero with the headline "All your files in one secure location, accessible anywhere".',
      width: 1280,
      height: 800,
    },
    links: [{ label: 'Live demo', href: '/demos/fylo/index.html' }],
  },
  {
    title: 'Credit Card Checkout Form',
    label: 'Personal project',
    description:
      'A checkout form that formats the card number and expiry date as you type and validates every field before submitting. For demonstration only; no payments are processed.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: {
      src: '/images/projects/credit-card.png',
      alt: 'Credit card checkout form with a demo-only notice and the cardholder name, card number, expiry date and CVV filled in.',
      width: 1280,
      height: 800,
    },
    links: [
      { label: 'Live demo', href: '/demos/credit-card/index.html' },
    ],
  },
]

// Smaller builds recreated from existing designs to practise layout and responsive CSS.
export const practice = [
  'BoostUp app landing page',
  'Positivus agency landing page',
  'PraRoz landing page with login card',
  'Snap landing page with dropdown navigation',
  'Optinet landing page (React)',
  'Abordi landing page',
  'Frontend Mentor: Fylo two-column layout',
  'Frontend Mentor: intro section with dropdown navigation',
]
