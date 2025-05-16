import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/project/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

// Mock data for projects
const allProjects = [
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
  {
    id: "3",
    title: "DeFi Yield Aggregator",
    description: "Our yield aggregator platform is looking for protocol partners to integrate and offer optimized yield strategies.",
    company: "YieldMax Finance",
    logo: "",
    partnershipType: ["Technical Integration", "Liquidity"],
  },
  {
    id: "4",
    title: "Web3 Gaming Platform",
    description: "Blockchain gaming platform seeking partnerships with game developers and NFT projects.",
    company: "GameBlock Studios",
    logo: "",
    partnershipType: ["Content Partnership", "Technical Integration"],
  },
  {
    id: "5",
    title: "Decentralized Identity Solution",
    description: "Self-sovereign identity protocol looking for integration partners across DeFi, gaming, and social applications.",
    company: "IdentityChain",
    logo: "",
    partnershipType: ["Technical Integration", "Research"],
  },
  {
    id: "6",
    title: "Cross-chain Bridge Protocol",
    description: "Secure bridge solution connecting multiple blockchains with minimal fees, seeking liquidity partners.",
    company: "BridgeX Network",
    logo: "",
    partnershipType: ["Technical Integration", "Security"],
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState(allProjects);
  const [partnershipTypeFilter, setPartnershipTypeFilter] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filtered = allProjects;
    
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (partnershipTypeFilter) {
      filtered = filtered.filter((project) =>
        project.partnershipType.some(
          (type) => type.toLowerCase() === partnershipTypeFilter.toLowerCase()
        )
      );
    }
    
    setProjects(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container">
          <div className="space-y-2 mb-8">
            <h1 className="font-display text-3xl font-bold tracking-tight">Explore Partnerships</h1>
            <p className="text-muted-foreground">
              Browse through available partnership opportunities across the blockchain ecosystem
            </p>
          </div>

          <div className="blockchain-card mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by project name, company, or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="w-full md:w-64">
                <Select
                  value={partnershipTypeFilter}
                  onValueChange={setPartnershipTypeFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Partnership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Technical Integration">Technical Integration</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Liquidity">Liquidity</SelectItem>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="Content Partnership">Content Partnership</SelectItem>
                    <SelectItem value="Security">Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="bg-blockchain-500 hover:bg-blockchain-600">
                Search
              </Button>
            </form>
          </div>

          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="blockchain-card text-center py-16">
              <h3 className="font-display text-xl font-medium mb-2">No Projects Found</h3>
              <p className="text-muted-foreground mb-4">
                No projects match your search criteria. Try adjusting your filters.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setPartnershipTypeFilter("");
                  setProjects(allProjects);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
