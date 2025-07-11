import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import ProductModal from '@/components/ProductModal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List, Heart, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/components/cart/CartContext';

// Add INR formatter
const formatINR = (amount: number) => {
  return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
};

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    light: '',
    energy: '',
    type: '',
    category: 'all'
  });
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      price: 150,
      image: "https://i.postimg.cc/fRdhPzmC/snakeplant.webp",
      light: "Low",
      energy: "Grounding",
      type: "Air Purifier",
      category: "plants",
      description: "Perfect for beginners and night owls",
      difficulty: "Easy",
      care: "Water every 2-3 weeks. Thrives in low light conditions. Very forgiving plant.",
      benefits: ["Purifies air while you sleep", "Promotes grounding energy", "Enhances focus and stability"]
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      scientificName: "Monstera deliciosa",
      price: 150,
      image: "https://i.postimg.cc/N0wwq3xc/monstera.webp",
      light: "Bright Indirect",
      energy: "Growth",
      type: "Statement",
      category: "plants",
      description: "A living sculpture for your space",
      difficulty: "Medium",
      care: "Water when top inch of soil is dry. Loves humidity and bright, indirect light.",
      benefits: ["Encourages personal growth", "Symbolizes abundance", "Creates positive energy flow"]
    },
    {
      id: 3,
      name: "Peace Lily",
      scientificName: "Spathiphyllum",
      price: 150,
      image: "https://i.postimg.cc/HL41p6S7/peaceliy.jpg",
      light: "Low to Medium",
      energy: "Calming",
      type: "Flowering",
      category: "plants",
      description: "Brings serenity and purifies air",
      difficulty: "Easy",
      care: "Keep soil moist but not soggy. Enjoys low to medium light.",
      benefits: ["Promotes peace and tranquility", "Purifies air naturally", "Supports meditation practices"]
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      scientificName: "Ficus lyrata",
      price: 150,
      image: "https://i.postimg.cc/GmGZQMnS/fiddle.webp",
      light: "Bright Indirect",
      energy: "Uplifting",
      type: "Statement",
      category: "plants",
      description: "A dramatic focal point",
      difficulty: "Hard",
      care: "Needs bright, indirect light and consistent watering. Sensitive to changes.",
      benefits: ["Elevates mood and energy", "Creates a sense of grandeur", "Inspires creativity"]
    },
    {
      id: 5,
      name: "Lavender",
      scientificName: "Lavandula",
      price: 150,
      image: "https://i.postimg.cc/GpR6Skc3/leavender.jpg",
      light: "Direct Sun",
      energy: "Calming",
      type: "Flowering",
      category: "plants",
      description: "Aromatherapy in plant form",
      difficulty: "Medium",
      care: "Needs full sun and well-draining soil. Water when soil is dry.",
      benefits: ["Natural stress relief", "Promotes better sleep", "Enhances meditation"]
    },
    {
      id: 6,
      name: "Jade Plant",
      scientificName: "Crassula ovata",
      price: 150,
      image: "https://i.postimg.cc/mrSKxtDY/jade.jpg",
      light: "Bright Indirect",
      energy: "Growth",
      type: "Succulent",
      category: "plants",
      description: "Symbol of prosperity and friendship",
      difficulty: "Easy",
      care: "Water sparingly. Needs bright light but not direct sun.",
      benefits: ["Attracts abundance", "Symbolizes friendship", "Promotes financial growth"]
    },
    {
      id: 7,
      name: "Ceramic Moon Pot",
      scientificName: "",
      price: 300,
      image: "https://i.postimg.cc/FRWqR801/ceramic.jpg",
      light: "",
      energy: "Mystical",
      type: "Ceramic",
      category: "pots",
      description: "Hand-glazed celestial pot with lunar phases",
      difficulty: "",
      care: "Hand wash only. Drainage hole included.",
      benefits: ["Enhances lunar energy rituals", "Beautiful decorative piece", "Perfect for small plants"]
    },
    {
      id: 8,
      name: "Terracotta Earth Vessel",
      scientificName: "",
      price: 200,
      image: "https://i.postimg.cc/4yY0hP1P/tera.webp",
      light: "",
      energy: "Grounding",
      type: "Terracotta",
      category: "pots",
      description: "Natural clay pot for earth energy",
      difficulty: "",
      care: "Naturally breathable. Water may seep slightly.",
      benefits: ["Connects with earth element", "Promotes root health", "Traditional and timeless"]
    },
    {
      id: 9,
      name: "Sacred Geometry Planter",
      scientificName: "",
      price: 400,
      image: "https://i.postimg.cc/BZzkGWqV/sacred.jpg",
      light: "",
      energy: "Harmonizing",
      type: "Modern",
      category: "pots",
      description: "Geometric design for energy alignment",
      difficulty: "",
      care: "Wipe clean with damp cloth. Self-watering system included.",
      benefits: ["Enhances feng shui", "Modern spiritual aesthetic", "Promotes balance"]
    },
    {
      id: 10,
      name: "Hanging Macrame Holder",
      scientificName: "",
      price: 400,
      image: "https://i.postimg.cc/L8KWnzgk/hanging.jpg",
      light: "",
      energy: "Flowing",
      type: "Hanging",
      category: "pots",
      description: "Handwoven macrame with ceramic pot",
      difficulty: "",
      care: "Machine washable cord. Ceramic pot included.",
      benefits: ["Saves space", "Creates vertical gardens", "Bohemian spiritual vibe"]
    },
    {
      id: 11,
      name: "Fern",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/kgCdkrsd/fern.jpg",
      light: "",
      energy: "Calming",
      type: "Hanging",
      category: "plants",
      description: "Clears negativity, brings peace.",
      difficulty: "",
      care: "Indirect light, Keep soil moist.",
      benefits: ["Absorbs negative energies", "Symbol of new beginnings", "Enhances tranquility in space"]
    },
    {
      id: 12,
      name: "Calathea",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/Ls6F8zGC/calathea.jpg",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Bright, indirect light. Keep soil lightly moist.",
      benefits: ["Brings calm and focus", "Known as a prayer plant (folds at night)", "Promotes balance and inner peace"]
    },
    {
      id: 13,
      name: "Maranta",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/cHpzwY5N/Maranta.webp",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Medium indirect light. Keep soil damp.",
      benefits: ["Mimics spiritual cycles (opens/closes leaves)", "Promotes mindfulness", "Calms anxious energy"]
    },
    {
      id: 14,
      name: "Fittonia",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/qvDj2yzZ/fittonia.jpg",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Low to medium light. Water when topsoil is dry.",
      benefits: ["Uplifts mental clarity", "Promotes emotional expression", "Energizes indoor spaces"]
    },
    {
      id: 15,
      name: "Aloe Vera",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/Vv4jmPtH/aloevera.jpg",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Bright, direct light. Let soil dry out between watering.",
      benefits: ["Removes bad energy", "Healing aura enhancer", "Protection charm in homes"]
    },
    {
      id: 16,
      name: "ZZ Plant",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/yYYmnW4q/zz.jpg",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Low to bright light. Water only when soil is dry.",
      benefits: ["Attracts prosperity", "Absorbs stagnant energies", "Enhances grounding energy"]
    },
    {
      id: 17,
      name: "Money Plant",
      scientificName: "Pothos",
      price: 150,
      image: "https://i.postimg.cc/65jdPwt8/money.jpg",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Low to medium light. Water when dry.",
      benefits: ["Attracts wealth and positivity", "Clears stagnant energy", "Boosts personal development"]
    },
    {
      id: 18,
      name: "Spider Plant",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/y820VPJB/spider.jpg",
      light: "Bright Indirect",
      energy: "Reflective",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Bright, indirect light. Let soil dry between watering.",
      benefits: ["Cleanses indoor energy", "Brings renewal and hope", "Protects from negative auras"]
    },
    {
      id: 19,
      name: "Philodendron",
      scientificName: "",
      price: 150,
      image: "https://i.postimg.cc/d1YdCVmx/Philodendron.jpg",
      light: "Bright Indirect",
      energy: "Nurturing",
      type: "Succulent",
      category: "plants",
      description: "Aligns emotions, adds harmony.",
      difficulty: "Easy",
      care: "Bright, indirect light. Allow top inch of soil to dry.",
      benefits: ["Enhances heart chakra energy", "Promotes emotional healing", "Brings in grounding energy"]
    }
  ];

  const filters = {
    light: ['Low', 'Medium', 'Low to Medium', 'Bright Indirect', 'Direct Sun'],
    energy: ['Calming', 'Grounding', 'Energizing', 'Growth', 'Uplifting', 'Mystical', 'Harmonizing', 'Flowing'],
    type: ['Air Purifier', 'Statement', 'Flowering', 'Succulent', 'Hanging', 'Ceramic', 'Terracotta', 'Modern']
  };

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'plants', label: 'Sacred Plants' },
    { key: 'pots', label: 'Spiritual Pots' }
  ];

  const filteredPlants = useMemo(() => {
    return plants.filter(plant => {
      if (selectedFilters.category !== 'all' && plant.category !== selectedFilters.category) return false;
      if (selectedFilters.light && plant.light !== selectedFilters.light) return false;
      if (selectedFilters.energy && plant.energy !== selectedFilters.energy) return false;
      if (selectedFilters.type && plant.type !== selectedFilters.type) return false;
      return true;
    });
  }, [selectedFilters]);

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? '' : value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({ light: '', energy: '', type: '', category: 'all' });
  };

  const openProductModal = (plant: any) => {
    setSelectedPlant(plant);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-mint/20 dark:bg-[#23182c]">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 dark:bg-none dark:bg-[#23182c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Sacred Plant Collection
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Discover plants and spiritual pots that resonate with your energy and transform your space into a sanctuary
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 bg-white p-6 rounded-xl shadow-lg h-fit">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-lg font-semibold text-primary">Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.key} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.key}
                        checked={selectedFilters.category === category.key}
                        onChange={() => setSelectedFilters(prev => ({ ...prev, category: category.key }))}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Only show plant-specific filters when plants are selected */}
              {selectedFilters.category !== 'pots' && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Light Needs</h4>
                  <div className="space-y-2">
                    {filters.light.map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="light"
                          value={option}
                          checked={selectedFilters.light === option}
                          onChange={() => handleFilterChange('light', option)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Energy</h4>
                <div className="space-y-2">
                  {filters.energy.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="energy"
                        value={option}
                        checked={selectedFilters.energy === option}
                        onChange={() => handleFilterChange('energy', option)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Type</h4>
                <div className="space-y-2">
                  {filters.type.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={option}
                        checked={selectedFilters.type === option}
                        onChange={() => handleFilterChange('type', option)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">Showing {filteredPlants.length} items</p>
                <div className="flex items-center space-x-4">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredPlants.map((plant) => (
                  <div 
                    key={plant.id} 
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => openProductModal(plant)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toast({
                            title: "Added to Wishlist!",
                            description: `${plant.name} has been saved to your wishlist.`,
                          });
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {plant.light && <Badge variant="secondary" className="text-xs">{plant.light} Light</Badge>}
                        <Badge variant="outline" className="text-xs">{plant.energy}</Badge>
                        <Badge className="text-xs bg-accent text-white">{plant.type}</Badge>
                      </div>
                      
                      <h3 className="font-serif text-xl font-semibold text-primary mb-1">{plant.name}</h3>
                      {plant.scientificName && <p className="text-sm text-gray-500 italic mb-2">{plant.scientificName}</p>}
                      <p className="text-gray-600 text-sm mb-4">{plant.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{formatINR(plant.price)}</span>
                        <Button 
                          className="bg-primary hover:bg-primary/90"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart({
                              id: plant.id,
                              name: plant.name,
                              price: plant.price,
                              image: plant.image
                            });
                          }}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPlants.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No items match your current filters.</p>
                  <Button onClick={clearFilters} className="mt-4">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        plant={selectedPlant}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={(plant, customization) => addToCart({
          id: plant.id,
          name: plant.name,
          price: customization ? plant.price + (customization.priceAdjustment || 0) : plant.price,
          image: plant.image
        }, customization)}
      />
    </Layout>
  );
};

export default Shop;
