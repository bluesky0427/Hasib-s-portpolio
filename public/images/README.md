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
├── woocommerce-electronics-marketplace/
│   ├── woo-electronics.png
│   ├── woo-dashboard.png
│   └── woo-lighthouse.png
├── woocommerce-membership-media/
│   ├── woo-membership.png
│   ├── woo-course.png
│   └── woo-members.png
├── woocommerce-luxury-consignment/
│   ├── woo-consignment.png
│   ├── woo-seller-portal.png
│   └── woo-review.png
├── woocommerce-b2b-replenishment/
│   ├── woo-replenishment.png
│   ├── woo-forecast.png
│   └── woo-dashboard.png
├── woocommerce-travel-bookings/
│   ├── woo-travel.png
│   ├── woo-itinerary.png
│   └── woo-map.png
│
├── wordpress-headless-gatsby/
│   ├── wp-headless.png
│   ├── wp-blocks.png
│   └── wp-story.png
├── wordpress-education-hub/
│   ├── wp-education.png
│   ├── wp-search.png
│   └── wp-dashboard.png
├── wordpress-enterprise-intranet/
│   ├── wp-intranet.png
│   ├── wp-kb.png
│   └── wp-dashboard.png
├── wordpress-nonprofit-impact/
│   ├── wp-nonprofit.png
│   ├── wp-microsite.png
│   └── wp-donation.png
├── wordpress-hospitality-experiences/
│   ├── wp-hospitality.png
│   ├── wp-itinerary.png
│   └── wp-concierge.png
│
├── product-analytics-platform/
│   ├── fullstack-analytics.png
│   ├── fullstack-funnels.png
│   └── fullstack-dashboard.png
├── fullstack-marketplace/
│   ├── fullstack-lending.png
│   ├── fullstack-onboarding.png
│   └── fullstack-portfolio.png
├── fullstack-smart-manufacturing/
│   ├── fullstack-manufacturing.png
│   ├── fullstack-telemetry.png
│   └── fullstack-maintenance.png
├── fullstack-learning-platform/
│   ├── fullstack-learning.png
│   ├── fullstack-cohort.png
│   └── fullstack-progress.png
├── fullstack-logistics-orchestration/
│   ├── fullstack-logistics.png
│   ├── fullstack-map.png
│   └── fullstack-incident.png
│
├── automation-zapier-airtable/
│   ├── automation-ops.png
│   ├── automation-dashboard.png
│   └── automation-zaps.png
├── automation-partner-onboarding/
│   ├── automation-partner.png
│   ├── automation-playbook.png
│   └── automation-digest.png
├── automation-finance-reconciliation/
│   ├── automation-finance.png
│   ├── automation-dashboard.png
│   └── automation-approvals.png
├── automation-field-services/
│   ├── automation-dispatch.png
│   ├── automation-scheduler.png
│   └── automation-sms.png
├── automation-ecommerce-marketing/
│   ├── automation-marketing.png
│   ├── automation-cohorts.png
│   └── automation-journeys.png
│
├── healthcare-telemedicine-app/
│   ├── health-telemedicine.png
│   ├── health-consult.png
│   └── health-intake.png
├── healthcare-care-coordination/
│   ├── health-coordination.png
│   ├── health-dashboard.png
│   └── health-messaging.png
├── healthcare-research-portal/
│   ├── health-research.png
│   ├── health-eligibility.png
│   └── health-schedule.png
├── healthcare-remote-monitoring/
│   ├── health-monitoring.png
│   ├── health-clinician.png
│   └── health-patient.png
└── healthcare-lab-automation/
    ├── health-lab.png
    ├── health-intake.png
    └── health-results.png
```

## Image Requirements

- **Format**: PNG, JPG, or WebP
- **Recommended size**: 
  - Shopify projects: 1920x1200px or 1600x1200px (4:3 or 16:10) for deeper canvas
  - Other galleries: 1920x1080px or 1600x900px
  - Portrait photo: 800x1000px or similar portrait orientation
- **File naming**: Use the exact file names listed above (case-sensitive). Shopify folders expect sequential numbering (`1.png`, `2.png`, … `12.png`).

## Visual Modes & Suggested Image Types

Each project now renders its media differently to showcase specific skills. Capture real screenshots or photos that reinforce the story for each mode.

### Case Study (Ridleys, The Helm, Healthcare)
- `1.png`: flagship hero experience or end-to-end journey.
- `2.png – 6.png`: annotated feature flows (personalization, bundling, service tooling).
- `7.png – 12.png`: deep dives (dashboards, configuration screens, checkout innovations).

### Process (Pet Valu, Willow Park Village, WordPress)
- `1.png`: overview of the entire execution layer.
- `2.png – 5.png`: phase visuals (discovery, build, launch, optimization).
- `6.png – 12.png`: internal tooling, collaboration assets, service scheduling.

### Tech Stack (Ridleys, The Shoe Company, Full-stack builds)
- `1.png`: combined architecture view.
- `2.png – 5.png`: front-end, middleware, and backend interfaces.
- `6.png – 12.png`: developer tooling, monitoring, deployment, or integration surfaces.

### DataViz (Sharpei, Automation)
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


