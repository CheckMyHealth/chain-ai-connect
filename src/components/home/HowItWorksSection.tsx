
import { Card } from "@/components/ui/card";
import { CircleCheck, Zap, Lock, Star, DollarSign, Users, FileText, Coins, Wallet, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Create Your Project Profile",
    description: "Set up your blockchain project profile with detailed information about your technology, goals, and partnership needs.",
    icon: <Zap className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "02",
    title: "AI-Powered Matching",
    description: "Our intelligent algorithm analyzes your requirements and matches you with compatible blockchain projects.",
    icon: <Lock className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "03",
    title: "Connect & Collaborate",
    description: "Reach out to potential partners, discuss terms, and establish partnership parameters through our secure platform.",
    icon: <Star className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "04",
    title: "On-Chain Partnership Agreements",
    description: "Create transparent, enforceable partnership agreements using our on-chain smart contract templates with flexible terms.",
    icon: <FileText className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "05",
    title: "Revenue-Sharing Models",
    description: "Set up automated revenue split mechanisms through smart contracts that distribute earnings based on agreed terms.",
    icon: <DollarSign className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "06",
    title: "Tokenized Incentives",
    description: "Earn tokens for active participation and successful partnerships that can be staked for platform governance.",
    icon: <Coins className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "07",
    title: "Track & Grow Together",
    description: "Monitor partnership performance, share resources, and scale your blockchain ecosystem collaboratively.",
    icon: <Users className="h-12 w-12 text-blockchain-500" />
  }
];

const features = [
  {
    title: "Smart Profiling",
    description: "Input detailed criteria about your project for precise matching"
  },
  {
    title: "Compatibility Scoring",
    description: "ML-based ranking of potential partners based on multiple factors"
  },
  {
    title: "Smart Contract Templates",
    description: "Pre-built agreements for different partnership types"
  },
  {
    title: "On-Chain Verification",
    description: "All partnerships are verified and recorded on the blockchain"
  },
  {
    title: "Tokenized Incentives",
    description: "Earn rewards for active participation on the platform"
  },
  {
    title: "Cross-Chain Support",
    description: "Connect with partners across multiple blockchain ecosystems"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blockchain-50 to-white overflow-hidden relative">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-pattern opacity-10 transform rotate-12"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blockchain-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blockchain-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute left-0 top-1/4 w-32 h-32 bg-blockchain-300/20 rounded-full animate-float" style={{ animationDuration: '10s' }}></div>
        <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-blockchain-200/20 rounded-full animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4 relative">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blockchain-100 text-blockchain-500 mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-blockchain-100 opacity-30 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <Zap className="h-8 w-8 relative z-10 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-blockchain-500 flex items-center justify-center text-white text-xs font-bold animate-pulse">AI</div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
            How ChainMatch.AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our platform simplifies the process of finding and establishing blockchain partnerships through a streamlined, secure workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold">Core Features</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex gap-3 items-start p-4 rounded-lg border border-blockchain-100 bg-white hover:shadow-md transition-all hover:-translate-y-1 hover:border-blockchain-300"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both',
                      animation: 'fade-in 0.6s ease-out'
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CircleCheck className="h-5 w-5 text-blockchain-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link to="/how-it-works">
                  <Button className="bg-blockchain-500 hover:bg-blockchain-600 group">
                    Learn More About Features
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-full w-full min-h-[400px] rounded-2xl bg-gradient-to-tr from-blockchain-100/50 to-blockchain-50/30 p-6 overflow-hidden border border-blockchain-200/50">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Animated elements */}
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-white p-3 rounded-lg shadow-lg animate-float z-20" style={{ animationDuration: '6s' }}>
                <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blockchain-500" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Partnership Match</p>
                  <p className="text-xs text-blockchain-500">92% Compatible</p>
                </div>
              </div>
              
              <div className="absolute bottom-12 right-8 w-48 bg-white p-3 rounded-lg shadow-lg animate-float z-20" style={{ animationDuration: '8s', animationDelay: '1s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-blockchain-100 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blockchain-500" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold">Smart Contract</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-blockchain-100 rounded-full">
                  <div className="h-2 w-3/4 bg-blockchain-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blockchain-500/10 rounded-full h-64 w-64 flex items-center justify-center">
                <div className="relative h-48 w-48 rounded-full bg-blockchain-500/20 flex items-center justify-center animate-pulse" style={{ animationDuration: '4s' }}>
                  <div className="h-32 w-32 rounded-full bg-blockchain-500/30 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-blockchain-500/90 flex items-center justify-center text-white">
                      <Zap className="h-10 w-10" />
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center animate-orbit" style={{ animationDuration: '10s' }}>
                    <Wallet className="h-5 w-5 text-blockchain-500" />
                  </div>
                  <div className="absolute h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center animate-orbit" style={{ animationDuration: '15s', animationDelay: '2s' }}>
                    <Coins className="h-4 w-4 text-blockchain-500" />
                  </div>
                  <div className="absolute h-9 w-9 rounded-full bg-white shadow-lg flex items-center justify-center animate-orbit" style={{ animationDuration: '12s', animationDelay: '1s' }}>
                    <DollarSign className="h-5 w-5 text-blockchain-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-blockchain-100 hidden lg:block"></div>
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-l-4 border-l-blockchain-500 transform transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ 
                  opacity: 0,
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both',
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-blockchain-100 w-16 h-16 flex items-center justify-center relative">
                      <span className="absolute font-display text-xs font-bold text-blockchain-500 -top-1 -right-1 bg-white rounded-full h-6 w-6 flex items-center justify-center border border-blockchain-100">{step.number}</span>
                      {step.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
                    <CircleCheck className="h-8 w-8 text-blockchain-500/20" />
                    <ArrowRight className="h-6 w-6 text-blockchain-500/30 mt-2 animate-pulse" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blockchain-50 to-transparent"></div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/how-it-works">
            <Button variant="outline" className="border-blockchain-500 text-blockchain-500 hover:bg-blockchain-50 group">
              View Full Process Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Add custom animation keyframes */}
        <style jsx>{`
          @keyframes orbit {
            0% {
              transform: translateX(-120px) translateY(0) scale(0.8);
              opacity: 0.8;
            }
            25% {
              transform: translateX(-60px) translateY(-80px) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateX(60px) translateY(0) scale(0.8);
              opacity: 0.8;
            }
            75% {
              transform: translateX(-60px) translateY(80px) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateX(-120px) translateY(0) scale(0.8);
              opacity: 0.8;
            }
          }
          .animate-orbit {
            animation-name: orbit;
            animation-duration: 12s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HowItWorksSection;
