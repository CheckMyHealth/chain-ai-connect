import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project/ProjectCard";
import PartnershipSuggestion from "@/components/dashboard/PartnershipSuggestion";
import { Button } from "@/components/ui/button";

// Mock data for the dashboard
const myProjects = [
  {
    id: "1",
    title: "Cross-chain DEX Integration",
    description: "Looking for partners to integrate our DEX across multiple blockchains to increase liquidity and trading volume.",
    company: "SwapX Protocol",
    logo: "",
    partnershipType: ["Technical Integration", "Liquidity"],
  },
  {
    id: "2",
    title: "NFT Marketplace Expansion",
    description: "Seeking blockchain partners for our NFT marketplace to expand our ecosystem and reach new communities.",
    company: "ArtBlock Chain",
    logo: "",
    partnershipType: ["Marketing", "Technical Integration"],
  },
];

const matchedPartnerships = [
  {
    id: "101",
    title: "DeFi Lending Platform",
    description: "Innovative lending platform with unique yield optimization strategies.",
    company: "LendBlock Finance",
    logo: "",
    partnershipType: ["Technical Integration", "Liquidity"],
    matchScore: 92,
    status: "pending" as "pending" | "accepted" | "rejected",
  },
  {
    id: "102",
    title: "Cross-chain Bridge Protocol",
    description: "Secure bridge solution connecting multiple blockchains with minimal fees.",
    company: "BridgeX Network",
    logo: "",
    partnershipType: ["Technical Integration", "Security"],
    matchScore: 87,
    status: "accepted" as "pending" | "accepted" | "rejected",
  },
  {
    id: "103",
    title: "Decentralized Identity Solution",
    description: "Self-sovereign identity platform for Web3 applications.",
    company: "IdentityChain",
    logo: "",
    partnershipType: ["Technical Integration", "Research"],
    matchScore: 75,
    status: "rejected" as "pending" | "accepted" | "rejected",
  },
];

const partnershipSuggestions = [
  {
    id: "201",
    companyName: "TokenSwap Finance",
    projectName: "Automated Market Maker",
    logo: "",
    description: "Leading AMM looking for cross-chain partners to expand liquidity pools and trading pairs.",
    matchScore: 94,
    matchReasons: [
      "Compatible technical requirements",
      "Complementary user bases",
      "Aligned roadmap milestones",
      "Similar market focus on DeFi",
    ],
    blockchains: ["Ethereum", "Polygon", "Avalanche"],
  },
  {
    id: "202",
    companyName: "ChainData Labs",
    projectName: "On-chain Analytics Platform",
    logo: "",
    description: "Advanced blockchain analytics platform seeking integration partners for expanded data services.",
    matchScore: 88,
    matchReasons: [
      "Technical stack compatibility",
      "Mutual benefit for both user bases",
      "Complementary services",
      "Strategic alignment",
    ],
    blockchains: ["Ethereum", "Solana", "NEAR"],
  },
  {
    id: "203",
    companyName: "SecureBlock Protocol",
    projectName: "Multi-sig Wallet Solution",
    logo: "",
    description: "Enterprise-grade multi-signature wallet solution looking for integration partners.",
    matchScore: 79,
    matchReasons: [
      "Security focus alignment",
      "Enterprise customer overlap",
      "Technical compatibility",
    ],
    blockchains: ["Ethereum", "Binance Smart Chain"],
  },
];

const Dashboard = () => {
  const [suggestions, setSuggestions] = useState(partnershipSuggestions);
  const [partnerships, setPartnerships] = useState(matchedPartnerships);

  const handleAcceptSuggestion = (id: string) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id));
    // In a real app, you'd send this to your backend
  };

  const handleDeclineSuggestion = (id: string) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id));
    // In a real app, you'd send this to your backend
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container">
          <div className="space-y-2 mb-8">
            <h1 className="font-display text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your projects and partnerships in one place
            </p>
          </div>

          <Tabs defaultValue="matches" className="space-y-8">
            <TabsList>
              <TabsTrigger value="matches">AI Matches</TabsTrigger>
              <TabsTrigger value="projects">My Projects</TabsTrigger>
              <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            </TabsList>
            
            <TabsContent value="matches" className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-display text-xl font-medium">Suggested Partnerships</h2>
                  <p className="text-sm text-muted-foreground">
                    Based on your project requirements and AI matching
                  </p>
                </div>
                
                {suggestions.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suggestions.map((suggestion) => (
                      <PartnershipSuggestion
                        key={suggestion.id}
                        suggestion={suggestion}
                        onAccept={handleAcceptSuggestion}
                        onDecline={handleDeclineSuggestion}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="blockchain-card text-center py-10">
                    <h3 className="font-display text-lg font-medium mb-2">No New Matches</h3>
                    <p className="text-muted-foreground">
                      Our AI agent is actively looking for perfect matches for your projects.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-display text-xl font-medium">Your Projects</h2>
                  <a href="/post-project">
                    <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                      + New Project
                    </Button>
                  </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partnerships" className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-display text-xl font-medium">Partnership Requests</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your existing and pending partnerships
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnerships.map((partnership) => (
                    <ProjectCard
                      key={partnership.id}
                      project={partnership}
                      isMatch={true}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
