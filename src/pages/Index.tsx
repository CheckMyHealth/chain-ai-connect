
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CircleCheck } from "lucide-react";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatisticsSection from "@/components/home/StatisticsSection";

const logos = [
  "Ethereum", "Polygon", "Solana", "Avalanche", "Binance", "Polkadot"
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blockchain-100 to-transparent pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          <div className="container relative">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">
                      AI-Powered
                    </span>{" "}
                    Blockchain Partnership Platform
                  </h1>
                  <p className="text-lg text-muted-foreground md:text-xl">
                    Connect with the perfect blockchain partners through our intelligent matching system. Grow your project ecosystem with strategic partnerships.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/post-project">
                    <Button className="bg-blockchain-500 hover:bg-blockchain-600 text-white font-medium px-8 py-6 text-lg h-auto">
                      Post Your Project
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button variant="outline" className="px-8 py-6 text-lg h-auto">
                      Explore Partnerships
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {logos.map((logo) => (
                    <div key={logo} className="rounded-full px-3 py-1 text-xs bg-white shadow-sm border">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-tr from-blockchain-300/20 to-blockchain-600/20 p-2 shadow-2xl">
                  <div className="absolute right-2 top-2 z-20 rounded-full bg-white p-2 shadow-lg">
                    <div className="rounded-full bg-blockchain-500 p-1 text-white">
                      <CircleCheck className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="relative h-full overflow-hidden rounded-xl bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="absolute left-0 top-0 h-full w-full animate-float rounded-xl bg-gradient-to-tr from-blockchain-500/50 to-blockchain-600/50 p-4 opacity-50 blur-3xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center px-6 py-8">
                      <div className="space-y-6 w-full">
                        {/* Mock UI */}
                        <div className="space-y-2">
                          <div className="h-6 w-1/2 rounded-md bg-gray-200"></div>
                          <div className="h-4 w-3/4 rounded-md bg-gray-100"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 rounded-lg bg-blockchain-100 p-3">
                            <div className="h-4 w-1/2 rounded bg-white"></div>
                            <div className="mt-2 h-3 w-3/4 rounded bg-white/70"></div>
                            <div className="mt-4 flex gap-1">
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                            </div>
                          </div>
                          <div className="h-24 rounded-lg bg-blockchain-100 p-3">
                            <div className="h-4 w-1/2 rounded bg-white"></div>
                            <div className="mt-2 h-3 w-3/4 rounded bg-white/70"></div>
                            <div className="mt-4 flex gap-1">
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                            </div>
                          </div>
                          <div className="h-24 rounded-lg bg-blockchain-100 p-3">
                            <div className="h-4 w-1/2 rounded bg-white"></div>
                            <div className="mt-2 h-3 w-3/4 rounded bg-white/70"></div>
                            <div className="mt-4 flex gap-1">
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                            </div>
                          </div>
                          <div className="h-24 rounded-lg bg-blockchain-100 p-3">
                            <div className="h-4 w-1/2 rounded bg-white"></div>
                            <div className="mt-2 h-3 w-3/4 rounded bg-white/70"></div>
                            <div className="mt-4 flex gap-1">
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                              <div className="h-3 w-8 rounded-full bg-white/50"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <StatisticsSection />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="bg-blockchain-500 py-16 md:py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
                  Ready to find your perfect blockchain partnership?
                </h2>
                <p className="text-white/80 text-lg">
                  Join hundreds of blockchain projects leveraging AI-powered matching to grow their ecosystems.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/post-project">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90 font-medium px-6 py-6 text-lg h-auto">
                    Post Your Project
                  </Button>
                </Link>
                <Link to="/explore">
                <Button className="bg-white text-blockchain-500 hover:bg-white/90 font-medium px-6 py-6 text-lg h-auto">
                    Explore Partnerships
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
