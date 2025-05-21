import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Coins, DollarSign, Shield, CircleCheck, Zap, ArrowRight, Lock } from "lucide-react";
import { useEffect, useRef } from "react";

const steps = [
  {
    title: "Post Your Project",
    description:
      "Start by sharing details about your blockchain project and what kind of partnership you're looking for. Be specific about your requirements, goals, and what you can offer to potential partners.",
    icon: <Zap className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-purple-400 to-blue-500",
  },
  {
    title: "AI Analysis & Matching",
    description:
      "Our intelligent AI agent analyzes your project and requirements, then searches for potential partners that align with your goals. The matching algorithm considers technical compatibility, business alignment, and mutual benefit potential.",
    icon: <CircleCheck className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Review Partnership Suggestions",
    description:
      "Receive notifications about potential partnerships with detailed match scores and analysis. Review each suggestion to understand why our AI thinks it's a good match for your project.",
    icon: <Shield className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Connect & Collaborate",
    description:
      "Initiate contact with potential partners through our platform. Discuss the partnership details, finalize terms, and formalize your collaboration with immutable on-chain verification.",
    icon: <FileText className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-cyan-500 to-emerald-500",
  },
  {
    title: "Create On-Chain Agreements",
    description:
      "Establish transparent and enforceable partnership agreements using our selection of smart contract templates. Customize terms for revenue splits, resource sharing, or milestone-based payments.",
    icon: <FileText className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-teal-400 to-emerald-500",
  },
  {
    title: "Setup Revenue-Sharing Models",
    description:
      "Configure automated revenue distribution mechanisms using our platform's smart contracts. Set parameters for profit splitting, fee structures, and payment schedules.",
    icon: <DollarSign className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Earn Tokenized Incentives",
    description:
      "Participate in the ecosystem to earn platform tokens that can be used for governance voting, premium features, or staked to demonstrate commitment to partnerships.",
    icon: <Coins className="h-10 w-10 text-blockchain-500" />,
    illustration: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500",
    color: "from-amber-400 to-orange-500",
  },
];

const benefits = [
  {
    title: "Time Efficiency",
    description:
      "Find relevant partners quickly without extensive manual searching and outreach.",
  },
  {
    title: "Higher Match Quality",
    description:
      "AI-powered matching ensures more relevant potential partnerships.",
  },
  {
    title: "Transparent Process",
    description:
      "All partnership details and agreements are recorded on-chain for maximum transparency.",
  },
  {
    title: "Cross-chain Discovery",
    description:
      "Connect with projects across different blockchain ecosystems.",
  },
  {
    title: "Reduced Risk",
    description:
      "Comprehensive analysis helps identify the most promising partnerships.",
  },
  {
    title: "Community Growth",
    description:
      "Expand your reach through strategic partnerships in the blockchain space.",
  },
];

