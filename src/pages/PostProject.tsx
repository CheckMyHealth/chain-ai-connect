
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectForm from "@/components/project/ProjectForm";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PostProject = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-10">
          <div className="container max-w-4xl">
            <div className="space-y-2 text-center mb-8">
              <h1 className="font-display text-3xl font-bold tracking-tight">Post a Partnership Project</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Share details about your project and what kind of partnership you're looking for
              </p>
            </div>
              
            <Card className="blockchain-card">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Fill out the form below with information about your project and partnership requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectForm />
              </CardContent>
            </Card>
            
            <div className="mt-10">
              <h3 className="font-display text-xl font-medium mb-4">What happens next?</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="blockchain-card">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold">
                    1
                  </div>
                  <h4 className="font-display text-lg font-medium mb-2">AI Analysis</h4>
                  <p className="text-muted-foreground text-sm">
                    Our AI agent analyzes your project requirements and partnership needs
                  </p>
                </div>
                <div className="blockchain-card">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold">
                    2
                  </div>
                  <h4 className="font-display text-lg font-medium mb-2">Match Finding</h4>
                  <p className="text-muted-foreground text-sm">
                    We search for potential partners that align with your project goals
                  </p>
                </div>
                <div className="blockchain-card">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold">
                    3
                  </div>
                  <h4 className="font-display text-lg font-medium mb-2">Connect & Collaborate</h4>
                  <p className="text-muted-foreground text-sm">
                    Receive notifications about matches and connect with potential partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default PostProject;
