# Samuel Damilare Amos: Portfolio

Source code for my personal portfolio website. I'm a frontend developer with a B.Sc. in Software Engineering (Osun State University), and the site shows my projects, background and contact details.

## What's on the site

- **Projects:** my final-year project (MCO, a full-stack scheduling system), smaller projects with live demos, and a list of practice builds.
- **About:** a short introduction and my skills.
- **Experience and education:** my Data Quotient industrial training (SIWES), final-year project, degree and certifications.
- **Contact:** email, phone, LinkedIn and GitHub.

## Built with

- React 19 and Vite
- Plain CSS with design tokens (colours, fonts and spacing in one file)
- No UI libraries, so the whole site stays small and easy to read
- Hosted on Vercel

## Run it locally

You need [Node.js](https://nodejs.org) installed.

```bash
npm install
npm run dev      # starts a local preview at http://localhost:5173
npm run build    # creates the production build in /dist
npm run lint     # checks the code for common problems
```

## How the project is organised

```
src/
  components/   one React component per section (Header, Hero, Projects, ...)
  data/         the written content: profile.js and projects.js
  styles/       one CSS file per component, plus tokens.css and base.css
public/
  images/       project screenshots
  demos/        small live demos served as static pages
```

To change text or contact details, edit `src/data/profile.js` or `src/data/projects.js`. To change colours or fonts, edit `src/styles/tokens.css`.

## About the live demos

The pages in `public/demos/` are small practice projects served as static pages. The Credit Card Checkout demo is a form exercise only: nothing is sent or stored, and it does not process payments. The Creator Profile demo shows a fictional person.

## Notes

- The MCO project has its own repository and live demo, linked from the Projects section.
- All rights to the content, designs and copy on this site are reserved by the author.
