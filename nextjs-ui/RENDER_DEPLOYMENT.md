# Deploy NextJS to Render

Complete guide for deploying the LiquidRound NextJS landing page to Render.

## Method 1: Manual Setup (Recommended)

### Step 1: Create Static Site on Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +"** → **"Static Site"**
3. **Connect your GitHub repository**: `kaljuvee/liquidround-landing`

### Step 2: Configure Build Settings

**Basic Settings:**
- **Name**: `liquidround-landing` (or your preferred name)
- **Root Directory**: `nextjs-ui`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `out`

**Advanced Settings:**
- **Node Version**: `18` or `20` (recommended)
- **Auto-Deploy**: `Yes` (deploys on every push to main)

### Step 3: Environment Variables (Optional)

If you need any environment variables:
- **NEXT_PUBLIC_APP_URL**: `https://app.liquidround.com`
- **NODE_ENV**: `production`

### Step 4: Deploy

1. **Click "Create Static Site"**
2. **Wait for build** (usually 2-3 minutes)
3. **Your site will be live** at `https://your-site-name.onrender.com`

---

## Method 2: Using render.yaml Configuration

### Step 1: Create render.yaml

Create this file in the **root directory** of your repository:

```yaml
# render.yaml
services:
  - type: web
    name: liquidround-landing
    env: static
    rootDir: nextjs-ui
    buildCommand: npm install && npm run build
    staticPublishPath: ./out
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### Step 2: Update package.json

Add the export script to your `nextjs-ui/package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "export": "next export",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Step 3: Configure NextJS for Static Export

Create or update `nextjs-ui/next.config.ts`:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

### Step 4: Deploy with render.yaml

1. **Commit and push** the render.yaml file to your repository
2. **Go to Render Dashboard** → **"New +"** → **"Blueprint"**
3. **Connect repository** and select the render.yaml
4. **Deploy** - Render will use the configuration automatically

---

## Method 3: Web Service (Alternative)

If you prefer a web service instead of static site:

**Settings:**
- **Environment**: `Node`
- **Root Directory**: `nextjs-ui`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Port**: `3000` (NextJS default)

---

## Troubleshooting

### Build Fails with "next export not found"

**Solution**: Update your `package.json` scripts:

```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

### Images Not Loading

**Solution**: Ensure `next.config.ts` has:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

### 404 Errors on Routes

**Solution**: Add to `render.yaml`:

```yaml
routes:
  - type: rewrite
    source: /*
    destination: /index.html
```

### Build Takes Too Long

**Solution**: Use Node 18+ and ensure efficient build:

```bash
# In render.yaml or manual settings
buildCommand: npm ci && npm run build && npm run export
```

---

## Performance Optimization

### Enable Caching

Add to your build command:
```bash
npm ci --cache /tmp/.npm && npm run build && npm run export
```

### Optimize Images

Ensure all images in `public/assets/` are optimized:
- Use WebP format when possible
- Compress images before deployment
- NextJS will handle optimization automatically

---

## Custom Domain Setup

### Step 1: Add Custom Domain in Render

1. **Go to your site settings**
2. **Click "Custom Domains"**
3. **Add your domain**: `liquidround.ai`

### Step 2: Configure DNS

**For Apex Domain (liquidround.ai):**
```
Type: A
Name: @
Value: 216.24.57.1
```

**For Subdomain (www.liquidround.ai):**
```
Type: CNAME
Name: www
Value: your-site-name.onrender.com
```

### Step 3: SSL Certificate

Render automatically provides SSL certificates for custom domains.

---

## Monitoring and Logs

### View Build Logs
1. **Go to your service dashboard**
2. **Click "Logs"** tab
3. **Filter by "Build"** to see build process

### Monitor Performance
- **Response times** available in Render dashboard
- **Uptime monitoring** included
- **Bandwidth usage** tracked automatically

---

## Deployment Checklist

- [ ] Repository connected to Render
- [ ] Root directory set to `nextjs-ui`
- [ ] Build command includes export
- [ ] Publish directory set to `out`
- [ ] Node version 18 or higher
- [ ] Custom domain configured (if needed)
- [ ] SSL certificate active
- [ ] All environment variables set

---

## Support

**Render Documentation**: https://render.com/docs/static-sites
**NextJS Deployment**: https://nextjs.org/docs/deployment

For issues specific to this project, check the main repository README or create an issue on GitHub.
