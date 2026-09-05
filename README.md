# PRIME-LOGISTICS

> **Complete Logistics Solution**  
> A modern, premium corporate website for B2B road transportation and logistics headquartered in Chennai, Tamil Nadu, India.

---

## 🚀 Quick Start Guide

Follow these steps to set up and run the project locally after cloning:

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate to the project directory
cd prime-logistics

# 3. Install all project dependencies
npm install

# 4. Start the local development server
npm run dev
```

Once started, open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛠️ Technology Stack

- **Framework**: [React.js](https://react.dev/) (JavaScript / JSX)
- **Build Tool / Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS Design System
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans (Google Fonts)

---

## 📦 Available Scripts

In the project root, you can run:

- `npm run dev`: Starts the local Vite development server at `http://localhost:3000`.
- `npm run dev -- --host`: Exposes the local server to your Wi-Fi network for mobile device testing.
- `npm run build`: Compiles and optimizes the project for production deployment into the `dist/` folder.
- `npm run preview`: Locally previews the production build from the `dist/` folder.

---

## 📁 Project Structure

```
prime-logistics/
├── public/                 # Static public assets (favicons, robots.txt)
├── src/
│   ├── assets/
│   │   └── images/         # Local commercial lorry & fleet image assets
│   │       ├── fleet/      # 12 vehicle category images
│   │       ├── industries/ # 6 industry vertical images
│   │       ├── services/   # Transportation service images
│   │       ├── about/      # Company & network images
│   │       └── hero/       # High-res hero banner image
│   ├── components/         # Reusable UI components (Navbar, Footer, FleetCard, etc.)
│   ├── data/               # Company info, services, fleet, and industry datasets
│   ├── hooks/              # Custom React hooks (useScrollPosition, useCountUp)
│   ├── pages/              # Route pages (Home, About, Services, Fleet, Industries, Contact)
│   ├── App.jsx             # Top-level routing configuration
│   ├── index.css           # Tailwind base styles and custom utility classes
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell & SEO meta configuration
├── tailwind.config.js      # Custom theme, brand navy/amber color tokens
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies & scripts
```

---

## 🌐 Routes & Pages

- **`/`**: Home (Hero, Fleet Strength, Services Overview, Industries, Tejas Logistics synergy)
- **`/about`**: About Prime Logistics, company profile, and mission/vision
- **`/services`**: 5 core transportation services (Road, FTL, Dedicated, Specialized, Pan-India)
- **`/fleet`**: 12 vehicle configurations with category filter tabs
- **`/industries`**: 6 industry verticals served
- **`/contact`**: Chennai headquarters contact information and direct channels

---

## 📄 License

Private / Proprietary — Prime Logistics. All rights reserved.
