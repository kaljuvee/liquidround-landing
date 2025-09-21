import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Brain, TrendingUp, Shield, Mail, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-700">LiquidRound</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#features" className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  How It Works
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link 
                  href="https://app.liquidround.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/wave-background.png"
            alt="Abstract Wave Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium text-green-700 mb-6 leading-tight">
              AI-driven Platform for
              <span className="text-blue-600 block">Every Deal Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Prep your company for IPO, direct-listing, or run a full buyer-led or seller-led M&A process—all powered by specialist AI agents that pull live market data, build documents, and simulate negotiations.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://app.liquidround.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-4 rounded-lg inline-flex items-center font-medium transition-colors"
              >
                Get Started <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-green-700 text-center mb-12">
            Empowering Every Deal Participant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "SMEs & Startups", desc: "Scale your business through strategic exits" },
              { title: "Buyers & Sellers", desc: "Navigate complex transactions with confidence" },
              { title: "Professional Advisors", desc: "Lawyers, auditors, and consultants" },
              { title: "Angel Investors", desc: "Identify and evaluate investment opportunities" },
              { title: "Corporate Development", desc: "Execute strategic acquisitions efficiently" },
              { title: "Financial Professionals", desc: "Access comprehensive deal intelligence" }
            ].map((user, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-normal text-green-700 mb-2">{user.title}</h3>
                <p className="text-gray-600">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-green-700 text-center mb-12">
            AI Agents That Handle Every Step
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Intelligent Analysis", desc: "AI-powered market research and valuation modeling" },
              { icon: TrendingUp, title: "Live Market Data", desc: "Real-time IPO pipeline sentiment and timing analysis" },
              { icon: Shield, title: "Secure Process", desc: "Enterprise-grade security for sensitive deal information" },
              { icon: Users, title: "Collaborative Platform", desc: "Seamless coordination between all stakeholders" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-normal text-green-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - AI Agent Advisory Team */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-green-700 text-center mb-8">
            Meet your AI Agent Advisory Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Our orchestration pattern routes to IPO team or M&A team, running AI agents sequentially or in parallel with human-in-the-loop stops.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* IPO Path */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-medium text-blue-700 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 mr-3" />
                IPO & Direct Listing Path
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Market-Window Agent", desc: "Live IPO pipeline sentiment and timing" },
                  { name: "Comps-Screener Agent", desc: "Last 12-month IPO comps and performance" },
                  { name: "Direct-List Scorer Agent", desc: "0-100 suitability assessment" },
                  { name: "Readiness-Coordinator Agent", desc: "Auto-generated 30-step IPO checklist" }
                ].map((agent, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-normal text-blue-800 text-lg">{agent.name}</h4>
                    <p className="text-gray-600">{agent.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* M&A Path */}
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-medium text-green-700 mb-6 flex items-center">
                <Users className="h-8 w-8 mr-3" />
                M&A Transaction Path
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Target-Finder Agent", desc: "Long-list generation with public/private tagging" },
                  { name: "Valuer Agent", desc: "DCF/LBO analysis with consensus data" },
                  { name: "Synergy-Analyst Agent", desc: "Revenue and cost synergies with accretion modeling" },
                  { name: "Diligence-Coordinator Agent", desc: "Automated data room index and project management" }
                ].map((agent, index) => (
                  <div key={index} className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-normal text-green-800 text-lg">{agent.name}</h4>
                    <p className="text-gray-600">{agent.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-green-700 mb-8">
            Backed by Leading Investors
          </h2>
          <p className="text-lg text-gray-600">
            Supported by{' '}
            <Link 
              href="https://antler.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 font-medium underline"
            >
              Antler
            </Link>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Get Started Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your deal process with AI-powered intelligence?
            </p>
            <Link
              href="https://app.liquidround.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium inline-flex items-center text-lg transition-colors"
            >
              Start Your Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-normal mb-2">Email Us</h3>
              <Link href="mailto:info@liquidround.com" className="text-blue-200 hover:text-white">
                info@liquidround.com
              </Link>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-normal mb-2">London Office</h3>
              <p className="text-blue-200">
                32-38 Leman St<br />
                London E1 8EW<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-normal text-gray-300 mb-4">LiquidRound</h3>
            <p className="text-gray-400">AI-Native M&A + IPO Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
