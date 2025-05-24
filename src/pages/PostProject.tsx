
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectForm from "@/components/project/ProjectForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PostProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 relative">
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

        {/* Coming Soon Overlay positioned only over main content */}
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="mx-4 max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blockchain-400 to-blockchain-600 shadow-lg">
              <svg
                className="h-8 w-8 text-white animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white">Coming Soon</h2>
            <p className="mb-6 text-white/80">
              We're working hard to bring you the best project posting experience. Stay tuned!
            </p>
            <div className="flex justify-center">
              <div className="h-2 w-24 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-blockchain-400 to-blockchain-600"></div>
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
