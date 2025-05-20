
import { Card } from "@/components/ui/card";
import { CircleCheck, Zap, Lock, Star, DollarSign, Users } from "lucide-react";
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
    title: "Formalize With Smart Contracts",
    description: "Create transparent, enforceable partnership agreements using our on-chain smart contract templates.",
    icon: <DollarSign className="h-12 w-12 text-blockchain-500" />
  },
  {
    number: "05",
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-pattern opacity-10 transform rotate-12"></div>
      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blockchain-100 text-blockchain-500 mx-auto">
              <Zap className="h-6 w-6" />
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
            How ChainMatch.AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our platform simplifies the process of finding and establishing blockchain partnerships through a streamlined, secure workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold">Core Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start p-3 rounded-lg border border-blockchain-100 bg-white hover:shadow-md transition-all">
                    <div className="flex-shrink-0">
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
                  <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                    Learn More About Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200&h=900"
                alt="AI Partnership Process" 
                className="rounded-2xl shadow-2xl object-cover h-full w-full"
              />
              <div className="absolute -bottom-4 -left-4 rounded-full bg-blockchain-500 h-16 w-16 flex items-center justify-center text-white font-bold text-2xl animate-pulse">
                AI
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-blockchain-100 hidden lg:block"></div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-l-4 border-l-blockchain-500 transform transition-all hover:-translate-y-1 hover:shadow-lg">
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
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blockchain-50 to-transparent"></div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/how-it-works">
            <Button variant="outline" className="border-blockchain-500 text-blockchain-500 hover:bg-blockchain-50">
              View Full Process Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
