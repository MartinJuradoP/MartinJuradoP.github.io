# Martin Jurado Pedroza | Executive Portfolio

A premium executive personal website for Martin Jurado Pedroza, Technology, Data & AI Executive Advisor. Built with React + Vite + Tailwind CSS + Framer Motion and fully Dockerized for local development.

## Features

- **React + Vite** - Fast, modern frontend
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Subtle, refined animations
- **Premium Dark Theme** - Executive-level design with gold accents
- **Fully Responsive** - Desktop-first, adapts to all screens
- **Docker Development** - Everything runs in containers
- **GitHub Pages Ready** - Configured for deployment to `https://MartinJuradoP.github.io`

## Design

The site features:
- **Split Hero** - Text on left, portrait image on right
- **Executive Positioning** - Board advisor, transformation leader
- **Refined Animations** - Staggered fade-in effects, subtle motion
- **Premium Typography** - Serif name (Playfair Display), sans-serif body (Inter)
- **Gold Accent** - Premium accent color (#d4a574)
- **Minimal, Clean** - No bright colors, no startup aesthetic

## Local Development

### Start without Docker (if Node.js is installed)
```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`

### Start with Docker (Recommended)

```bash
docker compose up --build
```

App runs at `http://localhost:5173`

Changes to source files are reflected immediately via hot module replacement (HMR).

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with split layout
│   ├── About.jsx           # Executive background & expertise
│   ├── Advisory.jsx        # Advisory services & expertise areas
│   └── Contact.jsx         # Contact CTA
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles, Tailwind directives

Docker files:
├── Dockerfile              # Node 20 Alpine with Vite dev server
├── docker-compose.yml      # Service config with volume mounts
└── .dockerignore           # Excludes node_modules, builds from Docker

Configuration:
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theme extension (gold colors)
├── postcss.config.js       # PostCSS with Tailwind & Autoprefixer
└── package.json            # Dependencies & scripts
```

## Adding Your Profile Image

The hero section includes a placeholder for your portrait. To add your image:

### Option 1: With background/lighting
1. Place your portrait image in `src/assets/profile.jpg` (or `.png`)
2. Update [Hero.jsx](src/components/Hero.jsx) - replace the placeholder div with:

```jsx
<img
  src={import.meta.glob('../assets/profile.*', { eager: true }).default}
  alt="Martin Jurado Pedroza"
  className="w-full h-full object-cover"
/>
```

3. The gradient overlay and glow effects will blend your image into the background

### Option 2: Without background (transparent/PNG)
1. Save your portrait as `src/assets/profile.png` (with transparent background)
2. Same import as above - the rounded corners and glow will frame the image nicely

### Option 3: External URL
Replace the placeholder div in Hero.jsx with:

```jsx
<img
  src="https://your-image-url.com/portrait.jpg"
  alt="Martin Jurado Pedroza"
  className="w-full h-full object-cover"
/>
```

**Recommended image specs:**
- Square format (1:1 aspect ratio)
- High resolution (1000px × 1000px or larger)
- Professional portrait
- .jpg, .png, or .webp format

## Docker

### Build
```bash
docker compose build
```

### Run
```bash
docker compose up
```

### Stop
```bash
docker compose down
```

### Run with verbose output
```bash
docker compose up --build --verbose
```

### Access the container shell
```bash
docker compose exec portfolio-web sh
```

## Deployment to GitHub Pages

### Build for production
```bash
npm run build
```

This generates an optimized `dist/` folder ready for deployment.

### Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. In GitHub, open repository settings:
   - `Settings` → `Pages`
2. Under `Build and deployment`, set:
   - `Source`: `GitHub Actions`
3. Push any commit to `main`
4. The workflow will:
   - Install dependencies (`npm ci`)
   - Build the app (`npm run build`)
   - Publish `dist/` to GitHub Pages

No manual commit of `dist/` is required.

## Colors & Styling

**Premium Color Palette:**
- Background: Black to Dark Navy gradient (`#0f0f0f` → `#1a1a2e`)
- Text: Light slate (`#e2e8f0`, `#cbd5e1`)
- Accent: Gold (`#d4a574`)
- Subtle borders: Dark slate with transparency

**Typography:**
- **Serif Font** (Playfair Display): Name, section titles
- **Sans Font** (Inter): Body text, UI elements

**Spacing & Layout:**
- Generous padding (6-8 units)
- Max-width container for sections: `max-w-7xl`
- Asymmetric layouts, not centered

## Environment Variables

None required for this project.

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production (`dist/`)
- `npm run preview` - Preview production build locally

## Notes

- Framer Motion animations are subtle and performant
- All images fade in with slight scale effect
- Text appears in sequence (staggered animations)
- Responsive design uses Tailwind breakpoints (sm, lg, etc.)
- Hot module replacement works inside Docker with bind mounts

## GitHub Pages URLs

- Repository: `https://github.com/MartinJuradoP/MartinJuradoP.github.io`
- Live site: `https://MartinJuradoP.github.io`
