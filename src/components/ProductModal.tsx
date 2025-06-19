import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Heart } from 'lucide-react';
import PotCustomizer, { PotCustomization } from './PotCustomizer';

interface Plant {
  id: number;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  light: string;
  energy: string;
  type: string;
  category: string;
  description: string;
  care?: string;
  benefits?: string[];
  difficulty?: string;
}

interface ProductModalProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (plant: Plant, customization?: PotCustomization) => void;
}

// Format number to INR with ₹ and commas
const formatINR = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

const ProductModal = ({ plant, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [potCustomization, setPotCustomization] = useState<PotCustomization | null>(null);

  if (!plant) return null;

  const isPot = plant.category === 'pots';
  const finalPrice = isPot && potCustomization
    ? plant.price + potCustomization.priceAdjustment
    : plant.price;

  const handleAddToCart = () => {
    onAddToCart(plant, isPot ? potCustomization || undefined : undefined);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">{plant.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {!isPot ? (
              <>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex flex-wrap gap-2">
                  {plant.light && <Badge variant="secondary">{plant.light} Light</Badge>}
                  <Badge variant="outline">{plant.energy}</Badge>
                  <Badge className="bg-accent text-white">{plant.type}</Badge>
                  <Badge variant="secondary">{plant.difficulty || 'Easy'}</Badge>
                </div>
              </>
            ) : (
              <PotCustomizer
                basePot={plant}
                onCustomizationChange={setPotCustomization}
              />
            )}
          </div>

          <div className="space-y-4">
            {plant.scientificName && (
              <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>
            )}
            <p className="text-gray-700">{plant.description}</p>

            {isPot && potCustomization && (
              <div className="bg-mint/20 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Your Customization</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline">{potCustomization.color}</Badge>
                  <Badge variant="outline">{potCustomization.material}</Badge>
                </div>
                {potCustomization.priceAdjustment !== 0 && (
                  <p className="text-sm text-gray-600">
                    Price adjustment: {potCustomization.priceAdjustment > 0 ? '+' : ''}
                    {formatINR(potCustomization.priceAdjustment)}
                  </p>
                )}
              </div>
            )}

            {plant.benefits && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Spiritual Benefits</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {plant.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-primary mb-2">Care Instructions</h4>
              <p className="text-sm text-gray-600">
                {plant.care ||
                  `Place in ${plant.light?.toLowerCase() || 'appropriate'} light. Water when soil feels dry. Perfect for ${plant.energy?.toLowerCase() || 'spiritual'} energy work.`}
              </p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-primary">
                    {formatINR(finalPrice)}
                  </span>
                  {isPot && potCustomization && potCustomization.priceAdjustment !== 0 && (
                    <p className="text-sm text-gray-500">
                      Base price: {formatINR(plant.price)}
                    </p>
                  )}
                </div>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Sacred Collection
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
