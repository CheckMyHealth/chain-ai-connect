
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleCheck, Link as LinkIcon, User, LogOut, Wallet, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useWeb3 } from "@/contexts/Web3Context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const Header = () => {
  const { user, signOut } = useAuth();
  const { isConnected, address, disconnectWallet } = useWeb3();
  const [open, setOpen] = useState(false);
  
  const isLoggedIn = !!user || isConnected;

  const handleLogout = async () => {
    if (user) {
      await signOut();
    }
    if (isConnected) {
      await disconnectWallet();
    }
  };

  const truncateAddress = (address?: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const navLinks = [
    { to: "/explore", label: "Explore" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/roadmap", label: "Roadmap" },
    { to: "/dashboard", label: "Dashboard" },
  ];

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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="font-medium transition-colors hover:text-blockchain-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Link to="/post-project" className="hidden sm:block">
            <Button variant="default" className="bg-blockchain-500 hover:bg-blockchain-600">
              Post a Project
            </Button>
          </Link>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="h-4 w-4" />
                  {address && <span className="hidden sm:inline">{truncateAddress(address)}</span>}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user?.email || (address && truncateAddress(address))}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login" className="hidden sm:block">
              <Button variant="ghost">Login</Button>
            </Link>
          )}
          
          {/* Mobile menu button */}
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[80%] p-6">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-display font-bold">Menu</h2>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="sm">Close</Button>
                  </DrawerClose>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.to}
                      to={link.to} 
                      className="py-2 font-medium text-base border-b border-border/50 transition-colors hover:text-blockchain-500"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                {!isLoggedIn && (
                  <div className="flex flex-col space-y-4 pt-4">
                    <Link 
                      to="/login" 
                      className="w-full" 
                      onClick={() => setOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link 
                      to="/register" 
                      className="w-full"
                      onClick={() => setOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Register
                      </Button>
                    </Link>
                  </div>
                )}
                
                <div className="pt-4">
                  <Link 
                    to="/post-project" 
                    className="w-full" 
                    onClick={() => setOpen(false)}
                  >
                    <Button className="w-full bg-blockchain-500 hover:bg-blockchain-600">
                      Post a Project
                    </Button>
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
