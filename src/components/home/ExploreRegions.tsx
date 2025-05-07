
import { regions } from '@/data/sites';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreRegions = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="heritage-container">
        <h2 className="section-title">
          Explore India by Region
        </h2>
        <p className="section-subtitle">
          Discover the unique heritage and culture of each distinct region of India
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {regions.slice(0, 4).map((region) => (
            <Link
              key={region.id}
              to={`/regions/${region.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-india-saffron" />
                  <span className="text-white/80 text-sm">{region.name}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-playfair text-white font-bold mb-2">
                  {region.name}
                </h3>
                <Button variant="ghost" className="text-white px-0 hover:bg-transparent hover:text-india-saffron">
                  Explore <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-2">→</span>
                </Button>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-india-saffron text-india-saffron hover:bg-india-saffron/10">
            View All Regions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreRegions;
