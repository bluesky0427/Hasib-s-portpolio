# Image Files Location

## Where to Place Your Images

Place all project images in this `public/images/` directory, organized by project folder.

## Folder Structure

```
public/images/
├── brand/
│   └── hasib-portrait.png
│
├── ridleys/
│   ├── 1.png
│   ├── 2.png
│   └── … up to 12.png
├── petvalu/
│   ├── 1.png
│   ├── 2.png
│   └── … up to 12.png
├── the-shoe-company/
│   ├── 1.png
│   └── … up to 12.png
├── willow-park-village/
│   ├── 1.png
│   └── … up to 12.png
├── the-helm/
│   ├── 1.png
│   └── … up to 12.png
├── sharpei/
│   ├── 1.png
│   └── … up to 12.png
│
├── electronics-marketplace/
│   ├── 1.png
│   ├── 2.png
│   └── … up to 12.png
├── membership-media/
│   ├── 1.png
│   └── … up to 12.png
├── luxury-consignment/
│   ├── 1.png
│   └── … up to 12.png
├── b2b-replenishment/
│   ├── 1.png
│   └── … up to 12.png
├── travel-bookings/
│   ├── 1.png
│   └── … up to 12.png
│
├── headless-publishing/
│   ├── 1.png
│   └── … up to 12.png
├── education-hub/
│   ├── 1.png
│   └── … up to 12.png
├── enterprise-intranet/
│   ├── 1.png
│   └── … up to 12.png
├── nonprofit-microsite/
│   ├── 1.png
│   └── … up to 12.png
├── hospitality-platform/
│   ├── 1.png
│   └── … up to 12.png
│
├── product-analytics/
│   ├── 1.png
│   └── … up to 12.png
├── marketplace-lending/
│   ├── 1.png
│   └── … up to 12.png
├── smart-manufacturing/
│   ├── 1.png
│   └── … up to 12.png
├── learning-platform/
│   ├── 1.png
│   └── … up to 12.png
├── logistics-orchestration/
│   ├── 1.png
│   └── … up to 12.png
│
├── operations-control/
│   ├── 1.png
│   └── … up to 12.png
├── partner-onboarding/
│   ├── 1.png
│   └── … up to 12.png
├── finance-reconciliation/
│   ├── 1.png
│   └── … up to 12.png
├── field-services/
│   ├── 1.png
│   └── … up to 12.png
├── ecommerce-marketing/
│   ├── 1.png
│   └── … up to 12.png
│
├── telemedicine/
│   ├── 1.png
│   └── … up to 12.png
├── care-coordination/
│   ├── 1.png
│   └── … up to 12.png
├── research-portal/
│   ├── 1.png
│   └── … up to 12.png
├── remote-monitoring/
│   ├── 1.png
│   └── … up to 12.png
└── lab-automation/
    ├── 1.png
    └── … up to 12.png
```

## Image Requirements

- **Format**: PNG, JPG, or WebP
- **Recommended size**: 
  - Shopify projects: 1920x1200px or 1600x1200px (4:3 or 16:10) for deeper canvas
  - Other galleries: 1920x1080px or 1600x900px
  - Portrait photo: 800x1000px or similar portrait orientation
- **File naming**: All projects use sequential numbering (`1.png`, `2.png`, … `12.png`). Use the exact file names (case-sensitive).

## Visual Modes & Suggested Image Types

Each project now renders its media differently to showcase specific skills. Capture real screenshots or photos that reinforce the story for each mode.

### Case Study (The Helm, Luxury Consignment, Marketplace Lending, Telemedicine, Remote Monitoring)
- `1.png`: flagship hero experience or end-to-end journey.
- `2.png – 6.png`: annotated feature flows (personalization, bundling, service tooling).
- `7.png – 12.png`: deep dives (dashboards, configuration screens, checkout innovations).

### Process (Pet Valu, Willow Park Village, Membership Media, Education Hub, Nonprofit, Learning Platform, Care Coordination, Lab Automation)
- `1.png`: overview of the entire execution layer.
- `2.png – 5.png`: phase visuals (discovery, build, launch, optimization).
- `6.png – 12.png`: internal tooling, collaboration assets, service scheduling.

### Tech Stack (Ridleys, The Shoe Company, Electronics Marketplace, Travel Bookings, Headless Publishing, Hospitality, Smart Manufacturing, Logistics, Research Portal)
- `1.png`: combined architecture view.
- `2.png – 5.png`: front-end, middleware, and backend interfaces.
- `6.png – 12.png`: developer tooling, monitoring, deployment, or integration surfaces.

### DataViz (Sharpei, B2B Replenishment, Product Analytics, All Automation projects)
- `1.png`: primary KPI dashboard.
- `2.png – 6.png`: retention/utilization charts, lifecycle analytics, circular-economy insights.
- `7.png – 12.png`: workflow builders, cohort explorers, automation logs.

> **Tip:** Show a narrative arc across the sequence (context → system → impact). Use real screenshots or photography, anonymized where required—avoid AI-generated art.

## How It Works

1. Images are served from the `public/images/` directory
2. The path `/images/{folder}/{file}` maps to `public/images/{folder}/{file}`
3. If an image is missing, a placeholder will be shown with the expected file path
4. Images are automatically optimized by Next.js Image component

## Adding Images

1. Create the folder for your project (if it doesn't exist)
2. Place your image files with the exact names specified in `data/projects.js`
3. The images will automatically appear on your portfolio
4. If an image is missing, you'll see a placeholder with the expected path

## Notes

- All image paths are relative to the `public/` directory
- The folder structure matches the `folder` property in `data/projects.js`
- File names must match exactly (case-sensitive)
- Supported formats: PNG, JPG, JPEG, WebP, GIF


