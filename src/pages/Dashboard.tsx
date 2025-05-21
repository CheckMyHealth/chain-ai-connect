
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project/ProjectCard";
import PartnershipSuggestion from "@/components/dashboard/PartnershipSuggestion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, Chart, FileContract, Wallet, Users, Search, Plus, ArrowLeft, ArrowRight, CoinStack, Zap } from "lucide-react";

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

// New stats data
const dashboardStats = [
  { label: "Partnership Matches", value: "7", icon: <Users className="h-5 w-5 text-blockchain-500" />, change: "+3 this week" },
  { label: "Your Projects", value: "2", icon: <FileContract className="h-5 w-5 text-blockchain-500" />, change: "Active" },
  { label: "ChainMatch Score", value: "86", icon: <Chart className="h-5 w-5 text-blockchain-500" />, change: "+12 points" },
  { label: "CMATCH Tokens", value: "500", icon: <CoinStack className="h-5 w-5 text-blockchain-500" />, change: "+50 last month" },
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
      <main className="flex-grow py-10 bg-gradient-to-br from-white to-blockchain-50/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your projects and partnerships in one place
              </p>
            </div>
            <div className="flex gap-2">
              <Link to="/explore">
                <Button variant="outline" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  <span>Find Partners</span>
                </Button>
              </Link>
              <Link to="/post-project">
                <Button className="bg-blockchain-500 hover:bg-blockchain-600 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span>New Project</span>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardStats.map((stat, index) => (
              <Card key={index} className="p-4 border border-blockchain-100 bg-white hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blockchain-50 p-2 rounded-full">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                  <div className="text-xs text-green-600">{stat.change}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-4 border border-blockchain-100 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-display text-xl font-medium">Recent Activity</h2>
              <Button variant="ghost" className="text-sm text-blockchain-500">View All</Button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-center p-3 border-b border-blockchain-50">
                <div className="bg-green-100 p-2 rounded-full">
                  <Bell className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm">New partnership match: <span className="font-medium">TokenSwap Finance</span></p>
                  <p className="text-xs text-muted-foreground">35 minutes ago</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex gap-3 items-center p-3 border-b border-blockchain-50">
                <div className="bg-blockchain-100 p-2 rounded-full">
                  <Wallet className="h-4 w-4 text-blockchain-500" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm">You earned <span className="font-medium">50 CMATCH</span> tokens</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <Button variant="outline" size="sm">Details</Button>
              </div>
              <div className="flex gap-3 items-center p-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FileContract className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm"><span className="font-medium">BridgeX Network</span> accepted your partnership</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="matches" className="space-y-8">
            <TabsList className="bg-white border border-blockchain-100 p-1">
              <TabsTrigger value="matches" className="data-[state=active]:bg-blockchain-500 data-[state=active]:text-white">AI Matches</TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-blockchain-500 data-[state=active]:text-white">My Projects</TabsTrigger>
              <TabsTrigger value="partnerships" className="data-[state=active]:bg-blockchain-500 data-[state=active]:text-white">Partnerships</TabsTrigger>
            </TabsList>
            
            <TabsContent value="matches" className="space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-display text-xl font-medium">Suggested Partnerships</h2>
                    <p className="text-sm text-muted-foreground">
                      Based on your project requirements and AI matching
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Sort by:</span>
                    <select className="bg-transparent border border-blockchain-100 rounded px-2 py-1">
                      <option>Match Score</option>
                      <option>Recent</option>
                    </select>
                  </div>
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
                  <div className="p-10 rounded-xl border border-blockchain-100 bg-white text-center">
                    <div className="bg-blockchain-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-blockchain-500" />
                    </div>
                    <h3 className="font-display text-lg font-medium mb-2">No New Matches</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Our AI agent is actively looking for perfect matches for your projects. Check back soon!
                    </p>
                    <div className="mt-6">
                      <Button variant="outline" className="border-blockchain-500 text-blockchain-500">
                        Refine Your Project Details
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-6">
                  <Button variant="outline" size="sm" disabled className="flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-display text-xl font-medium">Your Projects</h2>
                    <p className="text-sm text-muted-foreground">
                      Manage your existing blockchain projects
                    </p>
                  </div>
                  <Link to="/post-project">
                    <Button className="bg-blockchain-500 hover:bg-blockchain-600 flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      New Project
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partnerships" className="space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-display text-xl font-medium">Partnership Requests</h2>
                    <p className="text-sm text-muted-foreground">
                      Manage your existing and pending partnerships
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>Filter:</span>
                    <select className="bg-transparent border border-blockchain-100 rounded px-2 py-1">
                      <option>All</option>
                      <option>Pending</option>
                      <option>Accepted</option>
                      <option>Rejected</option>
                    </select>
                  </div>
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
