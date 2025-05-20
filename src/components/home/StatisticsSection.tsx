
import { ArrowUp } from "lucide-react";

const statistics = [
  {
    value: "500+",
    label: "Active Projects",
    growth: "+24% growth"
  },
  {
    value: "320+",
    label: "Partnerships Formed",
    growth: "+32% growth"
  },
  {
    value: "$40M+",
    label: "Total Value Locked",
    growth: "+18% growth"
  },
  {
    value: "6",
    label: "Blockchain Networks",
    growth: "More coming soon"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl px-6 py-8 text-center shadow-sm hover:border-blockchain-200 transition-all"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-blockchain-600 mb-2">{stat.value}</p>
              <p className="text-sm md:text-base text-muted-foreground mb-3">{stat.label}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                <ArrowUp className="h-3 w-3" />
                <span>{stat.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
