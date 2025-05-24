import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CircleCheck, Zap, Lock, Share, Database, Code } from "lucide-react";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

const blockchainLogos = [
  { name: "Ethereum", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/eth.svg", fallback: "ETH" },
  { name: "Polygon", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/matic.svg", fallback: "MATIC" },
  { name: "Solana", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/sol.svg", fallback: "SOL" },
  { name: "Avalanche", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/avax.svg", fallback: "AVAX" },
  { name: "Binance", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/bnb.svg", fallback: "BNB" },
  { name: "Polkadot", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/dot.svg", fallback: "DOT" },
  { name: "Cosmos", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/atom.svg", fallback: "ATOM" },
  { name: "Cardano", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/ada.svg", fallback: "ADA" },
  { name: "Algorand", logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/algo.svg", fallback: "ALGO" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Animated Background */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blockchain-100 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-64 h-64 rounded-full bg-blockchain-200/20 -top-10 -left-10 animate-pulse"></div>
            <div className="absolute w-96 h-96 rounded-full bg-blockchain-300/20 top-1/4 right-1/3 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute w-72 h-72 rounded-full bg-blockchain-400/20 bottom-1/4 -right-20 animate-pulse" style={{ animationDuration: '12s' }}></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          </div>
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent animate-pulse">
                      AI-Powered
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-blockchain-500 transform scale-x-0 origin-left animate-[grow_3s_ease-in-out_infinite]"></span>
                  </span>{" "}
                  Blockchain Partnership Platform
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Connect with the perfect blockchain partners through our intelligent matching system. Grow your project ecosystem with strategic partnerships.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              
              {/* Updated scrolling blockchain logos */}
              <div className="mt-12 relative overflow-hidden h-16">
                <div className="absolute flex gap-8 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
                  {[...blockchainLogos, ...blockchainLogos].map((logo, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                      <div className="h-8 w-8 flex items-center justify-center">
                        <img src={logo.logo} alt={logo.name} className="h-full object-contain" />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />
        
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
