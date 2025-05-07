
import { HeritageSite } from '@/data/sites';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SiteCardProps {
  site: HeritageSite;
}

const SiteCard = ({ site }: SiteCardProps) => {
  return (
    <Link
      to={`/sites/${site.id}`}
      className="group overflow-hidden rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2 flex items-center gap-1">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted capitalize">
            {site.type}
          </span>
          <div className="flex items-center text-muted-foreground text-xs gap-1 ml-2">
            <MapPin className="h-3 w-3" />
            <span>{site.location}, {site.state}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-india-saffron transition-colors">
          {site.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {site.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between text-sm">
          <div>
            <span className="text-muted-foreground">Built:</span> {site.yearBuilt}
          </div>
          <span className="text-india-saffron font-medium group-hover:underline">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SiteCard;
