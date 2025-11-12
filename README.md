# Portfolio — Hasibuzzaman

Modern portfolio focused on CMS (Shopify, WordPress) and full‑stack projects. No CTA and no contact info displayed (Upwork‑compliant). Image areas show placeholders like "add image showing… folder/filename".

## Tech
- Next.js 14 (App Router), React 18
- Tailwind CSS
- TypeScript

## Scripts
- dev: `npm run dev`
- build: `npm run build`
- start: `npm run start`

## Structure
- `app/` pages (`/`, `/projects`, `/projects/[slug]`, `/services`, `/about`)
- `components/` shared UI (ImagePlaceholder, ProjectCard, FilterBar)
- `data/projects.js` project data (many Shopify/eCommerce examples)

## Images

### Where to Place Images

**All images should be placed in the `public/images/` directory**, organized by project folder.

### Quick Setup

1. **Run the folder creation script** (PowerShell):
   ```powershell
   .\create-image-folders.ps1
   ```
   Or manually create folders in `public/images/` matching the folder names in `data/projects.js`.

2. **Add your images** to the corresponding folders with the exact file names specified in `data/projects.js`.

3. **Image structure** (see `public/images/README.md` for the full list):
   ```
   public/images/
   ├── brand/
   │   └── hasib-portrait.png
   ├── ridleys/
   │   ├── 1.png … 12.png
   ├── petvalu/
   │   ├── 1.png … 12.png
   ├── the-shoe-company/
   │   ├── 1.png … 12.png
   ├── willow-park-village/
   │   ├── 1.png … 12.png
   ├── the-helm/
   │   ├── 1.png … 12.png
   ├── sharpei/
   │   ├── 1.png … 12.png
   └── … (additional project folders)
   ```

### Image Requirements

- **Format**: PNG, JPG, JPEG, or WebP
- **Recommended size**: 1920x1200px, 1600x1200px, or similar 4:3 / 16:10 aspect ratio for project images (larger canvases now render better)
- **Portrait photo**: 800x1000px or similar for the hero section
- **File names**: Must match exactly (case-sensitive) as specified in `data/projects.js` (Shopify projects expect sequential names such as `1.png`, `2.png`, …)

### How It Works

- Images are served from `public/images/{folder}/{file}`
- If an image is missing, a placeholder will show with the expected path
- See `public/images/README.md` for complete folder structure and file naming guide

## Compliance
- No direct contact information is shown.
- Location hidden.
- NDA items marked and anonymized.

## Deploy

### Vercel
1. Push this repo to GitHub.
2. Import to Vercel, Framework Preset: Next.js.
3. Build command: `next build`, Output: default.
4. Deploy.

### Render.com
1. Push this repo to GitHub.
2. Create a new **Web Service** on Render.
3. Connect your GitHub repository.
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node (use the latest LTS version)
5. The app will automatically bind to `0.0.0.0` and use the `PORT` environment variable provided by Render.
6. Deploy.

## Troubleshooting

### Connection Timeout Error

If you see a connection timeout error when running `npm run dev`, this is usually Next.js trying to check for updates. The dev server should still work despite this error. To disable these checks:

1. Set environment variable: `NEXT_TELEMETRY_DISABLED=1`
2. Or the error can be safely ignored - the dev server will still function normally

## Image Files Location

See `public/images/README.md` for detailed information about image folder structure and file naming.
