# LiquidRound Landing Page - FastHTML Implementation

This is a FastHTML version of the LiquidRound AI-Native M&A + IPO Marketplace landing page.

## Features

- **FastHTML Framework**: Built using Python FastHTML for server-side rendering
- **Responsive Design**: Mobile-first responsive layout
- **London Imagery**: Professional London financial district background images
- **Green Color Scheme**: Consistent green branding throughout
- **AI Agent Showcase**: Detailed presentation of AI agents for IPO and M&A workflows
- **Contact Integration**: Direct links to demo and contact information

## Structure

- `main.py` - Main FastHTML application
- `static/` - Static assets (images)
- `README.md` - This file

## Running Locally

```bash
# Install dependencies
pip3 install -r requirements.txt

# Run the application
python3 main.py
```

The application will be available at `http://localhost:5001`

## Production Deployment

### Deploy to Render

1. **Create a new Web Service** on [Render](https://render.com)
2. **Connect your GitHub repository** containing the FastHTML code
3. **Configure the service:**
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python main.py`
   - **Environment:** Python 3
   - **Root Directory:** `fasthtml-ui` (if deploying from the full repo)

4. **Environment Variables** (if needed):
   - `PORT`: Render will automatically set this
   - `HOST`: Set to `0.0.0.0` (FastHTML handles this automatically)

5. **Deploy:** Render will automatically build and deploy your application

### Deploy to Railway

1. **Create a new project** on [Railway](https://railway.app)
2. **Connect your GitHub repository**
3. **Configure deployment:**
   - Railway will automatically detect Python and install from `requirements.txt`
   - Start command: `python main.py`
   - Port: FastHTML automatically uses the PORT environment variable

### Deploy to Heroku

1. **Create a Procfile** in the fasthtml-ui directory:
   ```
   web: python main.py
   ```
2. **Deploy using Heroku CLI:**
   ```bash
   heroku create your-app-name
   git subtree push --prefix fasthtml-ui heroku main
   ```

### General Production Notes

- FastHTML automatically binds to `0.0.0.0` and uses the `PORT` environment variable when available
- The application serves static files from the `static/` directory
- All major Python hosting platforms (Render, Railway, Heroku, Fly.io) support FastHTML applications
- No additional configuration files (like `render.yaml`) are needed - the platform will detect Python and use `requirements.txt`

## Key Components

### Hero Section
- AI-driven platform messaging
- London skyline background
- Call-to-action buttons

### Target Users
- SMEs & Startups
- Buyers & Sellers
- Professional Advisors
- Angel Investors
- Corporate Development
- Legal & Audit Teams

### AI Agent Advisory Team
- **IPO Path**: Market-Window, Comps-Screener, Direct-List Scorer, Readiness-Coordinator agents
- **M&A Path**: Target-Finder, Valuer, Synergy-Analyst, Diligence-Coordinator agents

### Contact Section
- Demo link to Streamlit app
- London office address
- Email contact

## Technology Stack

- **FastHTML**: Python web framework
- **CSS**: Custom responsive styling
- **Static Files**: Image assets served via FastHTML

## Deployment

The application can be deployed to any Python hosting platform that supports FastHTML/Uvicorn.
