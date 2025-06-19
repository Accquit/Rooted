import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      name: "Air Purifiers",
      description: "Cleanse your space & spirit",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop&crop=center",
      count: "12 plants"
    },
    {
      name: "Meditation Companions",
      description: "Enhance your mindful moments",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop&crop=center",
      count: "8 plants"
    },
    {
      name: "Energy Boosters",
      description: "Vibrant life force for your home",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop&crop=center",
      count: "15 plants"
    },
    {
      name: "Low Light Lovers",
      description: "Perfect for cozy, intimate spaces",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center",
      count: "10 plants"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Leaf className="h-12 w-12 text-primary dark:text-[#F8F8F2] mx-auto mb-6 animate-float" />
          <h2 className="font-serif text-4xl lg:text-5xl text-primary dark:text-white mb-6">
            Discover by Energy
          </h2>
          <p className="text-lg text-gray-700 dark:text-[#F8F8F2] max-w-2xl mx-auto">
            Each plant carries its own unique energy. Browse our curated collections 
            based on the vibes you want to cultivate in your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer animate-fade-in">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.description}</p>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
