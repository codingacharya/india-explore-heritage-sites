
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedSites from '@/components/home/FeaturedSites';
import Categories from '@/components/home/Categories';
import ExploreRegions from '@/components/home/ExploreRegions';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedSites />
        <Categories />
        <ExploreRegions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
