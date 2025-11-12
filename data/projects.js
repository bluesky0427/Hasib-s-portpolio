export const projects = [
  // Shopify
  {
    slug: "shopify-ridleys-commerce",
    name: "Ridleys Cycling Commerce Platform",
    category: "Shopify",
    role: "Lead Commerce Engineer",
    timeline: "2024",
    industry: "Cycling & Outdoor Retail",
    liveUrl: "https://www.ridleys.com",
    visualMode: "techStack",
    tech: ["Shopify", "Hydrogen", "Algolia", "Shopify Functions", "TypeScript"],
    summary: "Built a high-performance cycling commerce experience that unifies bike fit services, deep product taxonomies, and omnichannel fulfillment under a single Shopify architecture.",
    goal: "Launch a flexible storefront that showcases specialist bike inventory, supports service scheduling, and keeps merchandising teams moving fast without developer bottlenecks.",
    approach: [
      "Mapped complex bike, gear, and accessory catalogs into Hydrogen-driven collections with smart tags for bike type, brand, and rider intent.",
      "Rolled out Algolia-powered predictive search with SKU-level availability, fit guides, and category-aware merchandising rules.",
      "Built service and financing flows with Shopify Functions, enabling trade-in logic, appointment routing, and post-purchase automation."
    ],
    technicalHighlights: [
      "Hydrogen storefront with incremental static regeneration for 2k+ SKUs and dynamic metafield-driven merchandising.",
      "GraphQL pipelines that sync bike specs, geometry data, and fit notes from ERP into Shopify metafields every 15 minutes.",
      "Custom Functions bundle enabling trade-in eligibility checks and dynamic checkout messaging without third-party apps."
    ],
    results: ["Search-to-cart rate +29%", "Service appointment conversions +41%", "Bundle attach rate +18%"],
    coverImage: { file: "1.png", folder: "ridleys" },
    gallery: [
      { file: "2.png", folder: "ridleys" },
      { file: "3.png", folder: "ridleys" },
      { file: "4.png", folder: "ridleys" },
      { file: "5.png", folder: "ridleys" },
      { file: "6.png", folder: "ridleys" },
      { file: "7.png", folder: "ridleys" },
      { file: "8.png", folder: "ridleys" },
      { file: "9.png", folder: "ridleys" },
      { file: "10.png", folder: "ridleys" },
      { file: "11.png", folder: "ridleys" },
      { file: "12.png", folder: "ridleys" }
    ]
  },
  {
    slug: "shopify-petvalu-experience",
    name: "Pet Valu Unified Experience",
    category: "Shopify",
    role: "Principal Shopify Engineer",
    timeline: "2024",
    industry: "Pet Care Retail",
    liveUrl: "https://www.petvalu.ca",
    visualMode: "process",
    tech: ["Shopify Plus", "Recharge", "LoyaltyLion", "Shopify Flow", "Segment"],
    summary: "Engineered a multi-service pet retail experience that ties AutoShip subscriptions, rewards logic, store operations, and in-store services into a cohesive Shopify Plus stack.",
    goal: "Deliver a digital ecosystem where customers can manage recurring orders, access grooming services, and earn rewards without friction.",
    approach: [
      "Refactored product architecture with subscription-ready bundles and variant metafields to power AutoShip personalization.",
      "Connected LoyaltyLion, Segment, and Shopify Flow to automate rewards, tier upgrades, and offer delivery across channels.",
      "Built store locator and services layer with GraphQL APIs, exposing grooming schedules, dog wash bookings, and adoption events."
    ],
    technicalHighlights: [
      "Recharge subscription orchestration with custom webhooks for multi-pet profiles, allergen preferences, and fulfillment cadence.",
      "Composable services dashboard built with Remix and App Bridge, giving operations teams real-time control over bookings.",
      "Event streaming pipeline using Segment + BigQuery for lifetime value modeling and churn prediction triggers."
    ],
    results: ["AutoShip enrollment +36%", "Rewards redemption +54%", "Service booking NPS 4.7/5"],
    coverImage: { file: "1.png", folder: "petvalu" },
    gallery: [
      { file: "2.png", folder: "petvalu" },
      { file: "3.png", folder: "petvalu" },
      { file: "4.png", folder: "petvalu" },
      { file: "5.png", folder: "petvalu" },
      { file: "6.png", folder: "petvalu" },
      { file: "7.png", folder: "petvalu" },
      { file: "8.png", folder: "petvalu" },
      { file: "9.png", folder: "petvalu" },
      { file: "10.png", folder: "petvalu" },
      { file: "11.png", folder: "petvalu" },
      { file: "12.png", folder: "petvalu" }
    ]
  },
  {
    slug: "shopify-shoe-company",
    name: "The Shoe Company Digital Stack",
    category: "Shopify",
    role: "Lead Commerce Architect",
    timeline: "2024",
    industry: "Footwear & Accessories",
    liveUrl: "https://www.theshoecompany.ca",
    visualMode: "techStack",
    tech: ["Shopify Plus", "Hydrogen", "Algolia", "Contentful", "Shopify Functions"],
    summary: "Delivered a performance-first footwear experience layering personalized merchandising, offer management, and rapid content iteration across 400+ SKUs.",
    goal: "Give merchandising teams tooling to highlight promotions, personalize assortments, and keep inventory in sync across channels.",
    approach: [
      "Implemented Hydrogen hybrid rendering to prefetch hero campaigns while streaming long-tail catalog results.",
      "Built Algolia instant search with brand, fit, and price filters tuned for rapid discovery and promotional pivots.",
      "Created promotion management dashboard with Shopify Functions, enabling non-developer teams to launch tiered offers."
    ],
    technicalHighlights: [
      "Contentful-powered storytelling blocks delivered via GraphQL and cached at the edge for sub-second hero swaps.",
      "Sizing assistant leveraging customer purchase history and returns to surface most-likely-fit recommendations.",
      "Shopify Functions stack for free-shipping thresholds, BOGO logic, and cart messaging without third-party scripts."
    ],
    results: ["Homepage LCP 1.6s", "Promotion launch time -75%", "Email-driven conversions +22%"],
    coverImage: { file: "1.png", folder: "the-shoe-company" },
    gallery: [
      { file: "2.png", folder: "the-shoe-company" },
      { file: "3.png", folder: "the-shoe-company" },
      { file: "4.png", folder: "the-shoe-company" },
      { file: "5.png", folder: "the-shoe-company" },
      { file: "6.png", folder: "the-shoe-company" },
      { file: "7.png", folder: "the-shoe-company" },
      { file: "8.png", folder: "the-shoe-company" },
      { file: "9.png", folder: "the-shoe-company" },
      { file: "10.png", folder: "the-shoe-company" },
      { file: "11.png", folder: "the-shoe-company" },
      { file: "12.png", folder: "the-shoe-company" }
    ]
  },
  {
    slug: "shopify-willow-park-village",
    name: "Willow Park Village Retail Hub",
    category: "Shopify",
    role: "Headless Commerce Architect",
    timeline: "2023",
    industry: "Mixed Retail & Services",
    liveUrl: "https://www.wpv.ca",
    visualMode: "process",
    tech: ["Shopify", "Next.js", "Sanity CMS", "Shopify Functions", "Azure Maps"],
    summary: "Engineered a headless retail directory that lets 50+ merchants share inventory stories, events, and offers while keeping Shopify as the commerce core.",
    goal: "Create a flexible hub where independent retailers can surface products, promotions, and bookings in real time.",
    approach: [
      "Built federated content model in Sanity that feeds tenant landing pages, event calendars, and shoppable lookbooks.",
      "Created multi-tenant Shopify integration with Functions to scope discounts, gift cards, and announcements per retailer.",
      "Implemented proximity-aware store discovery with Azure Maps, highlighting nearest services and booking actions."
    ],
    technicalHighlights: [
      "Edge-rendered Next.js routes that hydrate tenant-specific data via Signed GraphQL requests to Shopify storefront API.",
      "Retailer onboarding console with role-based access, asset approval workflows, and staged publishing.",
      "Automated event syndication pipeline pushing calendar entries to email, SMS, and onsite hero placement."
    ],
    results: ["Retailer content updates 5x faster", "Event RSVP conversions +34%", "Tenant satisfaction score 4.8/5"],
    coverImage: { file: "1.png", folder: "willow-park-village" },
    gallery: [
      { file: "2.png", folder: "willow-park-village" },
      { file: "3.png", folder: "willow-park-village" },
      { file: "4.png", folder: "willow-park-village" },
      { file: "5.png", folder: "willow-park-village" },
      { file: "6.png", folder: "willow-park-village" },
      { file: "7.png", folder: "willow-park-village" },
      { file: "8.png", folder: "willow-park-village" },
      { file: "9.png", folder: "willow-park-village" },
      { file: "10.png", folder: "willow-park-village" },
      { file: "11.png", folder: "willow-park-village" },
      { file: "12.png", folder: "willow-park-village" }
    ]
  },
  {
    slug: "shopify-helm-clothing",
    name: "The Helm Menswear Experience",
    category: "Shopify",
    role: "Lead Digital Tailoring Engineer",
    timeline: "2024",
    industry: "Luxury Menswear",
    liveUrl: "https://thehelmclothing.com",
    visualMode: "caseStudy",
    tech: ["Shopify Plus", "Shopify Markets", "Contentful", "Cloudflare Workers", "Segment"],
    summary: "Crafted a luxury menswear journey with bespoke appointment flows, made-to-measure storytelling, and data-driven merchandising pipelines.",
    goal: "Establish a premium digital flagship that adapts to seasonal drops while supporting stylist-led experiences.",
    approach: [
      "Built modular storytelling sections blending editorial content from Contentful with live product data streams.",
      "Implemented stylist scheduling and clienteling workflows integrated with Shopify customer profiles and notes.",
      "Deployed Cloudflare Worker edge functions to personalize hero content by customer loyalty tier and browsing patterns."
    ],
    technicalHighlights: [
      "Shopify Markets configuration with localized pricing and tax handling for multi-currency high-ticket purchases.",
      "Segment + Klaviyo orchestration layering clienteling cues, made-to-measure reminders, and post-appointment follow-ups.",
      "Image CDN workflows that auto-generate color stories, lookbook collages, and responsive breakpoints for editorial photography."
    ],
    results: ["Made-to-measure bookings +38%", "Content deployment time -60%", "High-value client conversion +24%"],
    coverImage: { file: "1.png", folder: "the-helm" },
    gallery: [
      { file: "2.png", folder: "the-helm" },
      { file: "3.png", folder: "the-helm" },
      { file: "4.png", folder: "the-helm" },
      { file: "5.png", folder: "the-helm" },
      { file: "6.png", folder: "the-helm" },
      { file: "7.png", folder: "the-helm" },
      { file: "8.png", folder: "the-helm" },
      { file: "9.png", folder: "the-helm" },
      { file: "10.png", folder: "the-helm" },
      { file: "11.png", folder: "the-helm" },
      { file: "12.png", folder: "the-helm" }
    ]
  },
  {
    slug: "shopify-sharpei-platform",
    name: "Sharpei Circular Commerce Platform",
    category: "Shopify",
    role: "Platform Engineer",
    timeline: "2023",
    industry: "Beauty & Wellness",
    liveUrl: "https://www.gosharpei.com",
    visualMode: "dataViz",
    tech: ["Shopify Plus", "GraphQL", "Stripe", "PostgreSQL", "Power BI"],
    summary: "Integrated Sharpei’s circular subscription engine directly into Shopify, enabling brands to launch rental, lease-to-own, and subscription models inside checkout.",
    goal: "Give brands a single platform to manage recurring revenue, refurbishment, and second-life inventory without leaving Shopify.",
    approach: [
      "Engineered Shopify app that injects Sharpei rental and subscription options into PDP and checkout experiences.",
      "Built event-driven pipeline syncing subscription state, refurbishment cycles, and customer eligibility back to Sharpei core.",
      "Created analytics workspace surfacing utilization, churn, and circular economy KPIs for 160+ partnered brands."
    ],
    technicalHighlights: [
      "GraphQL storefront extensions calculating rental pricing tiers, deposits, and damage coverage in real time.",
      "PostgreSQL + Timescale data warehouse consolidating lifecycle events, refurbishment SLAs, and payout schedules.",
      "Embedded Power BI dashboards with live cohort retention, utilization, and environmental impact reporting."
    ],
    results: ["160+ brands launched in 12 months", "Circular orders +48%", "Asset recovery time -35%"],
    coverImage: { file: "1.png", folder: "sharpei" },
    gallery: [
      { file: "2.png", folder: "sharpei" },
      { file: "3.png", folder: "sharpei" },
      { file: "4.png", folder: "sharpei" },
      { file: "5.png", folder: "sharpei" },
      { file: "6.png", folder: "sharpei" },
      { file: "7.png", folder: "sharpei" },
      { file: "8.png", folder: "sharpei" },
      { file: "9.png", folder: "sharpei" },
      { file: "10.png", folder: "sharpei" },
      { file: "11.png", folder: "sharpei" },
      { file: "12.png", folder: "sharpei" }
    ]
  },

  // WooCommerce
  {
    slug: "woocommerce-electronics-marketplace",
    name: "Electronics Marketplace Platform",
    category: "WooCommerce",
    role: "Platform Engineer",
    timeline: "2023",
    industry: "Consumer Electronics",
    tech: ["WordPress", "WooCommerce", "Redis", "Elasticsearch", "Nginx"],
    summary: "Built a high-performance electronics marketplace from scratch designed to handle flash sales and high-traffic events with sub-second response times.",
    goal: "Create a new electronics ecommerce platform with advanced search, performance optimization, and infrastructure ready for viral growth.",
    approach: [
      "Architected and built WooCommerce store with Redis object caching, database query optimization, and custom indexing strategies.",
      "Developed Elasticsearch integration with custom synonym management and compatibility-based search algorithms.",
      "Implemented blue/green deployment pipeline with observability dashboards and automated health monitoring."
    ],
    technicalHighlights: [
      "Built custom WooCommerce hooks and filters to prevent cache stampedes during high-traffic events.",
      "Created Nginx edge caching layer with microcaching and device-aware TTL strategies for optimal performance.",
      "Developed server automation system for cache pre-warming and health checks before major campaigns."
    ],
    results: ["Cart abandonment reduced by 28%", "95th percentile page load 1.2s", "Support tickets reduced by 43%"],
    coverImage: { file: "woo-electronics.png", folder: "woocommerce-electronics-marketplace" },
    gallery: [
      { file: "woo-dashboard.png", folder: "woocommerce-electronics-marketplace" },
      { file: "woo-lighthouse.png", folder: "woocommerce-electronics-marketplace" }
    ]
  },
  {
    slug: "woocommerce-membership-media",
    name: "Media Membership Platform",
    category: "WooCommerce",
    role: "Lead Developer",
    timeline: "2022",
    industry: "Digital Publishing",
    tech: ["WooCommerce", "MemberPress", "PHP", "Stripe", "Next.js"],
    summary: "Built a complete membership platform from scratch with gated content, online courses, and live event management.",
    goal: "Create a new membership platform for a media company with tiered access, course delivery, and seamless payment processing.",
    approach: [
      "Architected and built WooCommerce-based membership system with tiered access levels and granular content permissions.",
      "Developed custom Stripe integration for recurring billing, prorated upgrades, and SSO across multiple microsites.",
      "Created React-based course player component embedded as Gutenberg block for seamless content delivery."
    ],
    technicalHighlights: [
      "Built custom REST API endpoints for real-time membership status updates and content access validation.",
      "Implemented static site generation with real-time cache invalidation for member-exclusive content.",
      "Developed webhook integration between MemberPress and CRM system for automated customer data synchronization."
    ],
    results: ["Platform launched in 7 weeks", "+34% recurring revenue growth", "Support ticket load reduced by 18%"],
    coverImage: { file: "woo-membership.png", folder: "woocommerce-membership-media" },
    gallery: [
      { file: "woo-course.png", folder: "woocommerce-membership-media" },
      { file: "woo-members.png", folder: "woocommerce-membership-media" }
    ]
  },
  {
    slug: "woocommerce-luxury-consignment",
    name: "Luxury Consignment Marketplace",
    category: "WooCommerce",
    role: "Full Stack Engineer",
    timeline: "2023",
    industry: "Luxury Retail",
    tech: ["WooCommerce", "Laravel", "Elastic", "AWS SQS"],
    summary: "Built a complete luxury consignment marketplace from the ground up with seller onboarding, inventory moderation, and dynamic pricing.",
    goal: "Create a new marketplace platform where curated sellers can list luxury items with automated quality control and pricing optimization.",
    approach: [
      "Developed seller portal with multi-step onboarding workflow, KYC verification, and inventory submission system.",
      "Built Laravel microservice for catalog moderation with admin queue interface and automated quality checks.",
      "Created dynamic pricing engine using machine learning on historical sales data to suggest optimal listing prices."
    ],
    technicalHighlights: [
      "Architected RabbitMQ message queue system for asynchronous product creation in WooCommerce from seller submissions.",
      "Built headless checkout flow embedding WooCommerce order processing into React single-page application.",
      "Developed image similarity detection algorithm to automatically flag potential fraudulent or duplicate listings."
    ],
    results: ["5,000+ listings in first quarter", "Listing approval SLA reduced to 6 hours", "+21% gross merchandise value"],
    coverImage: { file: "woo-consignment.png", folder: "woocommerce-luxury-consignment" },
    gallery: [
      { file: "woo-seller-portal.png", folder: "woocommerce-luxury-consignment" },
      { file: "woo-review.png", folder: "woocommerce-luxury-consignment" }
    ]
  },
  {
    slug: "woocommerce-b2b-replenishment",
    name: "Wholesale Replenishment Platform",
    category: "WooCommerce",
    role: "Tech Lead",
    timeline: "2024",
    industry: "CPG Wholesale",
    tech: ["WooCommerce", "Vue", "MySQL", "Redis", "Docker"],
    summary: "Built a complete wholesale replenishment platform from scratch with predictive ordering, real-time inventory sync, and automated fulfillment.",
    goal: "Create a new B2B platform that automates wholesale ordering with intelligent forecasting and eliminates manual spreadsheet processes.",
    approach: [
      "Developed predictive ordering algorithm using machine learning on sell-through rates, seasonality, and historical patterns.",
      "Built Vue.js dashboard application with drag-and-drop order builder and real-time inventory visibility.",
      "Created EDI integration system for automated order export and synchronization with ERP fulfillment systems."
    ],
    technicalHighlights: [
      "Architected Redis stream processing for real-time stock level updates and inventory synchronization.",
      "Built MySQL event scheduler system for automated weekly inventory snapshots and reporting.",
      "Implemented containerized deployment architecture with blue/green deployment strategy for zero-downtime updates."
    ],
    results: ["Order accuracy improved by 32%", "Manual data entry time reduced by 70%", "Stockouts reduced by 18%"],
    coverImage: { file: "woo-replenishment.png", folder: "woocommerce-b2b-replenishment" },
    gallery: [
      { file: "woo-forecast.png", folder: "woocommerce-b2b-replenishment" },
      { file: "woo-dashboard.png", folder: "woocommerce-b2b-replenishment" }
    ]
  },
  {
    slug: "woocommerce-travel-bookings",
    name: "Travel Experience Booking Platform",
    category: "WooCommerce",
    role: "Solutions Engineer",
    timeline: "2022",
    industry: "Travel & Leisure",
    tech: ["WooCommerce", "BookingWP", "Mapbox", "Lambda", "Stripe"],
    summary: "Built a complete travel experience marketplace from scratch with multi-vendor booking, itinerary planning, and automated concierge services.",
    goal: "Create a new travel platform that aggregates experiences from multiple tour operators with dynamic availability and personalized itinerary recommendations.",
    approach: [
      "Developed custom BookingWP extension to support multi-operator inventory management, blackout dates, and capacity tracking.",
      "Built concierge workflow engine that automatically assembles personalized itineraries using Mapbox location intelligence.",
      "Created automated pre-trip system with checklists, digital waivers, and vendor notification workflows."
    ],
    technicalHighlights: [
      "Architected AWS Lambda serverless functions for real-time bundle pricing calculations and availability checks.",
      "Built Mapbox GL integration with interactive route previews and augmented reality viewport for destination exploration.",
      "Developed Stripe Connect marketplace integration for automated split payouts between tour operators and platform."
    ],
    results: ["Launched during peak season with zero downtime", "+27% upsell revenue", "Average booking rating 4.8/5"],
    coverImage: { file: "woo-travel.png", folder: "woocommerce-travel-bookings" },
    gallery: [
      { file: "woo-itinerary.png", folder: "woocommerce-travel-bookings" },
      { file: "woo-map.png", folder: "woocommerce-travel-bookings" }
    ]
  },

  // WordPress
  {
    slug: "wordpress-headless-gatsby",
    name: "Headless Publishing Platform",
    category: "WordPress",
    role: "Full Stack Engineer",
    timeline: "2022",
    industry: "Publishing",
    tech: ["WordPress", "Gatsby", "GraphQL", "Sanity", "Vercel"],
    summary: "Built a complete headless publishing platform from scratch with WordPress CMS, Gatsby frontend, and lightning-fast content delivery.",
    goal: "Create a new publishing platform that empowers editors with flexible content blocks while delivering millisecond-fast experiences to millions of readers.",
    approach: [
      "Architected headless CMS architecture with WordPress backend and Gatsby static site generation.",
      "Developed custom Gutenberg block system with automated mapping to React components using GraphQL schema introspection.",
      "Built Sanity integration for multimedia content management with webhook-based synchronization to WordPress.",
      "Implemented incremental static regeneration and CDN caching strategies for near-instant publishing."
    ],
    technicalHighlights: [
      "Created GraphQL schema stitching system combining WordPress and Sanity data sources into unified API.",
      "Built progressive enhancement architecture for interactive storytelling modules with fallback strategies.",
      "Developed automated accessibility linting pipeline integrated into editorial workflow for compliance."
    ],
    results: ["Time to first byte reduced by 60%", "Cumulative Layout Shift < 0.05", "Editorial publishing velocity +40%"],
    coverImage: { file: "wp-headless.png", folder: "wordpress-headless-gatsby" },
    gallery: [
      { file: "wp-blocks.png", folder: "wordpress-headless-gatsby" },
      { file: "wp-story.png", folder: "wordpress-headless-gatsby" }
    ]
  },
  {
    slug: "wordpress-education-hub",
    name: "Education Resource Hub",
    category: "WordPress",
    role: "Technical Lead",
    timeline: "2023",
    industry: "Education",
    tech: ["WordPress", "ACF Pro", "ElasticPress", "Tailwind", "Sage Theme"],
    summary: "Built a complete curriculum management platform from scratch for educators with advanced search, resource discovery, and personalized content delivery.",
    goal: "Create a new educational resource platform that helps state-wide educators discover, filter, and access lesson plans with standards alignment.",
    approach: [
      "Architected and built WordPress platform with custom ACF field groups and taxonomies for comprehensive lesson metadata modeling.",
      "Developed ElasticPress integration with fuzzy search algorithms, advanced filtering, and saved collection functionality.",
      "Built persona-based onboarding system that personalizes content recommendations by grade level and subject area."
    ],
    technicalHighlights: [
      "Created custom Sage theme with Tailwind CSS design system for consistent, accessible user interface.",
      "Built role-specific dashboards with different views and permissions for teachers, administrators, and district coordinators.",
      "Developed bulk import tools with data validation and error handling for district-wide curriculum uploads."
    ],
    results: ["Average resource discovery time reduced by 52%", "Teacher satisfaction rating 4.6/5", "Adopted across 132 school districts"],
    coverImage: { file: "wp-education.png", folder: "wordpress-education-hub" },
    gallery: [
      { file: "wp-search.png", folder: "wordpress-education-hub" },
      { file: "wp-dashboard.png", folder: "wordpress-education-hub" }
    ]
  },
  {
    slug: "wordpress-enterprise-intranet",
    name: "Enterprise Intranet Portal",
    category: "WordPress",
    role: "Solutions Architect",
    timeline: "2024",
    industry: "Enterprise SaaS",
    tech: ["WordPress", "Next.js", "Azure AD", "GraphQL", "Redis"],
    summary: "Built a complete enterprise intranet platform from scratch with personalized dashboards, knowledge base, and integrated analytics.",
    goal: "Create a new internal communication and knowledge management platform with Azure AD SSO integration and personalized employee experiences.",
    approach: [
      "Architected headless WordPress backend powering Next.js intranet frontend with dynamic, widget-based dashboards.",
      "Developed Azure AD integration that syncs Active Directory groups to WordPress user roles with granular permission management.",
      "Built KPI visualization system with custom charting components that aggregate data from multiple internal APIs."
    ],
    technicalHighlights: [
      "Created server-side rendering system with Redis caching layers for personalized content delivery at scale.",
      "Developed GraphQL schema stitching architecture combining WordPress data with custom microservices into unified API.",
      "Built automated governance reporting system for content lifecycle management and compliance tracking."
    ],
    results: ["Employee engagement increased by 36%", "Knowledge base search success rate 91%", "Manual report creation reduced by 80%"],
    coverImage: { file: "wp-intranet.png", folder: "wordpress-enterprise-intranet" },
    gallery: [
      { file: "wp-kb.png", folder: "wordpress-enterprise-intranet" },
      { file: "wp-dashboard.png", folder: "wordpress-enterprise-intranet" }
    ]
  },
  {
    slug: "wordpress-nonprofit-impact",
    name: "Nonprofit Campaign Microsite Platform",
    category: "WordPress",
    role: "Lead Engineer",
    timeline: "2023",
    industry: "Nonprofit",
    tech: ["WordPress Multisite", "Vue", "REST API", "Stripe", "Storybook"],
    summary: "Built a complete microsite generation platform from scratch that enables nonprofit program leads to launch fundraising campaign sites in hours.",
    goal: "Create a new platform for global fundraising campaigns with reusable templates, localization support, and integrated donation processing.",
    approach: [
      "Developed Storybook-driven component library system that syncs design tokens and components across WordPress Multisite network.",
      "Built guided onboarding workflow that enables regional teams to localize content, currencies, and imagery without technical knowledge.",
      "Created Stripe donation integration with real-time progress tracking, impact story displays, and automated receipt generation."
    ],
    technicalHighlights: [
      "Architected automated deployment pipeline that spins up new microsites via REST API calls with pre-configured templates.",
      "Built Vue.js widgets embedded as Gutenberg blocks for live preview functionality and interactive campaign elements.",
      "Developed automated translation workflow using Translation API with human review handoff for quality assurance."
    ],
    results: ["25 microsites launched in first quarter", "+37% donor conversion rate", "Localization time reduced by 70%"],
    coverImage: { file: "wp-nonprofit.png", folder: "wordpress-nonprofit-impact" },
    gallery: [
      { file: "wp-microsite.png", folder: "wordpress-nonprofit-impact" },
      { file: "wp-donation.png", folder: "wordpress-nonprofit-impact" }
    ]
  },
  {
    slug: "wordpress-hospitality-experiences",
    name: "Hospitality Experience Platform",
    category: "WordPress",
    role: "Full Stack Developer",
    timeline: "2022",
    industry: "Hospitality",
    tech: ["WordPress", "WooCommerce", "Vue", "Mapbox", "Twilio"],
    summary: "Built a complete guest experience platform from scratch with itinerary planning, real-time concierge communication, and intelligent upsell automation.",
    goal: "Create a new platform for a luxury hotel chain to offer curated on-site and off-site experiences with seamless booking and concierge services.",
    approach: [
      "Developed interactive itinerary planner with drag-and-drop scheduling interface tied to real-time availability from partner systems.",
      "Built Twilio integration for concierge messaging system with two-way communication directly within guest dashboards.",
      "Created dynamic package recommendation engine that triggers personalized upsell prompts based on guest preferences and booking history."
    ],
    technicalHighlights: [
      "Architected serverless function system to aggregate and normalize availability feeds from multiple partner APIs.",
      "Built Vue.js single-page application embedded within WordPress for seamless, app-like user interactions.",
      "Developed event-driven notification system that synchronizes operations staff across departments in real-time."
    ],
    results: ["Guest spend increased by 22%", "Average concierge response time 3 minutes", "Customer satisfaction rating 4.9/5"],
    coverImage: { file: "wp-hospitality.png", folder: "wordpress-hospitality-experiences" },
    gallery: [
      { file: "wp-itinerary.png", folder: "wordpress-hospitality-experiences" },
      { file: "wp-concierge.png", folder: "wordpress-hospitality-experiences" }
    ]
  },

  // Full-stack
  {
    slug: "product-analytics-platform",
    name: "SaaS Product Analytics",
    category: "Full-stack",
    role: "Lead Engineer",
    timeline: "2024",
    industry: "SaaS Analytics",
    tech: ["Next.js", "NestJS", "PostgreSQL", "tRPC", "ClickHouse"],
    summary: "Built a complete full-stack analytics platform from scratch with real-time funnels, user journey tracking, and embeddable dashboards.",
    goal: "Create a new product analytics platform that gives product managers granular visibility into user behavior with sub-second query times.",
    approach: [
      "Architected an event ingestion pipeline writing to ClickHouse with rollups.",
      "Developed Next.js dashboards with server components and data visualizations.",
      "Implemented granular permissions for workspaces, teams, and shared links."
    ],
    technicalHighlights: [
      "tRPC contracts for end-to-end type safety.",
      "Row-level security and audit logging for compliance.",
      "Streaming data export via WebSockets for live monitoring."
    ],
    results: ["Query latency < 300ms", "Adopted by 14 product teams in pilot", "Feature shipping speed +18%"],
    coverImage: { file: "fullstack-analytics.png", folder: "product-analytics-platform" },
    gallery: [
      { file: "fullstack-funnels.png", folder: "product-analytics-platform" },
      { file: "fullstack-dashboard.png", folder: "product-analytics-platform" }
    ]
  },
  {
    slug: "fullstack-marketplace",
    name: "Marketplace Lending Platform",
    category: "Full-stack",
    role: "Technical Lead",
    timeline: "2023",
    industry: "Fintech",
    tech: ["Next.js", "Node", "GraphQL", "Prisma", "AWS"],
    summary: "Built a complete lending marketplace platform from scratch connecting investors with SMB borrowers, with comprehensive underwriting workflows.",
    goal: "Create a new fintech platform with compliant onboarding, document management workflows, and transparent portfolio analytics for investors.",
    approach: [
      "Created multi-step onboarding with identity verification and risk scoring.",
      "Designed underwriting workflows with document uploads and reviewer assignments.",
      "Produced investor dashboards with repayment schedules and cohort analysis."
    ],
    technicalHighlights: [
      "GraphQL federation to integrate third-party risk engines.",
      "EventBridge-driven notifications and document workflows.",
      "Prisma schema optimized for audit-ready financial records."
    ],
    results: ["Loan approval time −48%", "$18M processed in first 6 months", "Investor retention 92%"],
    coverImage: { file: "fullstack-lending.png", folder: "fullstack-marketplace" },
    gallery: [
      { file: "fullstack-onboarding.png", folder: "fullstack-marketplace" },
      { file: "fullstack-portfolio.png", folder: "fullstack-marketplace" }
    ]
  },
  {
    slug: "fullstack-smart-manufacturing",
    name: "Smart Manufacturing Dashboards",
    category: "Full-stack",
    role: "Solution Architect",
    timeline: "2022",
    industry: "Manufacturing",
    tech: ["Next.js", "Express", "TimescaleDB", "MQTT", "Tailwind"],
    summary: "Built a complete smart manufacturing platform from scratch with factory-floor dashboards, machine telemetry visualization, and predictive maintenance alerts.",
    goal: "Create a new IoT platform that provides plant operators with real-time insights into downtime, throughput, and anomaly detection.",
    approach: [
      "Ingested IoT signals via MQTT and stored time-series in TimescaleDB.",
      "Built real-time dashboards with websocket updates and drill-down views.",
      "Implemented predictive maintenance models to forecast part failures."
    ],
    technicalHighlights: [
      "Edge device provisioning with secure tokens.",
      "Role-aware experiences for operators, supervisors, and executives.",
      "Custom charting components tuned for industrial KPIs."
    ],
    results: ["Unplanned downtime −17%", "Alert acknowledgment within 4 minutes", "ROI realized in 5 months"],
    coverImage: { file: "fullstack-manufacturing.png", folder: "fullstack-smart-manufacturing" },
    gallery: [
      { file: "fullstack-telemetry.png", folder: "fullstack-smart-manufacturing" },
      { file: "fullstack-maintenance.png", folder: "fullstack-smart-manufacturing" }
    ]
  },
  {
    slug: "fullstack-learning-platform",
    name: "Learning Experience Platform",
    category: "Full-stack",
    role: "Principal Engineer",
    timeline: "2024",
    industry: "EdTech",
    tech: ["Next.js", "Supabase", "Edge Functions", "Drizzle ORM", "Stripe"],
    summary: "Built a complete learning experience platform from scratch with cohort-based courses, adaptive content delivery, live sessions, and progress analytics.",
    goal: "Create a new EdTech platform that delivers personalized learning paths and keeps cohorts engaged through interactive live sessions.",
    approach: [
      "Modeled content graph and prerequisites in Supabase with Drizzle migrations.",
      "Integrated live session tooling and breakout rooms with edge-authenticated tokens.",
      "Added actionable analytics for instructors with cohort comparisons."
    ],
    technicalHighlights: [
      "Edge functions generating real-time badges and cohort leaderboards.",
      "Dynamic video encoding and CDN distribution for lesson content.",
      "Stripe metered billing based on active seat usage."
    ],
    results: ["Completion rate 78%", "Churn down to 5%", "Average session rating 4.8/5"],
    coverImage: { file: "fullstack-learning.png", folder: "fullstack-learning-platform" },
    gallery: [
      { file: "fullstack-cohort.png", folder: "fullstack-learning-platform" },
      { file: "fullstack-progress.png", folder: "fullstack-learning-platform" }
    ]
  },
  {
    slug: "fullstack-logistics-orchestration",
    name: "Logistics Orchestration Suite",
    category: "Full-stack",
    role: "Staff Engineer",
    timeline: "2023",
    industry: "Logistics",
    tech: ["Next.js", "Go", "gRPC", "MongoDB", "Kafka"],
    summary: "Built a complete logistics orchestration platform from scratch with route optimization, real-time anomaly detection, and partner API integrations.",
    goal: "Create a new logistics platform that provides dispatchers with a single control center for shipments, carriers, and incident management.",
    approach: [
      "Built a microservice architecture with Go + gRPC for route calculation and carrier integrations.",
      "Developed Next.js interface with map visualizations and command center overlays.",
      "Implemented SLA breach detection using Kafka streams and rule engine."
    ],
    technicalHighlights: [
      "Real-time WebGL map rendering of fleet movement.",
      "Offline-first progressive web app for warehouse tablets.",
      "Role-based analytics for operations, finance, and partners."
    ],
    results: ["On-time delivery +16%", "Incident resolution time −38%", "Carrier satisfaction 9.1/10"],
    coverImage: { file: "fullstack-logistics.png", folder: "fullstack-logistics-orchestration" },
    gallery: [
      { file: "fullstack-map.png", folder: "fullstack-logistics-orchestration" },
      { file: "fullstack-incident.png", folder: "fullstack-logistics-orchestration" }
    ]
  },

  // Automation
  {
    slug: "automation-zapier-airtable",
    name: "Operations Control Center",
    category: "Automation",
    role: "Automation Engineer",
    timeline: "2024",
    industry: "D2C",
    tech: ["Zapier", "Airtable", "Shopify Admin API", "Make", "Slack"],
    summary: "Built a complete operations automation platform from scratch that integrates ecommerce tools into one unified console, eliminating manual processes.",
    goal: "Create a new operations platform that aligns marketing, fulfillment, and support teams with unified order intelligence and automated workflows.",
    approach: [
      "Synced Shopify orders into Airtable with enriched analytics fields.",
      "Automated SLA-based alerts through Slack and email digests.",
      "Segmented post-purchase journeys based on return risk and loyalty tiers."
    ],
    technicalHighlights: [
      "Reusable automation templates versioned in Git.",
      "Webhook-based triage for high-value VIP orders.",
      "Data warehouse sync into Google Looker Studio for exec dashboards."
    ],
    results: ["12 hrs/week saved for ops team", "Refund processing time −45%", "Marketing attribution clarity +33%"],
    coverImage: { file: "automation-ops.png", folder: "automation-zapier-airtable" },
    gallery: [
      { file: "automation-dashboard.png", folder: "automation-zapier-airtable" },
      { file: "automation-zaps.png", folder: "automation-zapier-airtable" }
    ]
  },
  {
    slug: "automation-partner-onboarding",
    name: "Partner Onboarding Orchestration",
    category: "Automation",
    role: "Solution Architect",
    timeline: "2023",
    industry: "SaaS Partnerships",
    tech: ["Workato", "Salesforce", "Notion API", "DocuSign", "Segment"],
    summary: "Built a complete partner onboarding automation platform from scratch spanning contract management, enablement workflows, and analytics setup.",
    goal: "Create a new automation platform that reduces friction for onboarding new partners and gives partner managers full visibility into the process.",
    approach: [
      "Automated DocuSign contract flows with Salesforce status sync.",
      "Provisioned Notion workspaces and enablement assets dynamically.",
      "Triggered Segment workspace creation with governed API tokens."
    ],
    technicalHighlights: [
      "Workato recipe library with environment-specific secrets.",
      "Idempotent retry logic for DocuSign/Salesforce latency.",
      "Partner health scoring model aggregated into weekly digest."
    ],
    results: ["Onboarding time −55%", "Partner activation +24%", "Zero manual touch for standard tier"],
    coverImage: { file: "automation-partner.png", folder: "automation-partner-onboarding" },
    gallery: [
      { file: "automation-playbook.png", folder: "automation-partner-onboarding" },
      { file: "automation-digest.png", folder: "automation-partner-onboarding" }
    ]
  },
  {
    slug: "automation-finance-reconciliation",
    name: "Finance Reconciliation Engine",
    category: "Automation",
    role: "Automation Engineer",
    timeline: "2022",
    industry: "Finance",
    tech: ["Azure Functions", "Power Automate", "SQL Server", "Plaid", "Power BI"],
    summary: "Built a complete finance reconciliation automation platform from scratch that digitizes monthly reconciliation by matching banking feeds, invoices, and approvals.",
    goal: "Create a new finance automation platform that eliminates spreadsheet-based reconciliation for a finance team operating across multiple regions.",
    approach: [
      "Pulled transaction feeds via Plaid and enriched data in SQL Server.",
      "Automated variance detection and approval workflows via Power Automate.",
      "Published real-time dashboards into Power BI with drill-down commentary."
    ],
    technicalHighlights: [
      "Azure Functions orchestrating data normalization pipelines.",
      "Role-based approvals with timestamped audit trails.",
      "Automated discrepancy assignment to departmental owners."
    ],
    results: ["Close cycle time −41%", "Manual errors nearly eliminated", "Audit prep hours −60%"],
    coverImage: { file: "automation-finance.png", folder: "automation-finance-reconciliation" },
    gallery: [
      { file: "automation-dashboard.png", folder: "automation-finance-reconciliation" },
      { file: "automation-approvals.png", folder: "automation-finance-reconciliation" }
    ]
  },
  {
    slug: "automation-field-services",
    name: "Field Services Dispatch Automation",
    category: "Automation",
    role: "Automation Lead",
    timeline: "2023",
    industry: "Field Services",
    tech: ["Make", "ServiceNow", "Twilio", "Google Calendar", "Firebase"],
    summary: "Built a complete field services automation platform from scratch with dispatch workflows, technician scheduling, and customer notification systems.",
    goal: "Create a new automation platform that reduces missed appointments and improves dispatch efficiency for a national service brand.",
    approach: [
      "Synced ServiceNow work orders into a unified scheduling board with prioritized routing.",
      "Coordinated technician availability with calendar sync, travel buffers, and SMS confirmations.",
      "Established post-service feedback loops feeding into performance dashboards."
    ],
    technicalHighlights: [
      "Dispatch priority algorithm factoring travel time and SLA tiers.",
      "Twilio messaging workflows with multilingual templates.",
      "Firebase backend for real-time technician check-ins."
    ],
    results: ["Missed appointments −47%", "Technician utilization +21%", "CSAT 4.7/5"],
    coverImage: { file: "automation-dispatch.png", folder: "automation-field-services" },
    gallery: [
      { file: "automation-scheduler.png", folder: "automation-field-services" },
      { file: "automation-sms.png", folder: "automation-field-services" }
    ]
  },
  {
    slug: "automation-ecommerce-marketing",
    name: "Ecommerce Marketing Brain",
    category: "Automation",
    role: "Automation Engineer",
    timeline: "2024",
    industry: "Ecommerce",
    tech: ["Segment", "Braze", "BigQuery", "Looker", "Cloud Functions"],
    summary: "Built a complete marketing automation platform from scratch that syncs ecommerce events to orchestrated customer journeys across multiple channels.",
    goal: "Create a new marketing automation platform that unifies campaign personalization and measurement for growth and retention teams.",
    approach: [
      "Streamed event data into BigQuery, modeling lifecycle cohorts.",
      "Drove Braze journeys with dynamic content, predictive churn scoring, and holdout experiments.",
      "Delivered Looker dashboards with marketing mix attribution."
    ],
    technicalHighlights: [
      "Serverless scoring pipeline for churn probability updates.",
      "Holdout experimentation framework built into customer journeys.",
      "Automated segment-sync between Braze, Meta, and Google Ads."
    ],
    results: ["Repeat purchase rate +14%", "Retention +9%", "Campaign build time −50%"],
    coverImage: { file: "automation-marketing.png", folder: "automation-ecommerce-marketing" },
    gallery: [
      { file: "automation-cohorts.png", folder: "automation-ecommerce-marketing" },
      { file: "automation-journeys.png", folder: "automation-ecommerce-marketing" }
    ]
  },

  // Healthcare (dedicated category)
  {
    slug: "healthcare-telemedicine-app",
    name: "Telemedicine Platform",
    category: "Healthcare",
    role: "Lead Full Stack Engineer",
    timeline: "2023",
    industry: "Healthcare",
    tech: ["Next.js", "Node", "PostgreSQL", "WebRTC", "Stripe"],
    summary: "Built a complete telemedicine platform from scratch that connects patients, providers, and clinics with seamless virtual care experiences.",
    goal: "Create a new healthcare platform with HIPAA-compliant virtual visit workflows, clear provider handoffs, and automated billing systems.",
    approach: [
      "Developed intake forms with branching logic and real-time eligibility checks.",
      "Built WebRTC consultation rooms with encrypted signaling and shared medical notes.",
      "Automated payment capture, invoicing, and insurance verification."
    ],
    technicalHighlights: [
      "Role-aware access with audit trails for regulators.",
      "FHIR-based data structures for interoperability.",
      "Offline-ready clinic dashboard for rural locations."
    ],
    results: ["Wait times −40%", "Session stability 97%", "Provider satisfaction 4.8/5"],
    coverImage: { file: "health-telemedicine.png", folder: "healthcare-telemedicine-app" },
    gallery: [
      { file: "health-consult.png", folder: "healthcare-telemedicine-app" },
      { file: "health-intake.png", folder: "healthcare-telemedicine-app" }
    ]
  },
  {
    slug: "healthcare-care-coordination",
    name: "Care Coordination Suite",
    category: "Healthcare",
    role: "Product Engineer",
    timeline: "2022",
    industry: "Healthcare Operations",
    tech: ["React", "Node", "Hasura", "GraphQL", "Twilio"],
    summary: "Built a complete care coordination platform from scratch that unifies care teams with shared care plans, escalation workflows, and secure messaging.",
    goal: "Create a new healthcare platform that reduces handoff friction between providers, nurses, and support staff for chronic care programs.",
    approach: [
      "Modeled care plans in Hasura with fine-grained permissions for each role.",
      "Implemented secure messaging and escalation workflows with priority triage.",
      "Surface KPI dashboards showing caseload, adherence, and outcome trends."
    ],
    technicalHighlights: [
      "GraphQL subscriptions powering live care plan updates.",
      "Audit logging and PHI redaction in activity streams.",
      "Voice/video escalation via Twilio with consent capture."
    ],
    results: ["Care plan adherence +18%", "Escalation response time −34%", "Team satisfaction 4.7/5"],
    coverImage: { file: "health-coordination.png", folder: "healthcare-care-coordination" },
    gallery: [
      { file: "health-dashboard.png", folder: "healthcare-care-coordination" },
      { file: "health-messaging.png", folder: "healthcare-care-coordination" }
    ]
  },
  {
    slug: "healthcare-research-portal",
    name: "Clinical Research Portal",
    category: "Healthcare",
    role: "Technical Lead",
    timeline: "2023",
    industry: "Clinical Research",
    tech: ["Next.js", "Python", "FastAPI", "Neo4j", "AWS"],
    summary: "Built a complete clinical research platform from scratch with participant portal, eligibility matching, scheduling, and data capture systems.",
    goal: "Create a new research platform that matches participants to clinical trials faster while maintaining strict data governance and compliance.",
    approach: [
      "Created eligibility engine that maps participant data to study criteria using graph queries.",
      "Implemented scheduling with reminders, consent management, and visit trackers.",
      "Provided researchers with dashboards summarizing cohort health and retention."
    ],
    technicalHighlights: [
      "PHI encryption-at-rest with envelope keys.",
      "Neo4j graph to model eligibility relationships across studies.",
      "Serverless ingestion of device data for remote monitoring."
    ],
    results: ["Study enrollment time −33%", "Participant retention +21%", "Protocol deviations reduced 12%"],
    coverImage: { file: "health-research.png", folder: "healthcare-research-portal" },
    gallery: [
      { file: "health-eligibility.png", folder: "healthcare-research-portal" },
      { file: "health-schedule.png", folder: "healthcare-research-portal" }
    ]
  },
  {
    slug: "healthcare-remote-monitoring",
    name: "Remote Patient Monitoring",
    category: "Healthcare",
    role: "Senior Engineer",
    timeline: "2024",
    industry: "Healthcare",
    tech: ["Next.js", "NestJS", "AWS IoT Core", "DynamoDB", "Cognito"],
    summary: "Built a complete remote patient monitoring platform from scratch that ingests device data, alerts clinicians, and engages patients in their care.",
    goal: "Create a new healthcare platform that allows care teams to track chronic conditions with timely interventions and patient feedback systems.",
    approach: [
      "Connected IoT devices to AWS IoT Core, normalizing readings into DynamoDB.",
      "Created clinician dashboards with risk stratification and intervention queues.",
      "Built patient app with daily check-ins, content, and motivational nudges."
    ],
    technicalHighlights: [
      "Streaming analytics with Kinesis for threshold alerts.",
      "FHIR-compliant exports into hospital EMR systems.",
      "Granular consent management for data sharing."
    ],
    results: ["Alert-to-action time −29%", "Patient engagement 82%", "Hospital readmissions −14%"],
    coverImage: { file: "health-monitoring.png", folder: "healthcare-remote-monitoring" },
    gallery: [
      { file: "health-clinician.png", folder: "healthcare-remote-monitoring" },
      { file: "health-patient.png", folder: "healthcare-remote-monitoring" }
    ]
  },
  {
    slug: "healthcare-lab-automation",
    name: "Lab Workflow Automation",
    category: "Healthcare",
    role: "Automation Engineer",
    timeline: "2022",
    industry: "Diagnostics",
    tech: ["Python", "Celery", "PostgreSQL", "Airflow", "FHIR"],
    summary: "Built a complete lab workflow automation platform from scratch with automated intake, result distribution, and provider notification systems.",
    goal: "Create a new diagnostics platform that handles surge testing volumes with traceable workflows and data interoperability for a fast-scaling lab.",
    approach: [
      "Implemented intake scanning with barcode validation and LIMS integration.",
      "Automated result routing to providers with FHIR messaging and audit logs.",
      "Scheduled Airflow pipelines for daily consolidated analytics."
    ],
    technicalHighlights: [
      "Celery workers orchestrating lab device interfaces.",
      "Role-based portals for lab techs, QA, and providers.",
      "Data lineage tracking for regulatory reporting."
    ],
    results: ["Turnaround time −38%", "Manual data entry eliminated", "Regulatory audits passed with zero findings"],
    coverImage: { file: "health-lab.png", folder: "healthcare-lab-automation" },
    gallery: [
      { file: "health-intake.png", folder: "healthcare-lab-automation" },
      { file: "health-results.png", folder: "healthcare-lab-automation" }
    ]
  }
];

export function allCategories() {
  const set = new Set(projects.map((p) => p.category));
  return Array.from(set).sort();
}

export function findProject(slug) {
  return projects.find((p) => p.slug === slug);
}



