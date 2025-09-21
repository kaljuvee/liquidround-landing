# LiquidRound Landing Page

Professional landing page for LiquidRound, an AI-Native M&A + IPO Marketplace platform. This repository contains two complete implementations using different technologies.

## Project Structure

```
liquidround-landing/
├── nextjs-ui/          # NextJS/React implementation
│   └── liquidround-app/
├── fasthtml-ui/        # FastHTML/Python implementation
└── README.md          # This file
```

## Implementations

### NextJS Implementation (`nextjs-ui/`)

Modern React-based implementation using NextJS framework with Tailwind CSS styling.

**Technology Stack:**
- React 18 with Vite
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

**Running locally:**
```bash
cd nextjs-ui/liquidround-app
npm install
npm run dev
```

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

### Deploy NextJS to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from the NextJS directory:**
   ```bash
   cd nextjs-ui/liquidround-app
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `dist`

4. **For subsequent deployments:**
   ```bash
   vercel --prod
   ```

### Deploy NextJS to Render

1. **Create a new Static Site** on [Render](https://render.com)
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Root Directory:** `nextjs-ui/liquidround-app`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Deploy:** Render will automatically build and deploy

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

Choose the implementation that best fits your technology stack:

**For JavaScript/React developers:** Use the NextJS implementation
**For Python developers:** Use the FastHTML implementation

Both provide identical functionality and visual design, just using different underlying technologies.

## License

This project is proprietary to LiquidRound. All rights reserved.
