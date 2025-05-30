# Azure Static Web Apps Deployment

This resume website is now configured for deployment to Azure Static Web Apps.

## Configuration

### Files Added/Modified for Azure Static Web Apps:

1. **`.github/workflows/azure-static-web-apps.yml`** - GitHub Actions workflow for automatic deployment
2. **`staticwebapp.config.json`** - Routing configuration for Azure Static Web Apps
3. **`next.config.mjs`** - Updated with static export configuration
4. **`app/layout.tsx`** - Modified to use system fonts instead of Google Fonts
5. **`package.json`** - Added `build:static` script

### Key Changes:

- **Static Export**: The app now exports as static HTML/CSS/JS files
- **Locale Routing**: Handled via Azure Static Web Apps routing instead of Next.js middleware
- **Font Loading**: Switched to system fonts to avoid network dependencies during build
- **Output Directory**: Static files are generated in the `out/` directory

## Deployment Setup

1. **Create Azure Static Web App**:
   - Go to Azure Portal
   - Create a new Static Web App resource
   - Connect to this GitHub repository
   - Set build details:
     - App location: `/`
     - Api location: `` (empty)
     - Output location: `out`

2. **Configure GitHub Secrets**:
   - The workflow requires `AZURE_STATIC_WEB_APPS_API_TOKEN` secret
   - This is automatically provided when creating the Static Web App

3. **Deploy**:
   - Push to main branch to trigger automatic deployment
   - The app will be built and deployed to Azure Static Web Apps

## Local Development

- **Development**: `npm run dev` (uses Next.js dev server with middleware)
- **Static Build**: `npm run build:static` (generates static export for Azure Static Web Apps)
- **Production**: The static files in `out/` directory are served by Azure Static Web Apps

## Internationalization

The site supports Japanese (default) and English:
- Japanese: `/ja` (default route)
- English: `/en`
- Root `/` automatically redirects to `/ja`

## Features Supported

✅ Static site generation
✅ Internationalization (i18n)
✅ Responsive design
✅ Resume timeline and details
✅ Language switching

## Limitations in Static Mode

❌ Server-side API routes
❌ Next.js middleware (replaced with Azure SWA routing)
❌ Real-time features requiring server