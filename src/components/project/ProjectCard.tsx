
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  description: string;
  company: string;
  logo: string;
  partnershipType: string[];
  matchScore?: number;
  status?: "pending" | "accepted" | "rejected";
};

interface ProjectCardProps {
  project: Project;
  isMatch?: boolean;
  onAccept?: (id: string) => void;
  onDecline?: (id: string) => void;
}

const ProjectCard = ({ project, isMatch = false, onAccept, onDecline }: ProjectCardProps) => {
  return (
    <Card className="blockchain-card overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative h-32 w-full overflow-hidden bg-gradient-to-r from-blockchain-500/10 to-blockchain-600/10 flex items-center justify-center">
          {project.logo && (
            <img
              src={project.logo}
              alt={project.company}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
            />
          )}
          {isMatch && project.matchScore && (
            <div className="absolute top-2 right-2">
              <Badge variant="default" className="bg-blockchain-500 hover:bg-blockchain-600">
                {project.matchScore}% Match
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{project.company}</p>
        <p className="text-sm line-clamp-3">{project.description}</p>
        <div className="flex gap-2 flex-wrap mt-4">
          {project.partnershipType.map((type) => (
            <Badge key={type} variant="outline">
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/project/${project.id}`}>
          <Button variant="ghost" size="sm">
            View Details
          </Button>
        </Link>
        {isMatch && project.status === "pending" && onAccept && onDecline && (
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="bg-blockchain-500 hover:bg-blockchain-600"
              onClick={() => onAccept(project.id)}
            >
              Accept
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onDecline(project.id)}
            >
              Decline
            </Button>
          </div>
        )}
        {isMatch && project.status === "accepted" && (
          <Badge variant="default" className="bg-green-600">
            Accepted
          </Badge>
        )}
        {isMatch && project.status === "rejected" && (
          <Badge variant="outline" className="text-destructive border-destructive">
            Declined
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
