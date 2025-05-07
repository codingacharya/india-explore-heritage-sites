
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="heritage-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-india-saffron" />
              <span className="font-playfair text-xl font-bold bg-gradient-to-r from-india-saffron to-india-terracotta bg-clip-text text-transparent">
                Heritage India
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Discover the rich cultural heritage and architectural marvels of India through our comprehensive guide to temples, palaces, and historical monuments.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-slate-500 hover:text-india-saffron">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-india-saffron">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-india-saffron">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-india-saffron">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/regions" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Explore Regions
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Heritage Categories
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Sites */}
          <div>
            <h3 className="text-lg font-medium mb-4">Popular Sites</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sites/taj-mahal" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Taj Mahal
                </Link>
              </li>
              <li>
                <Link to="/sites/golden-temple" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Golden Temple
                </Link>
              </li>
              <li>
                <Link to="/sites/khajuraho-temples" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Khajuraho Temples
                </Link>
              </li>
              <li>
                <Link to="/sites/mysore-palace" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Mysore Palace
                </Link>
              </li>
              <li>
                <Link to="/sites/hawa-mahal" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
                  Hawa Mahal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-india-saffron shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Heritage Tourism Dept, New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-india-saffron shrink-0" />
                <span className="text-muted-foreground text-sm">
                  info@heritageindia.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-india-saffron shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +91 1234567890
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Heritage India. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
              Terms of Use
            </Link>
            <Link to="/sitemap" className="text-muted-foreground text-sm hover:text-india-saffron transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
