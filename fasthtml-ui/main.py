from fasthtml.common import *

# CSS for styling
css = """
/* Tailwind-inspired CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #374151;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.hero {
    background: linear-gradient(rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9)), url('/static/wave-background.png');
    background-size: cover;
    background-position: center;
    min-height: 80vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 4rem 0;
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 500;
    color: #059669;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero .blue-text {
    color: #2563eb;
    display: block;
}

.hero p {
    font-size: 1.25rem;
    color: #6b7280;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.badge {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #2563eb;
    color: white;
}

.btn-primary:hover {
    background: #1d4ed8;
}

.btn-secondary {
    background: white;
    color: #374151;
    border: 2px solid #d1d5db;
}

.btn-secondary:hover {
    background: #f9fafb;
}

.section {
    padding: 4rem 0;
}

.section h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #059669;
    text-align: center;
    margin-bottom: 1rem;
}

.section p {
    text-align: center;
    color: #6b7280;
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto 3rem;
}

.grid {
    display: grid;
    gap: 2rem;
}

.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.card {
    background: white;
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    text-align: center;
}

.card h3 {
    font-size: 1.25rem;
    color: #059669;
    margin-bottom: 1rem;
    font-weight: normal;
}

.card p {
    color: #6b7280;
    text-align: left;
}

.user-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.user-card p {
    color: #059669;
    font-weight: normal;
    text-align: center;
}

.icon {
    width: 3rem;
    height: 3rem;
    background: #dbeafe;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #2563eb;
    font-size: 1.5rem;
}

.user-icon {
    width: 3rem;
    height: 3rem;
    background: #dbeafe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #2563eb;
    font-size: 1.5rem;
}

.workflow-card {
    background: white;
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.workflow-card h3 {
    font-size: 1.5rem;
    color: #059669;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: normal;
}

.workflow-card h3::before {
    content: "📈";
    margin-right: 0.75rem;
}

.workflow-card.ma h3::before {
    content: "🤝";
}

.agent-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #f3f4f6;
}

.agent-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.agent-item::before {
    content: "✓";
    color: #2563eb;
    font-weight: bold;
    margin-right: 0.75rem;
    margin-top: 0.25rem;
}

.agent-name {
    font-weight: normal;
    color: #047857;
    margin-bottom: 0.25rem;
}

.agent-desc {
    color: #6b7280;
    font-size: 0.875rem;
}

.bg-light {
    background: #f9fafb;
}

.bg-blue {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    color: white;
}

.contact-section {
    background: linear-gradient(rgba(37, 99, 235, 0.9), rgba(30, 64, 175, 0.9)), url('/static/london-skyline-2.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 4rem 0;
}

.contact-section h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

.contact-section p {
    color: #bfdbfe;
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.contact-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
}

.contact-card h3 {
    color: white;
    margin-bottom: 1rem;
    font-weight: normal;
}

.contact-card p {
    color: #bfdbfe;
    text-align: left;
}

.navbar {
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2563eb;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
}

.nav-links a:hover {
    color: #2563eb;
}

.main-content {
    margin-top: 80px;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .section h2 {
        font-size: 2rem;
    }
    
    .grid-3, .grid-2 {
        grid-template-columns: 1fr;
    }
    
    .nav-links {
        display: none;
    }
}
"""

# Create the FastHTML app
app, rt = fast_app(
    hdrs=[
        Style(css),
        Meta(name="viewport", content="width=device-width, initial-scale=1.0"),
        Title("LiquidRound - AI-Native M&A + IPO Marketplace")
    ]
)

def Navbar():
    return Nav(
        Div(
            A("LiquidRound", href="#", cls="logo"),
            Ul(
                Li(A("Features", href="#features")),
                Li(A("How It Works", href="#how-it-works")),
                Li(A("Contact", href="#contact")),
                Li(A("Get Started", href="https://app.liquidround.com/", target="_blank", cls="btn btn-primary")),
                cls="nav-links"
            ),
            cls="container"
        ),
        cls="navbar"
    )

def Hero():
    return Section(
        Div(
            Div(
                Span("AI-Native M&A + IPO Marketplace", cls="badge"),
                H1(
                    "AI-driven Platform for",
                    Span("Every Deal Journey", cls="blue-text")
                ),
                P("Prep your company for IPO, direct-listing, or run a full buyer-led or seller-led M&A process—all powered by specialist AI agents that pull live market data, build documents, and simulate negotiations."),
                Div(
                    A("Get Started", href="https://app.liquidround.com/", target="_blank", cls="btn btn-primary"),
                    A("Schedule Demo", href="#contact", cls="btn btn-secondary")
                ),
                cls="container"
            ),
            cls="hero"
        )
    )

