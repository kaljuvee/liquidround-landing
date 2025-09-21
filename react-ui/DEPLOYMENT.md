# React + Vite Deployment Guide

This guide covers deploying the LiquidRound React landing page to various platforms.

## Deploy to Vercel (Recommended)

Vercel works great with React + Vite applications.

### Method 1: Vercel CLI

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to the React directory:**
   ```bash
   cd react-ui
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the interactive prompts:**
   - Link to existing project or create new
   - Confirm settings (build command: `npm run build`, output: `dist`)
   - Deploy

5. **For production deployments:**
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project:**
   - Framework Preset: Vite
   - Root Directory: `react-ui`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**

## Deploy to Render

1. **Create account** at [render.com](https://render.com)
2. **Create a new Static Site**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name:** liquidround-landing
   - **Root Directory:** `react-ui`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run preview`
   - **Publish Directory:** `dist`
   - **Node Version:** 18 or higher (recommended: 20)
5. **Create Static Site**

Render will automatically:
- Install dependencies
- Build the application
- Deploy to a public URL
- Redeploy on every push to main branch

## Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Connect to GitHub** and select your repository
4. **Configure build settings:**
   - **Base directory:** `react-ui`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. **Deploy site**

## Deploy to AWS Amplify

1. **Go to AWS Amplify Console**
2. **Choose "Host web app"**
3. **Connect your GitHub repository**
4. **Configure build settings:**
   - **App root directory:** `react-ui`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. **Save and deploy**

## Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Render
1. Go to your static site dashboard
2. Click "Settings" → "Custom Domains"
3. Add your domain
4. Configure DNS records as shown

## Environment Variables

If you need to add environment variables:

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Render
Add in the "Environment" section of your service settings.

## Build Optimization

The build is already optimized with:
- Asset compression
- Image optimization
- Code splitting
- Tree shaking

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18 or higher
- Check that all dependencies are in package.json
- Verify build command: `npm run build`

### Assets Not Loading
- Ensure images are in the `src/assets` directory
- Check that asset imports are correct
- Verify output directory is set to `dist`

### 404 Errors
- For SPAs, configure redirects to index.html
- Most platforms handle this automatically for Vite builds

## Performance

The deployed site includes:
- Optimized images (WebP format when supported)
- Minified CSS and JavaScript
- Gzip compression
- CDN delivery (on most platforms)

Expected performance:
- **Lighthouse Score:** 95+ for Performance
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
