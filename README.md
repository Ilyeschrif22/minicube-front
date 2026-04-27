# Minicube Portfolio

Personal portfolio website built with React.  
It showcases profile information, selected projects, and a contact section in a clean single-page experience.

<img width="1830" height="882" alt="image" src="https://github.com/user-attachments/assets/212060d6-65f9-48c3-85ec-0d8cf8611f0c" />


## Overview



This project is focused on:

- Presenting personal branding and engineering profile
- Displaying curated project cards with category filters
- Providing a responsive, modern UI for desktop and mobile

Main sections:

- Hero
- About Me
- Projects
- Contact

## Tech Stack

- React 19
- React Router DOM
- CSS (component-based styles)
- Create React App tooling

## Project Structure

```text
src/
  components/
    about-me/
    contact/
    header/
    hero/
    navbar/
    projects/
    slidePannel/
    swiper/
  App.js
  App.css
  index.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm start
```

Open `http://localhost:3000`.

### 3. Build for production

```bash
npm run build
```

The optimized output will be generated in the `build/` folder.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Creates a production build
- `npm test`: Runs tests in watch mode
- `npm run eject`: Ejects CRA configuration (irreversible)

## Customization Guide

### Update About Section

Edit:

- `src/components/about-me/aboutme.jsx`
- `src/components/about-me/styles.css`

### Update Projects Content

Project data is currently static and lives in:

- `src/components/projects/projects.jsx`

You can edit:

- Project name
- Description
- Category
- Status and outcome
- Tags
- Links (repository/demo)
- Thumbnail path

Project card styling:

- `src/components/projects/styles.css`

### Update Navigation and Hero

Edit:

- `src/components/navbar/navbar.jsx`
- `src/components/navbar/styles.css`
- `src/components/hero/hero.jsx`
- `src/components/hero/styles.css`

### Update Contact Section

Edit:

- `src/components/contact/Contact.jsx`
- `src/components/contact/styles.css`

## Routing

Current routes:

- `/` : full homepage with sections
- `/projects` : projects-focused view

Routing is defined in:

- `src/App.js`

## Assets

Static images/icons are stored in:

- `public/images`
- `public/icons`
- `public/logo`

When adding a new project thumbnail, place the image under `public/images` and reference it like:

```js
thumbnail: "/images/your-image-file.png"
```

## Deployment

Any static hosting that supports SPA fallback works:

- Vercel
- Netlify
- GitHub Pages
- Render (static site)

General deployment flow:

1. Run `npm run build`
2. Deploy the `build/` directory
3. Configure SPA fallback to `index.html`

## Maintenance Notes

- Keep project card content concise to preserve layout balance
- Re-run `npm run build` before deploying
- Keep image dimensions reasonably consistent for cleaner cards

## License

This project is private and intended for personal portfolio use.
