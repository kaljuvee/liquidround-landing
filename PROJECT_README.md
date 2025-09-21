# LiquidRound Landing Page - Dual Implementation

Professional landing page for LiquidRound, an AI-Native M&A + IPO Marketplace platform. This repository contains two complete implementations of the same landing page using different technologies.

## Project Structure

```
liquidround-landing/
├── nextjs-ui/          # NextJS/React implementation
│   └── liquidround-app/
├── fasthtml-ui/        # FastHTML/Python implementation
├── README.md          # NextJS implementation details
└── PROJECT_README.md  # This comprehensive overview
```

## Implementations

### NextJS Implementation (`nextjs-ui/`)

Modern React-based implementation using NextJS framework with Tailwind CSS styling. This version provides a highly interactive and performant single-page application.

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

Python-based implementation using the FastHTML framework for server-side rendering. This version demonstrates how to build the same landing page using Python instead of JavaScript.

**Technology Stack:**
- Python FastHTML
- Custom CSS styling
- Uvicorn ASGI server
- Static file serving

**Running locally:**
```bash
cd fasthtml-ui
pip3 install python-fasthtml
python3 main.py
```

## Design Features

Both implementations maintain visual and functional parity with the following features:

### Visual Design
- **London Financial District Imagery**: Professional background images showcasing London's financial center
- **Green Color Scheme**: Consistent green branding (`#059669`) throughout the interface
- **Responsive Layout**: Mobile-first design that works across all device sizes
- **Modern Typography**: Clean, professional font choices with proper hierarchy

### Content Sections

**Hero Section**
- "AI-driven Platform for Every Deal Journey" headline
- Clear value proposition for AI-native M&A and IPO processes
- Call-to-action buttons linking to the demo application

**Target Users**
- SMEs & Startups, Buyers & Sellers, Professional Advisors
- Angel Investors, Corporate Development Teams, Legal & Audit Teams

**Meet your AI Agent Advisory Team**
- **IPO Path**: Market-Window Agent, Comps-Screener Agent, Direct-List Scorer Agent, Readiness-Coordinator Agent
- **M&A Path**: Target-Finder Agent, Valuer Agent, Synergy-Analyst Agent, Diligence-Coordinator Agent

**Contact Information**
- Demo link: https://liquidround.streamlit.app/
- Email: info@liquidround.com
- London Office: 155 Minories Street, Flat 275, London EC3N 1AD, United Kingdom

## Technical Specifications

### Color Palette
- Primary Green: `#059669` (text-green-700)
- Secondary Green: `#047857` (text-green-800)
- Blue Accent: `#2563eb` (text-blue-600)
- Gray Text: `#6b7280` (text-gray-600)
- Background: `#ffffff` / `#f9fafb`

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- Heading Weights: 500 (medium) - no heavy black text
- Body Text: 400 (normal)

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## Deployment Options

### NextJS Version
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

### FastHTML Version
- Railway
- Render
- Heroku
- Any Python hosting platform supporting ASGI

## Development Comparison

| Feature | NextJS | FastHTML |
|---------|--------|----------|
| Language | JavaScript/TypeScript | Python |
| Rendering | Client-side + SSG | Server-side |
| Styling | Tailwind CSS | Custom CSS |
| Components | React Components | Python Functions |
| Build Process | Vite/Webpack | None required |
| Deployment | Static files | Python server |
| Performance | Excellent (cached) | Good (server-rendered) |
| SEO | Excellent | Excellent |

## Key Requirements Met

✅ **Design Inspiration**: Based on OffDeal.io, Harmonic.ai, and PrimaryBid.com  
✅ **Messaging**: Avoids "investment bank" and "VCs" terminology  
✅ **Target Users**: Emphasizes SMEs, startups, buyers, sellers, and professional advisors  
✅ **Demo Integration**: Links to https://liquidround.streamlit.app/  
✅ **Contact Information**: London address and email included  
✅ **Visual Assets**: London imagery throughout  
✅ **Color Scheme**: Green theme with no heavy black text  
✅ **AI Agent Focus**: Detailed "Meet your AI Agent Advisory Team" section  

## Getting Started

Choose the implementation that best fits your technology stack:

**For JavaScript/React developers:**
```bash
cd nextjs-ui/liquidround-app
npm install && npm run dev
```

**For Python developers:**
```bash
cd fasthtml-ui
pip3 install python-fasthtml && python3 main.py
```

Both implementations will serve the same professional landing page with identical content and styling, just using different underlying technologies.
