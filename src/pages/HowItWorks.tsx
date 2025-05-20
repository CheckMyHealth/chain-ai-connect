
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Post Your Project",
    description:
      "Start by sharing details about your blockchain project and what kind of partnership you're looking for. Be specific about your requirements, goals, and what you can offer to potential partners.",
    image: "step1",
  },
  {
    title: "AI Analysis & Matching",
    description:
      "Our intelligent AI agent analyzes your project and requirements, then searches for potential partners that align with your goals. The matching algorithm considers technical compatibility, business alignment, and mutual benefit potential.",
    image: "step2",
  },
  {
    title: "Review Partnership Suggestions",
    description:
      "Receive notifications about potential partnerships with detailed match scores and analysis. Review each suggestion to understand why our AI thinks it's a good match for your project.",
    image: "step3",
  },
  {
    title: "Connect & Collaborate",
    description:
      "Initiate contact with potential partners through our platform. Discuss the partnership details, finalize terms, and formalize your collaboration with immutable on-chain verification.",
    image: "step4",
  },
];

const benefits = [
  {
    title: "Time Efficiency",
    description:
      "Find relevant partners quickly without extensive manual searching and outreach.",
  },
  {
    title: "Higher Match Quality",
    description:
      "AI-powered matching ensures more relevant potential partnerships.",
  },
  {
    title: "Transparent Process",
    description:
      "All partnership details and agreements are recorded on-chain for maximum transparency.",
  },
  {
    title: "Cross-chain Discovery",
    description:
      "Connect with projects across different blockchain ecosystems.",
  },
  {
    title: "Reduced Risk",
    description:
      "Comprehensive analysis helps identify the most promising partnerships.",
  },
  {
    title: "Community Growth",
    description:
      "Expand your reach through strategic partnerships in the blockchain space.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blockchain-500 py-16 md:py-24 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                How ChainMatch.AI Works
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Our platform uses advanced AI to connect blockchain projects with
                strategic partners, creating value through intelligent matching and
                transparent collaboration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/post-project">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90">
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Partnership Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A simple yet powerful workflow to connect blockchain projects with
                the perfect partners
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`space-y-4 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blockchain-100 text-blockchain-500 font-bold mb-2">
                      {index + 1}
                    </div>
                    <h3 className="font-display text-2xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <div
                    className={`bg-gradient-to-tr from-blockchain-100 to-blockchain-200 rounded-2xl p-8 flex items-center justify-center ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    {/* Placeholder for step illustration */}
                    <div className="h-64 w-full bg-white/50 rounded-lg flex items-center justify-center">
                      <div className="text-blockchain-500 font-display font-bold text-xl">
                        {step.title} Illustration
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blockchain-50 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Benefits of AI-Powered Partnerships
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover why blockchain projects choose our platform for strategic
                partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="blockchain-card">
                  <h3 className="font-display text-xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Got questions about how ChainMatch.AI works? We've got answers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="blockchain-card">
                  <h3 className="font-display text-xl font-bold mb-2">
                    How does the AI matching work?
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes multiple factors including technical compatibility, business goals, target audience overlap, and partnership requirements to find the most suitable matches for your project.
                  </p>
                </div>
                <div className="blockchain-card">
                  <h3 className="font-display text-xl font-bold mb-2">
                    Is my project information secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, we take security seriously. Your sensitive project details are encrypted and only shared with potential partners after your explicit approval.
                  </p>
                </div>
                <div className="blockchain-card">
                  <h3 className="font-display text-xl font-bold mb-2">
                    How are partnerships verified on-chain?
                  </h3>
                  <p className="text-muted-foreground">
                    Once both parties agree to a partnership, the details are recorded in a smart contract on the blockchain, creating an immutable record of the collaboration.
                  </p>
                </div>
                <div className="blockchain-card">
                  <h3 className="font-display text-xl font-bold mb-2">
                    What blockchains do you support?
                  </h3>
                  <p className="text-muted-foreground">
                    We support projects on all major blockchains including Ethereum, Binance Smart Chain, Solana, Polygon, Avalanche, and more. Our platform is designed to enable cross-chain partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blockchain-500 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">
                Ready to find your next blockchain partnership?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join hundreds of projects already growing through strategic partnerships
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/post-project">
                  <Button className="bg-white text-blockchain-500 hover:bg-white/90 font-medium px-6 py-6 text-lg h-auto">
                    Get Started Now
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

export default HowItWorks;
