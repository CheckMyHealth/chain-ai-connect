
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, Flag, Milestone, Rocket } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Milestone {
  title: string;
  time: string;
  description: string;
  completed: boolean;
  deliverables: string[];
}

interface Phase {
  id: string;
  title: string;
  time: string;
  objective: string;
  milestones: Milestone[];
  current: boolean;
}

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState("phase1");
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading time for animation purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const phases: Phase[] = [
    {
      id: "phase1",
      title: "Discovery & Planning",
      time: "4–6 weeks",
      objective: "Validate the concept, finalize architecture, and build a core team.",
      current: true,
      milestones: [
        {
          title: "Market Research",
          time: "Week 1-2",
          description: "Market research report (competitors, user needs).",
          completed: true,
          deliverables: ["Competitive analysis", "User interviews", "Market sizing"]
        },
        {
          title: "Technical Whitepaper",
          time: "Week 2-4",
          description: "Technical whitepaper (tokenomics, AI/blockchain stack).",
          completed: true,
          deliverables: ["Tokenomics model", "Technical architecture", "AI integration plans"]
        },
        {
          title: "Core Team Hiring",
          time: "Week 3-6",
          description: "Core team hiring (blockchain devs, AI/ML engineers, UX designers).",
          completed: false,
          deliverables: ["Hiring plan", "Team structure", "Onboarding process"]
        },
        {
          title: "Legal & Compliance",
          time: "Week 4-6",
          description: "Legal/compliance review (token regulations, data privacy).",
          completed: false,
          deliverables: ["Regulatory framework", "Privacy policy", "Terms of service"]
        }
      ],
    },
    {
      id: "phase2",
      title: "MVP Development",
      time: "6–8 months",
      objective: "Launch a functional MVP with core features.",
      current: false,
      milestones: [
        {
          title: "Q1–Q2: Backend & AI Infrastructure",
          time: "Month 1-4",
          description: "Build core backend systems and AI matching capabilities.",
          completed: false,
          deliverables: [
            "AI matching engine (NLP for project descriptions, compatibility algorithms)",
            "Smart contracts for partnership agreements (e.g., revenue-sharing templates)",
            "Tokenomics design (staking, rewards, governance)",
            "Testnet prototype with basic matchmaking"
          ]
        },
        {
          title: "Q3: Frontend & Integration",
          time: "Month 5-6",
          description: "Develop user interfaces and integrate blockchain components.",
          completed: false,
          deliverables: [
            "User dashboards (project profiles, partnership feeds)",
            "Blockchain wallet integration (MetaMask, Phantom)",
            "Notification system (email, on-chain alerts)",
            "Closed beta release (invite-only testing)"
          ]
        },
        {
          title: "Q4: Testing & Iteration",
          time: "Month 7-8",
          description: "Testing, security audits, and user feedback incorporation.",
          completed: false,
          deliverables: [
            "Security audits (e.g., CertiK for smart contracts)",
            "User feedback loops (fix UX issues, optimize AI accuracy)",
            "Public MVP launch"
          ]
        }
      ],
    },
    {
      id: "phase3",
      title: "Scaling & Advanced Features",
      time: "6–8 months",
      objective: "Expand features, cross-chain support, and user base.",
      current: false,
      milestones: [
        {
          title: "Q1: DeFi & Monetization",
          time: "Month 1-2",
          description: "Implement financial and revenue-generation features.",
          completed: false,
          deliverables: [
            "Revenue-sharing pools (automated profit splits)",
            "Liquidity mining for partners",
            "Subscription tiers (premium analytics, AI insights)"
          ]
        },
        {
          title: "Q2: Cross-Chain & Reputation",
          time: "Month 3-4",
          description: "Expand blockchain support and reputation systems.",
          completed: false,
          deliverables: [
            "Cross-chain partnerships (Ethereum, Solana, etc.)",
            "On-chain reputation system (NFT badges, scores)"
          ]
        },
        {
          title: "Q3: Governance & DAO",
          time: "Month 5-6",
          description: "Implement decentralized governance mechanisms.",
          completed: false,
          deliverables: [
            "Governance tokens and voting mechanisms",
            "DAO for dispute resolution/community proposals"
          ]
        },
        {
          title: "Q4: Enterprise Adoption",
          time: "Month 7-8",
          description: "Focus on enterprise clients and partnerships.",
          completed: false,
          deliverables: [
            "Enterprise client onboarding (custom workflows, private chains)",
            "Consortium partnerships (Hyperledger, Enterprise Ethereum Alliance)"
          ]
        }
      ],
    },
    {
      id: "phase4",
      title: "Mainnet Launch & Ecosystem Growth",
      time: "3–4 months",
      objective: "Full decentralization, global marketing, and partnerships.",
      current: false,
      milestones: [
        {
          title: "Final Security & Launch",
          time: "Month 1-2",
          description: "Final security preparations and mainnet launch.",
          completed: false,
          deliverables: [
            "Final security audits",
            "Mainnet launch",
            "Token listing on major exchanges (Coinbase, Binance)"
          ]
        },
        {
          title: "Marketing & Growth",
          time: "Month 3-4",
          description: "Global marketing campaigns and ecosystem growth.",
          completed: false,
          deliverables: [
            "Marketing campaigns (hackathons, AMAs, influencer partnerships)",
            "10,000+ active users goal",
            "500+ partnerships facilitated"
          ]
        }
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const findCurrentPhase = () => {
    return phases.find(phase => phase.current)?.id || "phase1";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blockchain-100 to-transparent py-12 md:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="font-display text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                  ChainMatch.AI
                </span>{" "}
                Roadmap
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our comprehensive development plan to revolutionize blockchain partnerships through AI-powered matching.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue={findCurrentPhase()} className="max-w-5xl mx-auto" onValueChange={setActivePhase}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="bg-muted/50 p-1 flex-nowrap">
                  {phases.map((phase) => (
                    <TabsTrigger 
                      key={phase.id} 
                      value={phase.id}
                      className="whitespace-nowrap data-[state=active]:bg-blockchain-500 data-[state=active]:text-white"
                    >
                      Phase {phase.id.replace('phase', '')}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {phases.map((phase) => (
                <TabsContent 
                  key={phase.id} 
                  value={phase.id}
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <motion.div 
                    className="space-y-6 md:space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded && activePhase === phase.id ? "visible" : "hidden"}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-blockchain-100/50 to-blockchain-200/30 rounded-xl p-4 md:p-8 backdrop-blur-sm border border-blockchain-200/20 shadow-lg"
                      variants={itemVariants}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                        <div>
                          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">{phase.title}</h2>
                          <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-4">
                            <Clock className="h-4 w-4 text-blockchain-500" />
                            <span>{phase.time}</span>
                            {phase.current && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blockchain-500 text-white">
                                Current Phase
                              </span>
                            )}
                          </div>
                          <p className="text-base md:text-lg">{phase.objective}</p>
                        </div>
                        <div className="flex-shrink-0 mt-4 md:mt-0">
                          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-blockchain-500/10 flex items-center justify-center">
                            {phase.id === 'phase1' && <Flag className="h-8 w-8 md:h-12 md:w-12 text-blockchain-500" />}
                            {phase.id === 'phase2' && <Calendar className="h-8 w-8 md:h-12 md:w-12 text-blockchain-500" />}
                            {phase.id === 'phase3' && <Milestone className="h-8 w-8 md:h-12 md:w-12 text-blockchain-500" />}
                            {phase.id === 'phase4' && <Rocket className="h-8 w-8 md:h-12 md:w-12 text-blockchain-500" />}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6">Milestones</h3>
                      <div className="space-y-4 md:space-y-6">
                        {phase.milestones.map((milestone, index) => (
                          <motion.div 
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <div className="blockchain-card">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                                <div className="flex-grow">
                                  <h4 className="font-display text-lg md:text-xl font-bold">{milestone.title}</h4>
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>{milestone.time}</span>
                                  </div>
                                </div>
                                {milestone.completed ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
                                    Completed
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 whitespace-nowrap">
                                    Upcoming
                                  </span>
                                )}
                              </div>
                              <p className="text-muted-foreground mb-4">{milestone.description}</p>
                              
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="deliverables">
                                  <AccordionTrigger className="text-blockchain-500 font-semibold">
                                    View Deliverables
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <ul className="list-disc ml-5 space-y-2">
                                      {milestone.deliverables.map((deliverable, i) => (
                                        <li key={i}>{deliverable}</li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                            {index < phase.milestones.length - 1 && (
                              <div className="absolute h-full w-0.5 bg-blockchain-200/50 left-8 top-12 -z-10 hidden md:block"></div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16 bg-blockchain-50/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Complete Timeline</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1 bg-blockchain-200"></div>
                
                {phases.map((phase, phaseIndex) => (
                  <div key={phase.id} className="mb-12 md:mb-16 relative">
                    <div className="flex items-start md:items-center md:justify-center mb-6 md:mb-8 pl-12 md:pl-0">
                      <div className={`absolute left-0 md:static h-10 w-10 md:h-12 md:w-12 rounded-full z-10 flex items-center justify-center ${phase.current ? 'bg-blockchain-500 text-white' : 'bg-blockchain-200 text-blockchain-700'}`}>
                        <span className="font-bold">{phaseIndex + 1}</span>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="ml-12 md:ml-0 md:w-3/4 md:mx-auto bg-white rounded-xl shadow-lg border border-blockchain-100 overflow-hidden"
                    >
                      <div className="p-4 md:p-6">
                        <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base">{phase.time} • {phase.objective}</p>
                        
                        <div className="space-y-3 md:space-y-4">
                          {phase.milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className={`mt-1 h-3 w-3 md:h-4 md:w-4 rounded-full flex-shrink-0 ${milestone.completed ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                              <div>
                                <h4 className="font-medium text-sm md:text-base">{milestone.title}</h4>
                                <p className="text-xs md:text-sm text-muted-foreground">{milestone.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-blockchain-500">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-4 md:mb-6">Join Our Journey</h2>
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8">
                Be part of the ChainMatch.AI ecosystem and help shape the future of blockchain partnerships.
                Stay updated with our development progress and upcoming features.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="bg-white text-blockchain-500 px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Join Our Community
                </a>
                <a href="#" className="bg-transparent border border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Subscribe to Updates
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
