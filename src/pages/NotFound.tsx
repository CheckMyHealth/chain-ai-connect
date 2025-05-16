
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-3xl text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-blockchain-100"></div>
            </div>
            <h1 className="relative font-display text-9xl font-bold tracking-tighter text-blockchain-500">
              404
            </h1>
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-blockchain-500 hover:bg-blockchain-600">
                Return to Home
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="outline">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
