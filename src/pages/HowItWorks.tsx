
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Shield, ArrowRight, Lightbulb, Target, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blockchain-50 to-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                How ChainPartner <span className="text-blockchain-500">Works</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how our AI-powered platform connects blockchain projects and creates meaningful partnerships
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blockchain-500 hover:bg-blockchain-600">
                  <Link to="/post-project">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/explore">Explore Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">Simple 3-Step Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform makes it easy to find, connect, and collaborate with the right blockchain partners
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center group">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold text-xl group-hover:bg-blockchain-500 group-hover:text-white transition-colors">
                  1
                </div>
                <div className="mb-4">
                  <Lightbulb className="h-8 w-8 mx-auto text-blockchain-500 mb-2" />
                  <h3 className="font-display text-xl font-medium">Post Your Project</h3>
                </div>
                <p className="text-muted-foreground">
                  Share details about your blockchain project, including technology stack, partnership needs, and goals
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold text-xl group-hover:bg-blockchain-500 group-hover:text-white transition-colors">
                  2
                </div>
                <div className="mb-4">
                  <Target className="h-8 w-8 mx-auto text-blockchain-500 mb-2" />
                  <h3 className="font-display text-xl font-medium">AI Matching</h3>
                </div>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your project and identifies the most compatible partners based on multiple factors
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold text-xl group-hover:bg-blockchain-500 group-hover:text-white transition-colors">
                  3
                </div>
                <div className="mb-4">
                  <Handshake className="h-8 w-8 mx-auto text-blockchain-500 mb-2" />
                  <h3 className="font-display text-xl font-medium">Connect & Collaborate</h3>
                </div>
                <p className="text-muted-foreground">
                  Start conversations with matched partners and begin building strategic partnerships
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-4">Why Choose ChainPartner?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide the tools and intelligence you need to form successful blockchain partnerships
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="blockchain-card">
                <CardHeader>
                  <Zap className="h-8 w-8 text-blockchain-500 mb-2" />
                  <CardTitle>AI-Powered Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced algorithms analyze project compatibility, technology stacks, and partnership potential
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="blockchain-card">
                <CardHeader>
                  <Users className="h-8 w-8 text-blockchain-500 mb-2" />
                  <CardTitle>Global Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access a worldwide community of blockchain projects, developers, and businesses
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="blockchain-card">
                <CardHeader>
                  <Shield className="h-8 w-8 text-blockchain-500 mb-2" />
                  <CardTitle>Verified Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All projects and partners are verified to ensure quality and authenticity
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="blockchain-card">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-blockchain-500 mb-2" />
                  <CardTitle>Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Secure partnership agreements with blockchain-based smart contract templates
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="blockchain-card">
                <CardHeader>
                  <Target className="h-8 w-8 text-blockchain-500 mb-2" />
                  <CardTitle>Goal Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Find partners whose objectives and timelines align perfectly with your project
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="blockchain-card">
                <CardHeader>
                  <Handshake className="h-8 w-8 text-blockchain-500 mb-2" />
                  <CardTitle>Partnership Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Built-in communication and collaboration tools to streamline partnership development
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6">Ready to Find Your Perfect Partner?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of blockchain projects already using ChainPartner to build strategic partnerships
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blockchain-500 hover:bg-blockchain-600">
                  <Link to="/post-project">
                    Post Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/register">Join Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blockchain-card {
          transition: all 0.3s ease;
          border: 1px solid hsl(var(--border));
        }
        
        .blockchain-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.1);
          border-color: hsl(var(--blockchain-500));
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
