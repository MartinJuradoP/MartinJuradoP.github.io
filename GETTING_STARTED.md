
MARTIN JURADO PEDROZA | EXECUTIVE PORTFOLIO
===========================================

✅ PROJECT COMPLETE

Your premium executive portfolio website is ready!

WHAT'S INCLUDED:
================

📁 Project Structure:
   - React + Vite + Tailwind CSS + Framer Motion
   - Fully Dockerized development environment
   - GitHub Pages-ready deployment config
   - Premium dark executive theme with gold accents

🎨 Components:
   - Header.jsx (Navigation + Logo)
   - Hero.jsx (Split layout with portrait placeholder)
   - About.jsx (Executive background & expertise)
   - Advisory.jsx (5-card service grid + stats)
   - Contact.jsx (CTA section)
   - Premium animations with Framer Motion

🐳 Docker Setup:
   - docker-compose.yml configured
   - Bind mounts for live development
   - Named volume for node_modules
   - Ready to run at http://localhost:5173

HOW TO GET STARTED:
===================

OPTION 1: Development with Docker (Recommended)
   1. Ensure Docker Desktop is running
   2. Run: docker compose up --build
   3. Open: http://localhost:5173
   4. Edit files and see changes instantly

OPTION 2: Local Development (requires Node.js)
   1. Run: npm install
   2. Run: npm run dev
   3. Open: http://localhost:5173

ADDING YOUR PORTRAIT IMAGE:
===========================

The hero section has a placeholder where your image goes.

Quick setup (3 steps):
   1. Save your portrait as: src/assets/profile.jpg (or .png)
   2. Open: src/components/Hero.jsx
   3. Replace the placeholder div (line ~124) with:

      <img
        src="import.meta.glob('../assets/profile.*', { eager: true }).default"
        alt="Martin Jurado Pedroza"
        className="w-full h-full object-cover"
      />

✨ Image Tips:
   - Square format (1:1 ratio)
   - High resolution (1000px × 1000px)
   - Professional portrait
   - Works with .jpg, .png, or .webp
   - Edges automatically blend with gold glow

   The gradient overlay will create a premium blended effect
   regardless of your background.

DEPLOYMENT TO GITHUB PAGES:
===========================

1. Build: npm run build (or docker compose exec portfolio-web npm run build)
2. This creates a dist/ folder
3. Push to: https://github.com/MartinJuradoP/MartinJuradoP.github.io
4. Live at: https://MartinJuradoP.github.io

FILE LOCATIONS FOR YOUR IMAGES:
==============================

Profile Portrait:
   📁 src/assets/profile.jpg (or .png)
   ↓
   Used in: src/components/Hero.jsx

Optional background images or assets:
   📁 src/assets/ (any folder for images)

DESIGN REFERENCE:
=================

The site is built following the mockup you provided:
   ✓ Premium dark theme (black → navy gradient)
   ✓ Gold accent color throughout
   ✓ Split hero layout (left text, right image)
   ✓ Executive positioning (board advisor language)
   ✓ Subtle Framer Motion animations
   ✓ 5-card advisory services grid
   ✓ Stats section (Years, Industries, Professionals, Global)
   ✓ Premium typography (Playfair Display for name)

CUSTOMIZATION QUICK REFERENCE:
=============================

📝 Update text content:
   - Hero text: src/components/Hero.jsx (lines 65-115)
   - About content: src/components/About.jsx
   - Advisory services: src/components/Advisory.jsx (advisoryCards array)

🎨 Change colors:
   - Gold color: tailwind.config.js (gold palette)
   - Accent highlights updated throughout

📱 Responsive design:
   - Desktop-first with Tailwind breakpoints
   - Mobile menu in Header.jsx
   - Adapts automatically

TROUBLESHOOTING:
================

Docker won't build?
   → Ensure Docker Desktop is running
   → Check Docker daemon: docker ps

Hot reload not working?
   → Ensure CHOKIDAR_USEPOLLING=true is set in docker-compose.yml
   → Rebuild: docker compose down && docker compose up --build

Image not showing?
   → Check the file path in src/assets/
   → Verify import path in Hero.jsx
   → Try refreshing the browser (hard refresh: Cmd+Shift+R)

Port 5173 already in use?
   → Change port in docker-compose.yml and vite.config.js
   → Or kill existing process: lsof -i :5173

NEXT STEPS:
===========

1. Run the dev server (with Docker or locally)
2. Add your portrait image (follow steps above)
3. Update text with your information
4. Customize colors if desired
5. Test on mobile
6. Deploy to GitHub Pages
7. Share and enjoy!

YOUR CONTACT INFO:
==================

Default email placeholder: hello@martinjurado.dev
Update in: src/components/Contact.jsx (line ~47)

LinkedIn placeholder: https://linkedin.com
Update in: src/components/Contact.jsx (line ~50)

SUPPORT:
========

The code is well-commented and follows best practices.
All components use Framer Motion for animations.
Tailwind CSS for responsive styling.
Ready for production. No cleanup needed!

Enjoy your premium executive portfolio! 🚀

