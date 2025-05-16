
import { Link } from "react-router-dom";
import { CircleCheck, Link as LinkIcon, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blockchain-400 text-white">
                <LinkIcon className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <CircleCheck className="h-4 w-4 text-blockchain-500" />
                </span>
              </div>
              <span className="font-display text-xl font-bold">ChainMatch</span>
            </Link>
            <p className="text-muted-foreground">
              The AI-powered platform for blockchain project partnerships. Connect with potential partners and grow your ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Platform</h3>
              <Link to="/explore" className="text-sm hover:text-blockchain-500 transition-colors">Explore Partnerships</Link>
              <Link to="/post-project" className="text-sm hover:text-blockchain-500 transition-colors">Post a Project</Link>
              <Link to="/dashboard" className="text-sm hover:text-blockchain-500 transition-colors">Dashboard</Link>
              <Link to="/how-it-works" className="text-sm hover:text-blockchain-500 transition-colors">How It Works</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Company</h3>
              <Link to="/about" className="text-sm hover:text-blockchain-500 transition-colors">About Us</Link>
              <Link to="/careers" className="text-sm hover:text-blockchain-500 transition-colors">Careers</Link>
              <Link to="/blog" className="text-sm hover:text-blockchain-500 transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm hover:text-blockchain-500 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Legal</h3>
              <Link to="/terms" className="text-sm hover:text-blockchain-500 transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-sm hover:text-blockchain-500 transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="text-sm hover:text-blockchain-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChainMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
