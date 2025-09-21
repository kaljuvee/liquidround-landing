# LiquidRound Landing Page

Professional landing page for LiquidRound, an AI-Native M&A + IPO Marketplace platform. This repository contains two complete implementations using different technologies.

## Project Structure

```
liquidround-landing/
├── nextjs-ui/         # NextJS implementation (recommended)
├── fasthtml-ui/       # FastHTML/Python implementation
└── README.md         # This file
```

## Implementations

### NextJS Implementation (`nextjs-ui/`) - **RECOMMENDED**

Modern NextJS implementation with TypeScript, Tailwind CSS, and optimized performance.

**Technology Stack:**
- NextJS 15.5.3 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons
- Static Site Generation (SSG)

**Running locally:**
```bash
cd nextjs-ui
npm install
npm run dev
```

**Why NextJS?**
- ✅ **No host restrictions** - Works with any custom domain
- ✅ **Optimized performance** - 122kB first load, static generation
- ✅ **SEO-friendly** - Server-side rendering and static generation
- ✅ **Easy deployment** - Perfect for Vercel, Render, Netlify
- ✅ **Production-ready** - Built for enterprise applications

### FastHTML Implementation (`fasthtml-ui/`)

Python-based implementation using the FastHTML framework for server-side rendering.

**Technology Stack:**
- Python FastHTML
- Custom CSS styling
- Uvicorn ASGI server

**Running locally:**
```bash
cd fasthtml-ui
pip3 install -r requirements.txt
python3 main.py
```

## Design Features

Both implementations include:

- **Green Color Scheme**: Consistent `#059669` green branding throughout
- **London Financial District Imagery**: Professional background images
- **Responsive Layout**: Mobile-first design for all devices
- **AI Agent Advisory Team**: Detailed showcase of IPO and M&A AI agents
- **Contact Information**: London office at 32-38 Leman St, London E1 8EW
- **Demo Integration**: Links to https://app.liquidround.com/

## Deployment

### Deploy NextJS to Vercel (Recommended)

Vercel is built for NextJS and provides the best performance.

**Method 1: Vercel CLI**

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from the NextJS directory:**
   ```bash
   cd nextjs-ui
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Vercel will auto-detect NextJS settings

4. **For subsequent deployments:**
   ```bash
   vercel --prod
   ```

### Deploy NextJS to Render

**Method 1: Manual Setup (Recommended)**

1. **Create a new Static Site** on [Render](https://render.com)
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Root Directory:** `nextjs-ui`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `out`
   - **Node Version:** 18 or higher
4. **Deploy:** Render will automatically build and deploy

**Method 2: Using render.yaml (Automated)**

1. **Use the included render.yaml** in the repository root
2. **Go to Render Dashboard** → **"New +"** → **"Blueprint"**
3. **Connect repository** and Render will auto-configure from render.yaml
4. **Deploy:** Fully automated setup

**See `nextjs-ui/RENDER_DEPLOYMENT.md` for detailed instructions, troubleshooting, and custom domain setup.**

### Deploy FastHTML to Render

1. **Create a new Web Service** on [Render](https://render.com)
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Root Directory:** `fasthtml-ui`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python main.py`
   - **Environment:** Python 3
4. **Deploy:** Render will automatically build and deploy

### Deploy FastHTML to Railway

1. **Create a new project** on [Railway](https://railway.app)
2. **Connect your GitHub repository**
3. **Configure deployment:**
   - Railway will automatically detect Python and install from `requirements.txt`
   - Start command: `python main.py`
   - Root directory: `fasthtml-ui`

## Key Features

### Content Sections
- **Hero Section**: "AI-driven Platform for Every Deal Journey"
- **Target Users**: SMEs, startups, buyers, sellers, professional advisors
- **Meet your AI Agent Advisory Team**: IPO and M&A workflow agents
- **Contact Information**: London office details and demo links

### AI Agents
**IPO Path:**
- Market-Window Agent
- Comps-Screener Agent  
- Direct-List Scorer Agent
- Readiness-Coordinator Agent

**M&A Path:**
- Target-Finder Agent
- Valuer Agent
- Synergy-Analyst Agent
- Diligence-Coordinator Agent

## Development

**For most use cases:** Use the **NextJS implementation** - it's production-ready, optimized, and handles custom domains perfectly.

**For Python developers:** Use the FastHTML implementation if you prefer Python-based development.

Both provide identical functionality and visual design, just using different underlying technologies.

## Performance

### NextJS Implementation
- **First Load JS:** 122kB
- **Static Generation:** All pages pre-rendered
- **Image Optimization:** Automatic WebP conversion
- **SEO Optimized:** Meta tags and structured data

### FastHTML Implementation  
- **Server-side Rendering:** Fast initial page loads
- **Python-based:** Easy to customize for Python developers
- **Lightweight:** Minimal JavaScript footprint

## License

This project is proprietary to LiquidRound. All rights reserved.
