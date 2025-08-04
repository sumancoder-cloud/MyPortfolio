# MyPortfolio

[![Demo](https://img.shields.io/badge/Demo-Live-orange?style=flat-square&logo=link)](https://portfolio-n52rmvqrg-tati-suman-yadavs-projects.vercel.app/dynamic-home)


A personal developer portfolio showcasing dynamic pages, interactive components, and a contact form backend.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Live Demo](#live-demo)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamic Home page with a hero section and GitHub activity feed
- Interactive Skills Lab featuring performance metrics and certification badges
- Experience Journey timeline with downloadable resources
- Project Showcase page highlighting past work
- Professional Story with an interactive timeline and culture deck
- Connect & Collaborate page with a contact form, calendar booking, and social links
- Responsive design powered by Tailwind CSS
- State management using Redux Toolkit
- Charting and data visualization with Recharts and D3
- Smooth animations via Framer Motion
- Secure server-side contact form built with Express and Nodemailer

## Technologies

### Front-End

- React 18
- Vite 5
- React Router DOM 6
- Redux Toolkit
- Tailwind CSS
- React Hook Form
- Framer Motion
- Lucide React Icons
- Recharts & D3 for charts
- date-fns for date utilities

### Back-End

- Node.js & Express 5
- Nodemailer for email handling
- body-parser for JSON parsing
- CORS to allow cross-origin requests

### Dev & Build

- Vite Plugin React
- TypeScript path resolution (vite-tsconfig-paths)
- Tailwind CSS plugins: forms, typography, aspect-ratio, container-queries, line-clamp, elevation, fluid-type, animate
- ESLint with React presets
- PostCSS & Autoprefixer

## Project Structure

```
/ (repository root)
├── devportfolio_pro/          # Front-end source
│   ├── public/                # Static assets & HTML templates
│   ├── src/                   # React application source code
│   │   ├── components/        # Shared UI components
│   │   ├── pages/             # Route-level pages and their components
│   │   ├── data/              # JSON and mock data files
│   │   └── App.jsx
│   ├── server.js              # Express server for contact API
│   ├── .env                   # Environment variables for front & back end
│   └── package.json           # Front-end & server dependencies and scripts
├── package.json               # Root config (if applicable)
└── README.md                  # Project documentation (this file)
```

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd devportfolio_pro
```

2. Install dependencies for both front-end and back-end:

```bash
npm install
```

## Configuration

Copy and update the `.env` file in the `devportfolio_pro` folder with your own keys:

```ini
# Supabase
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-anon-key>

# API Keys
VITE_OPENAI_API_KEY=<your-openai-key>
VITE_GEMINI_API_KEY=<your-gemini-key>
VITE_ANTHROPIC_API_KEY=<your-anthropic-key>
VITE_PERPLEXITY_API_KEY=<your-perplexity-key>

# Analytics & Ads
VITE_GOOGLE_ANALYTICS_ID=<your-ga-id>
VITE_ADSENSE_ID=<your-adsense-id>

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=<your-stripe-key>

# Contact Form (Gmail SMTP)
EMAIL_USER=<your-gmail-address>
EMAIL_PASSWORD=<your-gmail-app-password>

# Server
PORT=3001
```

## Live Demo

[View the live portfolio here](https://your-portfolio-link.com)

## Usage

### Start Front-End

```bash
npm run start
```

- Opens the Vite dev server at `http://localhost:3000`

### Run Back-End (Contact API)

In a separate terminal, from the same directory:

```bash
node server.js
```

- Express server will run on `http://localhost:3001`

### Build for Production

```bash
npm run build
npm run serve
```

- Builds the optimized production bundle and previews it

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run start`   | Launch Vite development server (port 3000)   |
| `npm run build`   | Build production assets with source maps     |
| `npm run serve`   | Serve the production build for preview       |

## Contributing

Contributions are welcome. Please fork the repository, create a feature branch, submit a pull request, and adhere to the existing code style.

## License

This project is licensed under the MIT License.
