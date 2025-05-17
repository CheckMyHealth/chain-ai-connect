
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
import { Search, Loader2 } from "lucide-react";
import { projectService } from "@/services/projectService";
import { Project } from "@/types/database.types";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [partnershipTypeFilter, setPartnershipTypeFilter] = useState("");
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: projectService.getAllProjects
  });
  
  useEffect(() => {
    if (projects) {
      applyFilters();
    }
  }, [projects, searchTerm, partnershipTypeFilter]);
  
  const applyFilters = () => {
    if (!projects) return;
    
    let filtered = [...projects];
    
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
        project.partnership_type.some(
          (type) => type.toLowerCase() === partnershipTypeFilter.toLowerCase()
        )
      );
    }
    
    setFilteredProjects(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const handleReset = () => {
    setSearchTerm("");
    setPartnershipTypeFilter("");
    setFilteredProjects(projects || []);
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
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="technical">Technical Collaboration</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="integration">Product Integration</SelectItem>
                    <SelectItem value="research">Research & Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="bg-blockchain-500 hover:bg-blockchain-600">
                Search
              </Button>
            </form>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-blockchain-500" />
            </div>
          ) : error ? (
            <div className="blockchain-card text-center py-16">
              <h3 className="font-display text-xl font-medium mb-2">Error Loading Projects</h3>
              <p className="text-muted-foreground mb-4">
                We encountered an error while loading projects. Please try again later.
              </p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={{
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    company: project.company,
                    logo: project.logo_url || '',
                    partnershipType: project.partnership_type
                  }} 
                />
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
                onClick={handleReset}
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
