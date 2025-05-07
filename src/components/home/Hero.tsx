
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-india-blue/10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-10"></div>
      
      <div className="heritage-container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-india-saffron to-india-terracotta bg-clip-text text-transparent animate-fade-in">
              Discover India's <br/> Rich Cultural Heritage
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up">
              Explore magnificent temples, opulent palaces, and breathtaking monuments
              that tell the story of India's vibrant history and cultural diversity.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-md mx-auto lg:mx-0 mb-8 animate-fade-up" style={{animationDelay: '100ms'}}>
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search for temples, palaces, or monuments..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-input rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-india-saffron"
              />
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{animationDelay: '200ms'}}>
              <Button className="bg-india-saffron hover:bg-india-terracotta text-white px-8 py-6">
                Explore Heritage Sites
              </Button>
              <Button variant="outline" className="border-india-saffron text-india-saffron hover:bg-india-saffron/10 px-8 py-6">
                View on Map
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="flex-1 relative animate-fade-in">
            <div className="aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=1470&auto=format&fit=crop"
                alt="Taj Mahal at sunset"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg border border-white/10 shadow-inner"></div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-india-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-india-green/20 rounded-full blur-3xl"></div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 flex items-center gap-2 border border-india-gold/20">
                <span className="text-india-gold font-bold text-xl">20+</span>
                <span className="text-sm font-medium">UNESCO<br/>World Heritage Sites</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
