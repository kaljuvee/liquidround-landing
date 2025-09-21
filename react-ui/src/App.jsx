import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Building2, TrendingUp, Users, Shield, Zap, Globe, CheckCircle, Mail, MapPin } from 'lucide-react'
import './App.css'

// Import assets
import londonSkyline1 from './assets/london-skyline-1.jpg'
import londonSkyline2 from './assets/london-skyline-2.jpg'
import londonSkyline3 from './assets/london-skyline-3.jpg'

function App() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      icon: TrendingUp,
      title: "Market Window Analysis",
      description: "Live IPO pipeline sentiment and timing intelligence"
    },
    {
      icon: Building2,
      title: "Target & Buyer Discovery",
      description: "AI-powered long-list generation with public/private tagging"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Antitrust, CFIUS, ESG red-flag identification"
    },
    {
      icon: Zap,
      title: "Valuation Modeling",
      description: "DCF/LBO analysis with real-time consensus data"
    },
    {
      icon: Users,
      title: "Negotiation Simulation",
      description: "AI-powered counter-party role-play and strategy"
    },
    {
      icon: Globe,
      title: "Document Automation",
      description: "Auto-generated memos, checklists, and due diligence"
    }
  ]

  const targetUsers = [
    "SMEs & Startups",
    "Buyers & Sellers", 
    "Professional Advisors",
    "Angel Investors",
    "Corporate Development",
    "Legal & Audit Teams"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LR</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LiquidRound</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="https://app.liquidround.com/" target="_blank" rel="noopener noreferrer">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={londonSkyline2} 
            alt="London Financial District" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              AI-Native M&A + IPO Marketplace
            </Badge>
            <h1 className="text-4xl md:text-6xl font-medium text-green-700 mb-6 leading-tight">
              AI-driven Platform for
              <span className="text-blue-600 block">Every Deal Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Prep your company for IPO, direct-listing, or run a full buyer-led or seller-led M&A process—all powered by specialist AI agents that pull live market data, build documents, and simulate negotiations.
            </p>
            <div className="flex justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-4 h-auto">
                <a href="https://app.liquidround.com/" target="_blank" rel="noopener noreferrer">
                  Get Started <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-green-700 mb-4">
              Empowering Every Deal Participant
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're an SME, startup, buyer, seller, or professional advisor—LiquidRound puts the power of AI-driven deal-making directly in your hands.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {targetUsers.map((user, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-blue-100">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="font-normal text-green-700">{user}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-green-700 mb-4">
              AI Agents That Handle Every Step
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive deal intelligence powered by live market data, document automation, and strategic analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card 
                  key={index} 
                  className={`hover:shadow-xl transition-all duration-300 border-blue-100 cursor-pointer ${
                    hoveredFeature === index ? 'scale-105 border-blue-300' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-green-700 font-normal">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-green-700 mb-4">
              Meet your AI Agent Advisory Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our orchestration pattern routes to IPO team or M&A team, running AI agents sequentially or in parallel with human-in-the-loop stops.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* IPO Path */}
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center font-normal">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  IPO & Direct Listing Path
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Market-Window Agent</h4>
                    <p className="text-gray-600">Live IPO pipeline sentiment and timing intelligence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Comps-Screener Agent</h4>
                    <p className="text-gray-600">Last 12-month IPO comps, pop, and current return analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Direct-List Scorer Agent</h4>
                    <p className="text-gray-600">0-100 score for direct listing suitability assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Readiness-Coordinator Agent</h4>
                    <p className="text-gray-600">Auto-generates 30-step IPO checklist & Google-Doc</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* M&A Path */}
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center font-normal">
                  <Building2 className="mr-3 h-6 w-6" />
                  M&A Transaction Path
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Target-Finder Agent</h4>
                    <p className="text-gray-600">Long-list targets or buyers with auto-tagging for public companies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Valuer Agent</h4>
                    <p className="text-gray-600">DCF/LBO analysis; if public → consensus EPS, target price, short interest</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Synergy-Analyst Agent</h4>
                    <p className="text-gray-600">Revenue & cost synergies; if public acquirer → accretion/dilution modeling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-normal text-green-800">Diligence-Coordinator Agent</h4>
                    <p className="text-gray-600">Creates data-room index & Notion board for project management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-green-700 mb-8">
            Backed by Leading Investors
          </h2>
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <p className="text-gray-600 max-w-md mb-4">
                Supported by <a 
                  href="https://antler.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors"
                >
                  Antler
                </a>, the global early-stage venture capital firm backing exceptional founders building innovative fintech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={londonSkyline3} 
            alt="London at Night" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-white mb-6">
                Ready to Transform Your Deal Process?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get in touch with our team to see how LiquidRound can accelerate your M&A or IPO journey.
              </p>
              <Button size="lg" variant="secondary" asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <a href="https://app.liquidround.com/" target="_blank" rel="noopener noreferrer">
                  Start Your Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-300 mt-1" />
                    <div>
                      <h3 className="font-normal mb-1">Email</h3>
                      <p className="text-blue-100">info@liquidround.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-300 mt-1" />
                    <div>
                      <h3 className="font-normal mb-1">London Office</h3>
                      <p className="text-blue-100">
                        32-38 Leman St<br />
                        London E1 8EW<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LR</span>
              </div>
              <span className="text-xl font-semibold">LiquidRound</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 LiquidRound. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