def TargetUsers():
    users = [
        "SMEs & Startups",
        "Buyers & Sellers", 
        "Professional Advisors",
        "Angel Investors",
        "Corporate Development",
        "Legal & Audit Teams"
    ]
    
    return Section(
        Div(
            H2("Empowering Every Deal Participant"),
            P("Whether you're an SME, startup, buyer, seller, or professional advisor—LiquidRound puts the power of AI-driven deal-making directly in your hands."),
            Div(
                *[Div(
                    Div("👥", cls="user-icon"),
                    P(user),
                    cls="user-card"
                ) for user in users],
                cls="grid grid-3"
            ),
            cls="container"
        ),
        cls="section"
    )

def Features():
    features = [
        ("📈", "Market Window Analysis", "Live IPO pipeline sentiment and timing intelligence"),
        ("🎯", "Target & Buyer Discovery", "AI-powered long-list generation with public/private tagging"),
        ("🛡️", "Risk Assessment", "Antitrust, CFIUS, ESG red-flag identification"),
        ("⚡", "Valuation Modeling", "DCF/LBO analysis with real-time consensus data"),
        ("👥", "Negotiation Simulation", "AI-powered counter-party role-play and strategy"),
        ("📄", "Document Automation", "Auto-generated memos, checklists, and due diligence")
    ]
    
    return Section(
        Div(
            H2("AI Agents That Handle Every Step"),
            P("Comprehensive deal intelligence powered by live market data, document automation, and strategic analysis."),
            Div(
                *[Div(
                    Div(icon, cls="icon"),
                    H3(title),
                    P(desc),
                    cls="card"
                ) for icon, title, desc in features],
                cls="grid grid-3"
            ),
            cls="container"
        ),
        cls="section bg-light",
        id="features"
    )

def AIAgentTeam():
    ipo_agents = [
        ("Market-Window Agent", "Live IPO pipeline sentiment and timing intelligence"),
        ("Comps-Screener Agent", "Last 12-month IPO comps, pop, and current return analysis"),
        ("Direct-List Scorer Agent", "0-100 score for direct listing suitability assessment"),
        ("Readiness-Coordinator Agent", "Auto-generates 30-step IPO checklist & Google-Doc")
    ]
    
    ma_agents = [
        ("Target-Finder Agent", "Long-list targets or buyers with auto-tagging for public companies"),
        ("Valuer Agent", "DCF/LBO analysis; if public → consensus EPS, target price, short interest"),
        ("Synergy-Analyst Agent", "Revenue & cost synergies; if public acquirer → accretion/dilution modeling"),
        ("Diligence-Coordinator Agent", "Creates data-room index & Notion board for project management")
    ]
    
    return Section(
        Div(
            H2("Meet your AI Agent Advisory Team"),
            P("Our orchestration pattern routes to IPO team or M&A team, running AI agents sequentially or in parallel with human-in-the-loop stops."),
            Div(
                Div(
                    H3("IPO & Direct Listing Path"),
                    *[Div(
                        Div(
                            H4(name, cls="agent-name"),
                            P(desc, cls="agent-desc")
                        ),
                        cls="agent-item"
                    ) for name, desc in ipo_agents],
                    cls="workflow-card"
                ),
                Div(
                    H3("M&A Transaction Path"),
                    *[Div(
                        Div(
                            H4(name, cls="agent-name"),
                            P(desc, cls="agent-desc")
                        ),
                        cls="agent-item"
                    ) for name, desc in ma_agents],
                    cls="workflow-card ma"
                ),
                cls="grid grid-2"
            ),
            cls="container"
        ),
        cls="section",
        id="how-it-works"
    )



def Contact():
    return Section(
        Div(
            Div(
                H2("Ready to Transform Your Deal Process?"),
                P("Get in touch with our team to see how LiquidRound can accelerate your M&A or IPO journey."),
                A("Start Your Demo", href="https://app.liquidround.com/", target="_blank", cls="btn btn-primary"),
                cls="container"
            ),
            Div(
                Div(
                    H3("Email"),
                    P("info@liquidround.com"),
                    cls="contact-card"
                ),
                Div(
                    H3("London Office"),
                    P("32-38 Leman St\nLondon E1 8EW\nUnited Kingdom"),
                    cls="contact-card"
                ),
                cls="contact-grid container"
            ),
            cls="container"
        ),
        cls="contact-section",
        id="contact"
    )

@rt("/")
def get():
    return Html(
        Head(
            Meta(charset="utf-8"),
            Meta(name="viewport", content="width=device-width, initial-scale=1.0"),
            Title("LiquidRound - AI-Native M&A + IPO Marketplace"),
            Style(css)
        ),
        Body(
            Navbar(),
            Div(
                Hero(),
                TargetUsers(),
                Features(),
                AIAgentTeam(),
                Contact(),
                cls="main-content"
            )
        )
    )

# Serve static files
@rt("/static/{fname:path}")
def static(fname: str):
    return FileResponse(f"static/{fname}")

if __name__ == "__main__":
    serve()
