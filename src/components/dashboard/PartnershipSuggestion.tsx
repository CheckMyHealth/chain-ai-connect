
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CircleCheck, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

type PartnershipSuggestion = {
  id: string;
  companyName: string;
  projectName: string;
  logo: string;
  description: string;
  matchScore: number;
  matchReasons: string[];
  blockchains: string[];
};

interface PartnershipSuggestionProps {
  suggestion: PartnershipSuggestion;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
}

const PartnershipSuggestion = ({
  suggestion,
  onAccept,
  onDecline,
}: PartnershipSuggestionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAccept = () => {
    setIsLoading(true);
    setTimeout(() => {
      onAccept(suggestion.id);
      toast({
        title: "Partnership request sent!",
        description: `You've sent a partnership request to ${suggestion.companyName}.`,
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleDecline = () => {
    onDecline(suggestion.id);
    toast({
      title: "Partnership declined",
      description: `You've declined the partnership with ${suggestion.companyName}.`,
    });
  };

  return (
    <Card className="blockchain-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center overflow-hidden">
              {suggestion.logo ? (
                <img
                  src={suggestion.logo}
                  alt={suggestion.companyName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-bold text-blockchain-500">
                  {suggestion.companyName.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">
                {suggestion.companyName}
              </h3>
              <p className="text-sm text-muted-foreground">
                {suggestion.projectName}
              </p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Badge
                    className={`
                      ${suggestion.matchScore > 85 ? 'bg-green-600' : 
                        suggestion.matchScore > 70 ? 'bg-blockchain-500' : 
                        'bg-amber-500'}
                    `}
                  >
                    {suggestion.matchScore}% Match
                  </Badge>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="w-80 p-4">
                <div className="space-y-2">
                  <h4 className="font-display font-medium">Match Analysis</h4>
                  <ul className="space-y-1">
                    {suggestion.matchReasons.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CircleCheck className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm">{suggestion.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestion.blockchains.map((blockchain) => (
            <Badge key={blockchain} variant="outline">
              {blockchain}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button
          variant="default"
          className="bg-blockchain-500 hover:bg-blockchain-600"
          onClick={handleAccept}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Request Partnership"}
        </Button>
        <Button variant="ghost" onClick={handleDecline}>
          Not Interested
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PartnershipSuggestion;
