
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleCheck, Link as LinkIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blockchain-400 text-white">
            <LinkIcon className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
              <CircleCheck className="h-4 w-4 text-blockchain-500" />
            </span>
          </div>
          <span className="font-display text-xl font-bold">ChainMatch.AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/explore" className="font-medium transition-colors hover:text-blockchain-500">
            Explore
          </Link>
          <Link to="/how-it-works" className="font-medium transition-colors hover:text-blockchain-500">
            How It Works
          </Link>
          <Link to="/dashboard" className="font-medium transition-colors hover:text-blockchain-500">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/post-project">
            <Button variant="default" className="bg-blockchain-500 hover:bg-blockchain-600">
              Post a Project
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
