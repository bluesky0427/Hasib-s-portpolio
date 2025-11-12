# Script to create all image folders for the portfolio

$basePath = "public/images"

# Create base directory if it doesn't exist
if (-not (Test-Path $basePath)) {
    New-Item -ItemType Directory -Path $basePath -Force | Out-Null
}

# List of all project folders
$folders = @(
    "brand",
    "shopify-fashion-ecommerce",
    "shopify-beauty-subscriptions",
    "shopify-electronics-direct",
    "shopify-furniture-global",
    "shopify-b2b-portal",
    "shopify-jewelry-customization",
    "shopify-fitness-supplements",
    "shopify-home-decor-marketplace",
    "shopify-pet-products",
    "shopify-grocery-delivery",
    "shopify-fashion-rental",
    "shopify-sports-equipment",
    "shopify-beauty-samples",
    "shopify-art-supplies",
    "shopify-baby-products",
    "woocommerce-electronics-marketplace",
    "woocommerce-membership-media",
    "woocommerce-luxury-consignment",
    "woocommerce-b2b-replenishment",
    "woocommerce-travel-bookings",
    "wordpress-headless-gatsby",
    "wordpress-education-hub",
    "wordpress-enterprise-intranet",
    "wordpress-nonprofit-impact",
    "wordpress-hospitality-experiences",
    "product-analytics-platform",
    "fullstack-marketplace",
    "fullstack-smart-manufacturing",
    "fullstack-learning-platform",
    "fullstack-logistics-orchestration",
    "automation-zapier-airtable",
    "automation-partner-onboarding",
    "automation-finance-reconciliation",
    "automation-field-services",
    "automation-ecommerce-marketing",
    "healthcare-telemedicine-app",
    "healthcare-care-coordination",
    "healthcare-research-portal",
    "healthcare-remote-monitoring",
    "healthcare-lab-automation"
)

# Create all folders
foreach ($folder in $folders) {
    $fullPath = Join-Path $basePath $folder
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Created folder: $fullPath" -ForegroundColor Green
    } else {
        Write-Host "Folder already exists: $fullPath" -ForegroundColor Yellow
    }
}

Write-Host "`nAll image folders created successfully!" -ForegroundColor Cyan
Write-Host "You can now add your images to: $basePath" -ForegroundColor Cyan


