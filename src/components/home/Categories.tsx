
import { categories } from '@/data/sites';
import { Landmark, Building, Castle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'temple':
        return <Building className="h-8 w-8" />; // Changed from Temple to Building
      case 'landmark':
      default:
        return <Landmark className="h-8 w-8" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="heritage-container">
        <h2 className="section-title">
          Explore By Category
        </h2>
        <p className="section-subtitle">
          Discover diverse architectural marvels across different categories
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-india-saffron/10 flex items-center justify-center text-india-saffron group-hover:bg-india-saffron group-hover:text-white transition-colors mb-4">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-lg font-medium mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} sites</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
