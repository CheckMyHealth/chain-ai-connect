
import { Card } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Project Profile",
    description: "Set up your blockchain project profile with detailed information about your technology, goals, and partnership needs."
  },
  {
    number: "02",
    title: "AI-Powered Matching",
    description: "Our intelligent algorithm analyzes your requirements and matches you with compatible blockchain projects."
  },
  {
    number: "03",
    title: "Connect & Collaborate",
    description: "Reach out to potential partners, discuss terms, and establish partnership parameters through our secure platform."
  },
  {
    number: "04",
    title: "Formalize With Smart Contracts",
    description: "Create transparent, enforceable partnership agreements using our on-chain smart contract templates."
  },
  {
    number: "05",
    title: "Track & Grow Together",
    description: "Monitor partnership performance, share resources, and scale your blockchain ecosystem collaboratively."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How ChainMatch.AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our platform simplifies the process of finding and establishing blockchain partnerships through a streamlined, secure workflow.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-l-4 border-l-blockchain-500">
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-blockchain-100 w-16 h-16 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-blockchain-500">{step.number}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
                  <CircleCheck className="h-8 w-8 text-blockchain-500/20" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
