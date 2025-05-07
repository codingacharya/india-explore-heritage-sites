
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="heritage-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-india-saffron" />
          <span className="font-playfair text-xl font-bold bg-gradient-to-r from-india-saffron to-india-terracotta bg-clip-text text-transparent">
            Heritage India
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-india-saffron transition-colors">
            Home
          </Link>
          <Link to="/regions" className="text-sm font-medium hover:text-india-saffron transition-colors">
            Regions
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-india-saffron transition-colors">
            Categories
          </Link>
          <Link to="/map" className="text-sm font-medium hover:text-india-saffron transition-colors">
            Map
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-india-saffron transition-colors">
            About
          </Link>
        </div>

        {/* Search and Menu buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button className="hidden md:flex bg-india-saffron hover:bg-india-terracotta">
            Explore Now
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-md border-b shadow-lg animate-fade-in">
          <div className="heritage-container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/regions" 
              className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Regions
            </Link>
            <Link 
              to="/categories" 
              className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/map" 
              className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Map
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search heritage sites..."
                className="w-full pl-9 pr-4 py-2 bg-muted rounded-md focus:outline-none focus:ring-1 focus:ring-india-saffron"
              />
            </div>
            <Button className="w-full bg-india-saffron hover:bg-india-terracotta mt-2">
              Explore Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
