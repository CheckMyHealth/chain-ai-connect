
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CircleCheck,
  Code,
  Database,
  DollarSign,
  Lock,
  Share,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  details?: string[];
}

const FeatureCard = ({ title, description, icon: Icon, details }: FeatureCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="blockchain-card h-full transition-all duration-300 hover:shadow-lg hover:border-blockchain-300 hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blockchain-100">
          <Icon className="h-6 w-6 text-blockchain-500" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {details && details.length > 0 && (
        <CardContent>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="text-sm text-blockchain-500 flex items-center gap-1 hover:text-blockchain-600 transition-colors">
              {isOpen ? "Show less" : "Learn more"} 
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-1.5">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 text-blockchain-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      )}
    </Card>
  );
};

const FeaturesSection = () => {
  const features: FeatureCardProps[] = [
    {
      title: "AI-Powered Partner Discovery",
      description: "Find the perfect blockchain partners through intelligent matchmaking",
      icon: Zap,
      details: [
        "Smart Profiling for detailed criteria matching",
        "ML-based compatibility scoring",
        "Real-time partner match alerts"
      ]
    },
    {
      title: "On-Chain Partnership Agreements",
      description: "Secure and transparent collaborative frameworks",
      icon: Lock,
      details: [
        "Pre-built smart contract templates",
        "Customizable partnership terms",
        "Enforceable blockchain agreements"
      ]
    },
    {
      title: "Tokenized Incentives",
      description: "Rewards and governance for active participation",
      icon: Star,
      details: [
        "Earn tokens for platform participation",
        "Staking pools for partnership commitment",
        "Governance voting rights for token holders"
      ]
    },
    {
      title: "Revenue-Sharing Models",
      description: "Streamlined financial collaboration between partners",
      icon: DollarSign,
      details: [
        "Automated profit distribution",
        "Transparent fee structure",
        "Shared liquidity pools"
      ]
    },
    {
      title: "Reputation & Trust Systems",
      description: "Build credibility through verifiable performance history",
      icon: Users,
      details: [
        "On-chain reputation scores",
        "Verified project badges and NFTs",
        "Community-driven reviews and ratings"
      ]
    },
    {
      title: "Cross-Chain Compatibility",
      description: "Connect with partners across multiple blockchains",
      icon: Share,
      details: [
        "Support for Ethereum, Solana, and more",
        "Layer 2 solution integration",
        "Bridge technology for seamless transfers"
      ]
    },
    {
      title: "Smart Data Analytics",
      description: "Gain insights from partnership performance metrics",
      icon: Database,
      details: [
        "Track collaboration success metrics",
        "Identify improvement opportunities",
        "Data-driven partnership optimization"
      ]
    },
    {
      title: "Developer Tools",
      description: "APIs and SDKs for custom integration",
      icon: Code,
      details: [
        "GraphQL API for custom applications",
        "Webhook integration options",
        "Comprehensive developer documentation"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blockchain-50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Partnership Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            ChainMatch.AI delivers a full suite of tools designed to make blockchain partnerships more accessible, transparent, and productive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              details={feature.details}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/post-project">
            <Button className="bg-blockchain-500 hover:bg-blockchain-600 text-white font-medium px-8 py-6 text-lg h-auto">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
