# Yohannes Azmeraw | Portfolio

My personal portfolio website. It shows who I am, the projects I have built, and the services I offer to companies.

I built it from scratch while learning React, so the code is kept simple and easy to read: small components, plain CSS and no extra libraries beyond routing.

## Pages

- **Home**: short introduction and links to my work and contact page
- **Projects**: cards for the websites and software I have built
- **Services**: how I work and what I can build for a company
- **About**: my story, education and experience, with a clickable photo
- **Contact**: a form with validation, plus quick answers to common questions

## Built with

- [React](https://react.dev/) for the user interface
- [React Router](https://reactrouter.com/) for moving between pages
- [Vite](https://vite.dev/) for development and building
- Plain CSS with variables for colors and spacing
- [Formspree](https://formspree.io/) to receive contact messages
- [Vercel](https://vercel.com/) for hosting

## What I practiced

- Reusable components and props (`ProjectCard`, `ServiceCard`, `PageHeader`)
- Keeping content in data files, separate from layout
- Responsive design with CSS Grid, media queries and a mobile menu
- Controlled forms with `useState`, validation and `fetch`
- A custom hook (`usePageTitle`) for page titles
- Git, GitHub and deployment

## Project structure

```
src/
├── assets/        images
├── components/    reusable pieces (Navbar, Footer, cards, ContactForm)
├── data/          text and content (profile, projects, services, FAQs)
├── hooks/         custom hooks
├── pages/         one file per page
├── styles/        global styles
├── App.jsx        routes
└── main.jsx       entry point
```

## Run it on your computer

You need [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/yoniaz4/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open the link shown in the terminal (usually `http://localhost:5173`).

To create the production build:

```bash
npm run build
npm run preview
```

## Contact form setup

The form sends messages through Formspree. To use your own form:

1. Create a free form at [formspree.io](https://formspree.io/) and copy its URL.
2. Create a `.env` file in the project root:

   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
   ```

3. Restart the dev server.

If no endpoint is set, the form opens the visitor's email app instead.

## Make it your own

If you want to use this project as a base, change the content in these files:

| What | File |
|---|---|
| Name, email, social links | `src/data/profile.js` |
| Projects | `src/data/projects.js` |
| Services and process steps | `src/data/services.js` |
| About text | `src/data/about.js` |
| FAQs | `src/data/faqs.js` |
| Photo | `src/assets/profile.jpg` |
| Colors | `src/styles/global.css` |

## Contact

- GitHub: [@yoniaz4](https://github.com/yoniaz4)
- LinkedIn: [Yohannes Azmeraw](https://www.linkedin.com/in/yohannes-azmeraw-b47112401)
