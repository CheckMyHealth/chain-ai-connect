
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart, Users, Activity, FileText, Wallet, Coins, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/project/ProjectCard";
import { projectService } from "@/services/projectService";
import { Project } from "@/types/database.types";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [projects, setProjects] = useState<Project[]>([]);
  const [userProjects, setUserProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const [allProjects, myProjects] = await Promise.all([
          projectService.getAllProjects(),
          projectService.getUserProjects()
        ]);
        setProjects(allProjects);
        setUserProjects(myProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast({
          title: 'Error',
          description: 'Failed to load projects',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleAcceptProject = (id: string) => {
    console.log(`Accepted project with ID: ${id}`);
    toast({
      title: 'Project Accepted',
      description: 'You have accepted this partnership opportunity',
    });
  };
  
  const handleDeclineProject = (id: string) => {
    console.log(`Declined project with ID: ${id}`);
    toast({
      title: 'Project Declined',
      description: 'You have declined this partnership opportunity',
    });
  };

  const transformProjectForCard = (project: Project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    company: project.company,
    logo: project.logo_url || "https://via.placeholder.com/64",
    partnershipType: project.partnership_type,
    status: "pending" as const
  });

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-10">
          <div className="container">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="font-display text-3xl font-bold tracking-tight">Dashboard</h1>
                <Link to="/post-project">
                  <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Post New Project
                  </Button>
                </Link>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">My Projects</p>
                        <div className="text-2xl font-bold">{userProjects.length}</div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blockchain-100 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blockchain-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Available Projects</p>
                        <div className="text-2xl font-bold">{projects.length}</div>
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
                  <TabsTrigger value="overview">All Projects</TabsTrigger>
                  <TabsTrigger value="my-projects">My Projects</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Available Partnership Opportunities</CardTitle>
                      <CardDescription>Discover and connect with projects looking for partnerships</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {loading ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-64 bg-gray-100 rounded-lg animate-pulse" />
                          ))}
                        </div>
                      ) : projects.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {projects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              project={transformProjectForCard(project)}
                              isMatch={true}
                              onAccept={handleAcceptProject}
                              onDecline={handleDeclineProject}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects available</h3>
                          <p className="text-gray-500 mb-4">Be the first to post a project!</p>
                          <Link to="/post-project">
                            <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                              Post Your Project
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="my-projects">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Projects</CardTitle>
                      <CardDescription>Manage your posted partnership projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {loading ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-64 bg-gray-100 rounded-lg animate-pulse" />
                          ))}
                        </div>
                      ) : userProjects.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {userProjects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              project={transformProjectForCard(project)}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects posted yet</h3>
                          <p className="text-gray-500 mb-4">Start by posting your first partnership project</p>
                          <Link to="/post-project">
                            <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                              Post Your First Project
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="analytics">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics & Insights</CardTitle>
                      <CardDescription>Track your project performance and partnership metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12">
                        <BarChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
                        <p className="text-gray-500">Detailed analytics and insights will be available soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
