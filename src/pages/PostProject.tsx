
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectForm from "@/components/project/ProjectForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PostProject = () => {
  return (
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

          {/* Relative container for Card and Overlay */}
          <div className="relative">
            {/* Blur overlay with Coming Soon message with glassmorphism effect */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/50 dark:bg-blockchain-900/50 z-10 flex flex-col items-center justify-center rounded-lg border border-white/20 shadow-lg">
              <div className="text-center max-w-md">
                <div className="inline-block mb-4 relative">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blockchain-100 text-blockchain-500 mx-auto overflow-hidden">
                    <div className="absolute inset-0 bg-blockchain-100 opacity-30 animate-pulse" style={{ animationDuration: '3s' }}></div>
                    <FileText className="h-10 w-10 relative z-10" />
                  </div>
                </div>
                <h2 className="text-3xl font-display font-bold mb-3 bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                  Project Submission Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're currently finalizing the project submission form. Check back soon to post your blockchain project for partnership matching!
                </p>
                <Link to="/">
                  <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                    Back to Home
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Original Post Project Form (blurred) */}
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
          </div>
          
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
  );
};

export default PostProject;