const HowItWorks = () => {
  // Refs for animation on scroll
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blockchain-500 py-16 md:py-24 text-white overflow-hidden">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blockchain-400/30 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-blockchain-600/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-blockchain-400/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                <Zap className="h-10 w-10 text-white relative z-10 animate-bounce" style={{ animationDuration: '2s' }} />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 relative inline-block">
                How ChainMatch.AI Works
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/70 transform origin-left animate-[grow_2s_ease-in-out_infinite]"></div>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Our platform uses advanced AI to connect blockchain projects with
                strategic partners, creating value through intelligent matching and
                transparent collaboration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/post-project">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90 group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps - Enhanced with animations */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blockchain-50/50 to-white pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-blockchain-100/30 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-blockchain-200/20 rounded-full blur-3xl"></div>
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blockchain-100 mb-4">
                <FileText className="h-8 w-8 text-blockchain-500" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                Our Partnership Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A simple yet powerful workflow to connect blockchain projects with
                the perfect partners
              </p>
            </div>

            <div className="space-y-32 md:space-y-40">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={el => stepRefs.current[index] = el}
                  className={`opacity-0 grid md:grid-cols-2 gap-8 items-center transform transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blockchain-100 mb-4 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 animate-pulse`} style={{ animationDuration: '3s' }}></div>
                      {step.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="hidden md:block pt-3">
                      {index < steps.length - 1 && (
                        <div className="flex items-center text-sm text-blockchain-500 font-medium">
                          <span>Next: {steps[index + 1].title}</span>
                          <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="rounded-2xl overflow-hidden shadow-xl relative group">
                      {/* Illustration Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-90`}></div>
                      
                      {/* Interactive Animation Elements */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="w-full h-full relative">
                          {/* Step-specific illustrations */}
                          {index === 0 && (
                            <div className="flex flex-col items-center justify-center h-full">
                              <div className="bg-white/90 p-6 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                                <div className="w-12 h-12 bg-blockchain-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                  <Zap className="h-6 w-6 text-blockchain-500" />
                                </div>
                                <h4 className="font-bold text-center mb-2">Project Details</h4>
                                <div className="space-y-2">
                                  <div className="h-2 w-full bg-blockchain-100 rounded-full"></div>
                                  <div className="h-2 w-3/4 bg-blockchain-100 rounded-full"></div>
                                  <div className="h-2 w-full bg-blockchain-100 rounded-full"></div>
                                </div>
                                <div className="mt-4 pt-4 border-t flex justify-between">
                                  <span className="text-xs">DeFi Project</span>
                                  <span className="text-xs font-bold text-blockchain-500">Submit</span>
                                </div>
                              </div>
                              <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-lg shadow-md animate-float" style={{ animationDuration: '4s' }}>
                                <div className="flex items-center gap-2">
                                  <div className="h-6 w-6 rounded-full bg-blockchain-100 flex items-center justify-center">
                                    <CircleCheck className="h-3 w-3 text-blockchain-500" />
                                  </div>
                                  <span className="text-xs font-medium">Technical Details</span>
                                </div>
                              </div>
                              <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-lg shadow-md animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                  <div className="h-6 w-6 rounded-full bg-blockchain-100 flex items-center justify-center">
                                    <CircleCheck className="h-3 w-3 text-blockchain-500" />
                                  </div>
                                  <span className="text-xs font-medium">Partnership Goals</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 1 && (
                            <div className="flex items-center justify-center h-full">
                              <div className="relative">
                                <div className="bg-white/90 p-4 rounded-xl shadow-lg w-64 transform group-hover:scale-105 transition-transform">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="h-8 w-8 rounded-full bg-blockchain-100 flex items-center justify-center">
                                      <CircleCheck className="h-4 w-4 text-blockchain-500" />
                                    </div>
                                    <span className="font-bold">AI Matching</span>
                                  </div>
                                  <div className="space-y-2 mb-3">
                                    <div className="h-2 w-full bg-blockchain-100 rounded-full"></div>
                                    <div className="h-2 w-3/4 bg-blockchain-100 rounded-full"></div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs">Analyzing 24 factors</span>
                                    <div className="h-5 w-5 rounded-full bg-blockchain-500 animate-pulse"></div>
                                  </div>
                                </div>
                                
                                <div className="absolute -bottom-10 -right-16 bg-white/90 p-3 rounded-lg shadow-md animate-float" style={{ animationDuration: '4s' }}>
                                  <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-blockchain-500 flex items-center justify-center">
                                      <Zap className="h-3 w-3 text-white" />
                                    </div>
                                    <span className="text-xs font-medium">AI Processing</span>
                                  </div>
                                </div>
                                
                                <div className="absolute -top-12 -left-8 bg-white/90 p-2 rounded-lg shadow-md animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                  <div className="flex items-center gap-2">
                                    <div className="h-5 w-5 rounded-full bg-blockchain-100 flex items-center justify-center">
                                      <DollarSign className="h-3 w-3 text-blockchain-500" />
                                    </div>
                                    <span className="text-xs">Compatible Models</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 2 && (
                            <div className="flex flex-col items-center justify-center h-full">
                              <div className="relative bg-white/90 p-4 rounded-xl shadow-lg w-72 transform group-hover:scale-105 transition-transform">
                                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-blockchain-500 flex items-center justify-center text-white text-xs font-bold">
                                  95%
                                </div>
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center">
                                    <Shield className="h-5 w-5 text-blockchain-500" />
                                  </div>
                                  <div>
                                    <span className="font-bold block">DeFi Protocol XYZ</span>
                                    <span className="text-xs text-blockchain-500">High Match Score</span>
                                  </div>
                                </div>
                                <div className="space-y-2 mb-3">
                                  <div className="flex justify-between text-xs">
                                    <span>Technical Compatibility</span>
                                    <span className="font-bold">93%</span>
                                  </div>
                                  <div className="h-2 w-full bg-blockchain-100 rounded-full">
                                    <div className="h-2 w-[93%] bg-blockchain-500 rounded-full"></div>
                                  </div>
                                  
                                  <div className="flex justify-between text-xs">
                                    <span>Business Alignment</span>
                                    <span className="font-bold">89%</span>
                                  </div>
                                  <div className="h-2 w-full bg-blockchain-100 rounded-full">
                                    <div className="h-2 w-[89%] bg-blockchain-500 rounded-full"></div>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t">
                                  <span className="text-xs font-bold">View Details</span>
                                  <ArrowRight className="h-4 w-4 text-blockchain-500" />
                                </div>
                              </div>
                              
                              <div className="absolute bottom-10 right-10 bg-white/80 p-2 rounded-full shadow-md animate-float" style={{ animationDuration: '3s' }}>
                                <CircleCheck className="h-5 w-5 text-blockchain-500" />
                              </div>
                            </div>
                          )}
                          
                          {index === 3 && (
                            <div className="flex items-center justify-center h-full">
                              <div className="bg-white/90 p-5 rounded-xl shadow-lg w-72 transform group-hover:scale-105 transition-transform">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center">
                                      <FileText className="h-5 w-5 text-blockchain-500" />
                                    </div>
                                    <span className="font-bold">New Message</span>
                                  </div>
                                  <div className="bg-blockchain-500 text-white text-xs px-2 py-1 rounded-full">
                                    Now
                                  </div>
                                </div>
                                <p className="text-sm mb-4">
                                  Hi there! I reviewed your project details and believe our DeFi oracle solution could be a great fit for your needs...
                                </p>
                                <div className="flex justify-between items-center pt-3 border-t">
                                  <span className="text-xs font-medium text-blockchain-500">Reply Now</span>
                                  <div className="flex gap-2">
                                    <div className="h-6 w-6 rounded-full bg-blockchain-100 flex items-center justify-center">
                                      <ArrowRight className="h-3 w-3 text-blockchain-500" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="absolute top-6 left-6 bg-white/80 p-2 rounded-lg shadow-md animate-float" style={{ animationDuration: '4s' }}>
                                <div className="flex items-center gap-2">
                                  <div className="h-6 w-6 rounded-full bg-blockchain-100 flex items-center justify-center">
                                    <CircleCheck className="h-3 w-3 text-blockchain-500" />
                                  </div>
                                  <span className="text-xs">Compatible Partner</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 4 && (
                            <div className="flex items-center justify-center h-full">
                              <div className="bg-white/90 p-5 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform relative">
                                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-blockchain-500 flex items-center justify-center text-white text-xs animate-pulse">
                                  <FileText className="h-4 w-4" />
                                </div>
                                <h4 className="font-bold mb-3 text-center">Smart Contract Agreement</h4>
                                <div className="space-y-2 mb-4">
                                  <div className="flex justify-between text-xs">
                                    <span>Resource Sharing</span>
                                    <span>Enabled</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>Revenue Split</span>
                                    <span>60% / 40%</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>Contract Duration</span>
                                    <span>12 months</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>Auto-renew</span>
                                    <span>Yes</span>
                                  </div>
                                </div>
                                <div className="pt-3 border-t flex justify-center">
                                  <div className="bg-blockchain-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                    <CircleCheck className="h-3 w-3" />
                                    <span>Sign Contract</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="absolute bottom-6 left-6 bg-white/80 p-2 rounded-full shadow-md animate-float" style={{ animationDuration: '4s' }}>
                                <Shield className="h-5 w-5 text-blockchain-500" />
                              </div>
                              <div className="absolute top-6 right-6 bg-white/80 p-2 rounded-full shadow-md animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                <Lock className="h-5 w-5 text-blockchain-500" />
                              </div>
                            </div>
                          )}
                          
                          {index === 5 && (
                            <div className="flex items-center justify-center h-full">
                              <div className="bg-white/90 p-5 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                  <DollarSign className="h-5 w-5 text-blockchain-500" />
                                  Revenue Sharing Model
                                </h4>
                                <div className="relative h-24 mb-4">
                                  <div className="absolute left-0 bottom-0 w-2/5 h-full bg-blockchain-300/70 rounded-md flex items-end justify-center pb-1">
                                    <span className="text-xs font-bold">40%</span>
                                  </div>
                                  <div className="absolute left-2/5 bottom-0 w-3/5 h-full bg-blockchain-500/70 rounded-md flex items-end justify-center pb-1">
                                    <span className="text-xs font-bold text-white">60%</span>
                                  </div>
                                  <div className="absolute -top-3 left-2/5 transform -translate-x-1/2 text-xs">Partner A</div>
                                  <div className="absolute -top-3 right-1/4 text-xs">Partner B</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs">
                                    <span>Auto Distribution</span>
                                    <span className="font-medium">Every 7 days</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>Minimum Threshold</span>
                                    <span className="font-medium">0.5 ETH</span>
                                  </div>
                                </div>
                                <div className="mt-3 pt-3 border-t flex justify-center">
                                  <span className="text-xs font-medium">Verified On-Chain</span>
                                  <CircleCheck className="h-4 w-4 text-blockchain-500" />
                                </div>
                              </div>
                              
                              <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-lg shadow-md animate-float" style={{ animationDuration: '4s' }}>
                                <div className="flex items-center gap-2">
                                  <DollarSign className="h-4 w-4 text-blockchain-500" />
                                  <span className="text-xs font-medium">Auto-payments</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {index === 6 && (
                            <div className="flex items-center justify-center h-full">
                              <div className="bg-white/90 p-5 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                  <Coins className="h-5 w-5 text-blockchain-500" />
                                  Tokenized Incentives
                                </h4>
                                <div className="bg-gradient-to-r from-blockchain-100 to-blockchain-200 p-3 rounded-lg mb-4">
                                  <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">ChainMatch Tokens</span>
                                    <span className="text-sm font-bold">1,250 CMT</span>
                                  </div>
                                  <div className="h-2 w-full bg-white/50 rounded-full mb-1">
                                    <div className="h-2 w-3/4 bg-blockchain-500 rounded-full"></div>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>Level 3 Partner</span>
                                    <span>750 more to Level 4</span>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-center">
                                  <div className="bg-blockchain-100/50 p-2 rounded-lg">
                                    <div className="text-blockchain-500 font-bold text-lg">12%</div>
                                    <div className="text-xs">Governance Power</div>
                                  </div>
                                  <div className="bg-blockchain-100/50 p-2 rounded-lg">
                                    <div className="text-blockchain-500 font-bold text-lg">5</div>
                                    <div className="text-xs">Premium Features</div>
                                  </div>
                                </div>
                                <div className="mt-3 pt-2 border-t flex justify-center">
                                  <div className="text-xs font-medium text-blockchain-500 animate-pulse">Staking Available</div>
                                </div>
                              </div>
                              
                              <div className="absolute top-6 right-6 bg-white/80 p-2 rounded-full shadow-md animate-pulse">
                                <Coins className="h-4 w-4 text-blockchain-500" />
                              </div>
                              <div className="absolute bottom-6 left-6 bg-white/80 p-2 rounded-full shadow-md animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                                <Lock className="h-4 w-4 text-blockchain-500" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Background image with overlay */}
                      <img 
                        src={step.illustration} 
                        alt={step.title}
                        className="w-full h-72 md:h-96 object-cover opacity-20"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blockchain-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Benefits of AI-Powered Partnerships
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover why blockchain projects choose our platform for strategic
                partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-xl border border-blockchain-100 bg-white hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <h3 className="font-display text-xl font-bold mb-3 text-blockchain-600">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Got questions about how ChainMatch.AI works? We've got answers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-blockchain-100 hover:border-blockchain-300 transition-colors bg-white">
                  <h3 className="font-display text-xl font-bold mb-2 text-blockchain-600">
                    How does the AI matching work?
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes multiple factors including technical compatibility, business goals, target audience overlap, and partnership requirements to find the most suitable matches for your project.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-blockchain-100 hover:border-blockchain-300 transition-colors bg-white">
                  <h3 className="font-display text-xl font-bold mb-2 text-blockchain-600">
                    Is my project information secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, we take security seriously. Your sensitive project details are encrypted and only shared with potential partners after your explicit approval.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-blockchain-100 hover:border-blockchain-300 transition-colors bg-white">
                  <h3 className="font-display text-xl font-bold mb-2 text-blockchain-600">
                    How are partnerships verified on-chain?
                  </h3>
                  <p className="text-muted-foreground">
                    Once both parties agree to a partnership, the details are recorded in a smart contract on the blockchain, creating an immutable record of the collaboration.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-blockchain-100 hover:border-blockchain-300 transition-colors bg-white">
                  <h3 className="font-display text-xl font-bold mb-2 text-blockchain-600">
                    What blockchains do you support?
                  </h3>
                  <p className="text-muted-foreground">
                    We support projects on all major blockchains including Ethereum, Binance Smart Chain, Solana, Polygon, Avalanche, and more. Our platform is designed to enable cross-chain partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blockchain-500 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-blockchain-400/30 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blockchain-600/20 animate-pulse" style={{ animationDuration: '10s' }}></div>
          </div>
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">
                Ready to find your next blockchain partnership?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join hundreds of projects already growing through strategic partnerships
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/post-project">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90 font-medium px-6 py-6 text-lg h-auto">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Add custom animation keyframes */}
        <style jsx>{`
          @keyframes grow {
            0%, 100% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
