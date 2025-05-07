
import { featuredSites } from '@/data/sites';
import SiteCard from '@/components/ui/SiteCard';
import { Button } from '@/components/ui/button';

const FeaturedSites = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="heritage-container">
        <h2 className="section-title">
          Iconic Heritage Sites
        </h2>
        <p className="section-subtitle">
          Discover India's most magnificent historical treasures, from ancient temples to magnificent palaces
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-india-saffron hover:bg-india-terracotta">
            View All Heritage Sites
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSites;
