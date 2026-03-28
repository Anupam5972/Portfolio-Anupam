# Anupam Moharana Portfolio

Personal portfolio website built with Vue 3 and Vite.

Live website: [https://anupam5972.github.io/Portfolio-Anupam/](https://anupam5972.github.io/Portfolio-Anupam/)

## Overview

This project is a multi-page portfolio site that highlights:

- Home overview and introduction
- Experience timeline
- Project archive
- Lab / experiments section

The site is designed to work well across desktop and mobile devices, with a mobile-friendly collapsible navigation and responsive layouts across all pages.

## Tech Stack

- Vue 3
- Vite
- Vue Single File Components
- CSS with shared global styling

## Project Structure

- `index.html` for the home page
- `experience/index.html` for the experience page
- `projects/index.html` for the projects page
- `lab/index.html` for the lab page
- `src/components` for reusable UI pieces
- `src/views` for page-level views
- `src/assets` for shared styles and assets
- `src/data/portfolio.js` for portfolio content

## Local Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment

The site is configured for GitHub Pages with the Vite base path:

```js
/Portfolio-Anupam/
```

That maps to:

`https://anupam5972.github.io/Portfolio-Anupam/`

## Recent Improvements

- Responsive updates across all pages for mobile devices
- Improved spacing, wrapping, and overflow handling
- Better mobile treatment for cards, timeline, and hero sections
- Collapsible mobile navigation that shows the active page label

