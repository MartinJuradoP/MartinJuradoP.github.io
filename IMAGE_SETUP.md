
================================================================================
WHERE TO PLACE YOUR IMAGES
================================================================================

✅ PROJECT COMPLETE - IMAGE PLACEMENT GUIDE

Your portfolio is ready! Now add your professional portrait.

================================================================================
PORTRAIT IMAGE LOCATION
================================================================================

Place your image file here:

   📁 src/assets/profile.jpg
   
   Full path: /Users/martinjurado/workspace/prjs/MartinJP/src/assets/

Supported formats:
   • profile.jpg (JPEG)
   • profile.png (PNG with transparency)
   • profile.webp (WebP)
   • profile from other sources

Image specifications:
   ✓ Format: Square (1:1 aspect ratio)
   ✓ Size: 1000px × 1000px minimum
   ✓ Resolution: High quality, crisp
   ✓ With or without background (both work perfectly!)
   ✓ Professional portrait recommended

================================================================================
HOW TO ADD YOUR IMAGE
================================================================================

STEP 1: Save Your Image
   - Download or export your professional portrait
   - Name it: profile.jpg (or profile.png)
   - Place it in: src/assets/

STEP 2: Update Hero Component
   - Open: src/components/Hero.jsx
   - Find: Line 124 (looks like a placeholder div)
   - Original code:
   
     <div className="aspect-square w-full max-w-sm bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 text-center">
       <div className="space-y-2">
         <p className="text-lg font-semibold">Profile Image</p>
         <p className="text-sm">Place your portrait here</p>
       </div>
     </div>

   - Replace with:
   
     <img
       src="/src/assets/profile.jpg"
       alt="Martin Jurado Pedroza"
       className="w-full h-full object-cover"
     />

STEP 3: Save and Refresh
   - Save the file
   - Refresh your browser
   - Image appears with gold glow effect!

================================================================================
IMAGE TREATMENT & EFFECTS
================================================================================

Your image will automatically get:

✨ Premium Effects:
   • Rounded corners (24px radius)
   • Subtle gold glow behind
   • Gradient overlay blending edges
   • Vignette effect for depth
   • Responsive scaling

The effects are pre-built in the layout:
   <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-t from-gold-500/20 to-transparent blur-3xl" />
   
This creates the premium, cinematic look from the mockup.

================================================================================
ALTERNATIVE: EXTERNAL IMAGE URL
================================================================================

If you prefer to host your image externally:

   <img
     src="https://your-website.com/images/portrait.jpg"
     alt="Martin Jurado Pedroza"
     className="w-full h-full object-cover"
   />

Replace "https://your-website.com/images/portrait.jpg" with your actual URL.

Benefits:
   ✓ Faster delivery via CDN
   ✓ Easier to update without rebuilding
   ✓ Good for social media images

================================================================================
ADDITIONAL IMAGES (OPTIONAL)
================================================================================

Your assets folder structure can include:

   src/assets/
   ├── profile.jpg              (Hero section portrait)
   ├── profile-headshot.png     (Alternative format)
   ├── logo.png                 (Optional branding)
   ├── social-preview.jpg       (For social sharing)
   └── other-images.webp        (Any other assets)

To use additional images anywhere:

   import imageName from '../assets/image.jpg'
   
   <img src={imageName} alt="Description" />

================================================================================
DEVELOPMENT WORKFLOW
================================================================================

1. Place image: src/assets/profile.jpg

2. Update component: src/components/Hero.jsx

3. Start dev server:
   $ docker compose up --build
   OR
   $ npm run dev

4. View at: http://localhost:5173

5. Refresh browser to see changes

6. Hot reload will update as you make changes

================================================================================
DEPLOYMENT WITH IMAGES
================================================================================

When you build for production:

   $ npm run build

The images in src/assets/ are automatically:
   ✓ Optimized
   ✓ Included in dist/
   ✓ Ready for GitHub Pages

Deployment:
   1. Run: npm run build
   2. Commit dist/ folder
   3. Push to GitHub
   4. Images deploy with your site!

================================================================================
IMAGE TIPS & BEST PRACTICES
================================================================================

✓ DO:
   • Use professional, high-quality portraits
   • Keep image crisp and well-lit
   • Use consistent dimensions (square 1:1)
   • Optimize file size (compress .jpg to <200KB)
   • Test on mobile to ensure it looks good

✗ DON'T:
   • Use low-resolution or blurry images
   • Use overly casual photos
   • Use inconsistent aspect ratios
   • Upload huge files (over 1MB)
   • Use generic stock photos

Optimization (optional):
   • Compress .jpg: TinyJPG or Squoosh
   • Convert to .webp for smaller files
   • Use tools like ImageOptim

================================================================================
QUICK CHECKLIST
================================================================================

☐ Professional portrait ready
☐ Image in square format (1:1 ratio)
☐ File named: profile.jpg
☐ Location: src/assets/profile.jpg
☐ Update src/components/Hero.jsx (line 124)
☐ Run: docker compose up --build
☐ Visit: http://localhost:5173
☐ Image displays with gold glow
☐ Test on mobile view
☐ Build for production: npm run build
☐ Deploy to GitHub Pages

================================================================================
WHAT HAPPENS WHEN YOU ADD YOUR IMAGE
================================================================================

Your portrait will appear on the right side of the hero section:

Desktop View:
   [Text on left]  [Portrait on right]
   - Full height
   - Responsive scaling
   - Gold glow effect
   - Smooth fade-in animation

Mobile View:
   [Text]
   [Portrait below]
   - Full width
   - Stacks responsively
   - Same premium effects

================================================================================
FINAL NOTES
================================================================================

• Your image path: /Users/martinjurado/workspace/prjs/MartinJP/src/assets/
• Component file: /Users/martinjurado/workspace/prjs/MartinJP/src/components/Hero.jsx
• Docker ready: Yes ✓
• GitHub Pages ready: Yes ✓

Everything is set up and waiting for your image!

When you're done:
   1. Add image to src/assets/
   2. Update Hero.jsx
   3. Run: docker compose up --build
   4. See your portfolio live at http://localhost:5173

Enjoy! 🚀

