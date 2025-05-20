
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, BlockEdge",
    content: "ChainMatch.AI connected us with the perfect DeFi protocol for our cross-chain solution. The AI matching was spot-on, and we finalized our partnership in just two weeks!",
    stars: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, TokenSwap",
    content: "The smart contract templates saved us thousands in legal fees. Our revenue-sharing arrangement was up and running in days instead of months.",
    stars: 5
  },
  {
    name: "Aisha Patel",
    role: "Head of Partnerships, ChainSecure",
    content: "We've tried other partnership platforms, but ChainMatch's reputation system helped us find trustworthy collaborators that aligned with our security-focused values.",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blockchain-50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hear from blockchain projects that have found their perfect partnerships through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                
                <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
