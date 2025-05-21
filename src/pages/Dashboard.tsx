
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart, Users, Activity, FileText, Wallet, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import PartnershipSuggestion from "@/components/dashboard/PartnershipSuggestion";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const handleAccept = (id: string) => {
    console.log(`Accepted partnership with ID: ${id}`);
  };
  
  const handleDecline = (id: string) => {
    console.log(`Declined partnership with ID: ${id}`);
  };

  // Sample partnership data that matches the component props
  const partnershipSuggestions = [
    {
      id: "1",
      companyName: "Protocol X",
      projectName: "Layer 1 blockchain protocol",
      description: "Layer 1 blockchain protocol with smart contract capabilities",
      matchScore: 95,
      matchReasons: ["Technology compatibility", "Market alignment", "Complementary user base"],
      blockchains: ["Ethereum", "Polygon"],
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
    },
    {
      id: "2",
      companyName: "DeFi Project Y",
      projectName: "Decentralized lending platform",
      description: "Decentralized lending and borrowing platform",
      matchScore: 87,
      matchReasons: ["Shared target audience", "Integration potential", "Technical synergy"],
      blockchains: ["Solana", "Avalanche"],
      logo: "https://cryptologos.cc/logos/aave-aave-logo.png"
    },
    {
      id: "3",
      companyName: "NFT Platform Z",
      projectName: "Digital art marketplace",
      description: "Digital art marketplace and NFT minting platform",
      matchScore: 82,
      matchReasons: ["Complementary services", "Audience overlap", "Expansion opportunity"],
      blockchains: ["Ethereum", "Flow"],
      logo: "https://cryptologos.cc/logos/enjin-coin-enj-logo.png"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container">
          {/* Coming Soon Overlay */}
          <div className="relative">
            {/* Blur overlay with Coming Soon message with glassmorphism effect */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/50 dark:bg-blockchain-900/50 z-10 flex flex-col items-center justify-center rounded-lg border border-white/20 shadow-lg">
              <div className="text-center max-w-md">
                <div className="inline-block mb-4 relative">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blockchain-100 text-blockchain-500 mx-auto overflow-hidden">
                    <div className="absolute inset-0 bg-blockchain-100 opacity-30 animate-pulse" style={{ animationDuration: '3s' }}></div>
                    <Wallet className="h-10 w-10 relative z-10" />
                  </div>
                </div>
                <h2 className="text-3xl font-display font-bold mb-3 bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're currently building the Dashboard with powerful tools to manage your blockchain partnerships. Check back soon!
                </p>
                <Link to="/">
                  <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                    Back to Home
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Original Dashboard content (blurred) */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="font-display text-3xl font-bold tracking-tight">Dashboard</h1>
                <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                  Add New Partnership <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Active Partnerships</p>
                        <div className="text-2xl font-bold">3</div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blockchain-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-blockchain-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Total Revenue</p>
                        <div className="text-2xl font-bold">$12,450</div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blockchain-100 flex items-center justify-center">
                        <Wallet className="h-6 w-6 text-blockchain-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Partnership Activity</p>
                        <div className="text-2xl font-bold">+12%</div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blockchain-100 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-blockchain-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Tokens Earned</p>
                        <div className="text-2xl font-bold">567</div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blockchain-100 flex items-center justify-center">
                        <Coins className="h-6 w-6 text-blockchain-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs
                defaultValue="overview"
                value={activeTab}
                onValueChange={setActiveTab}
                className="space-y-4"
              >
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>Revenue Overview</span>
                          <BarChart className="h-5 w-5 text-blockchain-500" />
                        </CardTitle>
                        <CardDescription>Your partnership revenue for the last 30 days</CardDescription>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <div className="h-[200px] bg-blockchain-50"></div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>Partnership Status</span>
                          <Users className="h-5 w-5 text-blockchain-500" />
                        </CardTitle>
                        <CardDescription>Current state of your active partnerships</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-2 border-b">
                            <div className="font-medium">Protocol X Integration</div>
                            <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Active</div>
                          </div>
                          <div className="flex items-center justify-between pb-2 border-b">
                            <div className="font-medium">DeFi Project Y Collaboration</div>
                            <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">In Progress</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">NFT Platform Z Partnership</div>
                            <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Proposed</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Recent Documents</span>
                        <FileText className="h-5 w-5 text-blockchain-500" />
                      </CardTitle>
                      <CardDescription>Recently created or updated partnership documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-blockchain-100 rounded-md flex items-center justify-center mr-3">
                              <FileText className="h-5 w-5 text-blockchain-500" />
                            </div>
                            <div>
                              <div className="font-medium">Protocol X Agreement</div>
                              <div className="text-xs text-muted-foreground">Updated 2 days ago</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                        
                        <div className="flex items-center justify-between pb-2 border-b">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-blockchain-100 rounded-md flex items-center justify-center mr-3">
                              <FileText className="h-5 w-5 text-blockchain-500" />
                            </div>
                            <div>
                              <div className="font-medium">Revenue Split Model</div>
                              <div className="text-xs text-muted-foreground">Updated 1 week ago</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-blockchain-100 rounded-md flex items-center justify-center mr-3">
                              <FileText className="h-5 w-5 text-blockchain-500" />
                            </div>
                            <div>
                              <div className="font-medium">Partnership Proposal</div>
                              <div className="text-xs text-muted-foreground">Created 2 weeks ago</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="partnerships">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Partnerships</CardTitle>
                      <CardDescription>Manage your ongoing blockchain partnerships</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {partnershipSuggestions.map((suggestion) => (
                          <PartnershipSuggestion
                            key={suggestion.id}
                            suggestion={suggestion}
                            onAccept={handleAccept}
                            onDecline={handleDecline}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
