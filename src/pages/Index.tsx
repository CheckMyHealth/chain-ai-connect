
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CircleCheck, Zap, Lock, Share, Database, Code } from "lucide-react";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatisticsSection from "@/components/home/StatisticsSection";

const logos = [
  "Ethereum", "Polygon", "Solana", "Avalanche", "Binance", "Polkadot"
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blockchain-100 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          <div className="container relative">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                      AI-Powered
                    </span>{" "}
                    Blockchain Partnership Platform
                  </h1>
                  <p className="text-lg text-muted-foreground md:text-xl">
                    Connect with the perfect blockchain partners through our intelligent matching system. Grow your project ecosystem with strategic partnerships.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/post-project">
                    <Button className="bg-blockchain-500 hover:bg-blockchain-600 text-white font-medium px-8 py-6 text-lg h-auto">
                      Post Your Project
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button variant="outline" className="px-8 py-6 text-lg h-auto">
                      Explore Partnerships
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {logos.map((logo) => (
                    <div key={logo} className="rounded-full px-3 py-1 text-xs bg-white shadow-sm border">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-tr from-blockchain-300/20 to-blockchain-600/20 p-2 shadow-2xl">
                  <div className="absolute right-2 top-2 z-20 rounded-full bg-white p-2 shadow-lg">
                    <div className="rounded-full bg-blockchain-500 p-1 text-white">
                      <CircleCheck className="h-4 w-4" />
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=900" 
                    alt="AI Blockchain Partnership Platform" 
                    className="absolute inset-0 object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blockchain-500/30 to-blockchain-600/30 rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center px-6 py-8">
                    <div className="space-y-6 w-full relative z-10">
                      <div className="space-y-2">
                        <div className="h-6 w-1/2 rounded-md bg-white/80"></div>
                        <div className="h-4 w-3/4 rounded-md bg-white/60"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 rounded-lg glass p-3 backdrop-blur-md">
                          <div className="h-4 w-1/2 rounded bg-white/90"></div>
                          <div className="mt-2 h-3 w-3/4 rounded bg-white/70"></div>
                          <div className="mt-4 flex gap-1">
                            <div className="h-3 w-8 rounded-full bg-blockchain-500/80"></div>
                            <div className="h-3 w-8 rounded-full bg-white/70"></div>
                          </div>
                        </div>
                        <div className="h-24 rounded-lg glass p-3 backdrop-blur-md">
                          <div className="h-4 w-1/2 rounded bg-white/90"></div>
                          <div className="mt-2 h-3 w-3/4 rounded bg-white/70"></div>
                          <div className="mt-4 flex gap-1">
                            <div className="h-3 w-8 rounded-full bg-blockchain-500/80"></div>
                            <div className="h-3 w-8 rounded-full bg-white/70"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blockchain-500 p-6 shadow-lg hidden md:block animate-pulse">
                  <div className="rounded-full bg-white p-4 h-full w-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blockchain-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <StatisticsSection />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Core Technologies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blockchain-50 to-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Core Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our platform leverages cutting-edge blockchain and AI technologies to create a seamless partnership ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="h-16 w-16 rounded-full bg-blockchain-100 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blockchain-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">AI Matching Engine</h3>
                <p className="text-muted-foreground">Advanced machine learning algorithms that analyze project compatibility based on multiple factors</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="h-16 w-16 rounded-full bg-blockchain-100 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-blockchain-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Smart Contract Framework</h3>
                <p className="text-muted-foreground">Secure and transparent partnership agreements with customizable terms</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="h-16 w-16 rounded-full bg-blockchain-100 flex items-center justify-center mb-4">
                  <Share className="h-8 w-8 text-blockchain-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Cross-Chain Bridges</h3>
                <p className="text-muted-foreground">Connect and collaborate across multiple blockchain ecosystems seamlessly</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="h-16 w-16 rounded-full bg-blockchain-100 flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-blockchain-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-muted-foreground">Comprehensive insights and metrics to optimize your blockchain partnerships</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="h-16 w-16 rounded-full bg-blockchain-100 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-blockchain-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Developer APIs</h3>
                <p className="text-muted-foreground">Integrate ChainMatch.AI capabilities into your own applications and workflows</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="h-16 w-16 rounded-full bg-blockchain-100 flex items-center justify-center mb-4">
                  <CircleCheck className="h-8 w-8 text-blockchain-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Token Governance</h3>
                <p className="text-muted-foreground">Community-driven platform development through token-based voting and proposals</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-blockchain-500 py-16 md:py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
                  Ready to find your perfect blockchain partnership?
                </h2>
                <p className="text-white/80 text-lg">
                  Join hundreds of blockchain projects leveraging AI-powered matching to grow their ecosystems.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/post-project">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90 font-medium px-6 py-6 text-lg h-auto">
                    Post Your Project
                  </Button>
                </Link>
                <Link to="/explore">
                <Button className="bg-white text-blockchain-500 hover:bg-white/90 font-medium px-6 py-6 text-lg h-auto">
                    Explore Partnerships
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
