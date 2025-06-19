
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface PotCustomizerProps {
  basePot: any;
  onCustomizationChange: (customization: PotCustomization) => void;
}

export interface PotCustomization {
  color: string;
  material: string;
  priceAdjustment: number;
}

const PotCustomizer = ({ basePot, onCustomizationChange }: PotCustomizerProps) => {
  const [selectedColor, setSelectedColor] = useState('Natural');
  const [selectedMaterial, setSelectedMaterial] = useState(basePot.type || 'Ceramic');

  const colors = [
    { name: 'Natural', hex: '#D2B48C', price: 0 },
    { name: 'White', hex: '#FFFFFF', price: 2 },
    { name: 'Black', hex: '#2C2C2C', price: 3 },
    { name: 'Sage Green', hex: '#9CAF88', price: 5 },
    { name: 'Terracotta', hex: '#E2725B', price: 4 },
    { name: 'Blue', hex: '#4A90B8', price: 6 },
    { name: 'Gold', hex: '#FFD700', price: 12 }
  ];

  const materials = [
    { name: 'Ceramic', multiplier: 1, description: 'Classic glazed ceramic' },
    { name: 'Terracotta', multiplier: 0.8, description: 'Natural clay, breathable' },
    { name: 'Stoneware', multiplier: 1.3, description: 'Durable and weather-resistant' },
    { name: 'Bamboo Fiber', multiplier: 1.1, description: 'Eco-friendly composite' },
    { name: 'Concrete', multiplier: 1.2, description: 'Modern industrial look' }
  ];

  useEffect(() => {
    const colorPrice = colors.find(c => c.name === selectedColor)?.price || 0;
    const materialMultiplier = materials.find(m => m.name === selectedMaterial)?.multiplier || 1;
    const priceAdjustment = (basePot.price * materialMultiplier + colorPrice) - basePot.price;

    onCustomizationChange({
      color: selectedColor,
      material: selectedMaterial,
      priceAdjustment: Math.round(priceAdjustment)
    });
  }, [selectedColor, selectedMaterial, basePot.price]);

  const getPreviewImage = () => {
    // Generate a preview based on selections
    const colorHex = colors.find(c => c.name === selectedColor)?.hex || '#D2B48C';
    return `https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center&sat=${selectedColor === 'Natural' ? 0 : 20}&hue=${selectedColor === 'Blue' ? 200 : selectedColor === 'Sage Green' ? 120 : 0}`;
  };

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <div className="text-center">
        <h4 className="font-semibold text-primary mb-3">Live Preview</h4>
        <div className="relative inline-block">
          <img
            src={getPreviewImage()}
            alt="Customized pot preview"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transition-all duration-300"
            style={{
              filter: `sepia(30%) hue-rotate(${selectedColor === 'Blue' ? '200deg' : selectedColor === 'Sage Green' ? '120deg' : '0deg'})`
            }}
          />
          <Badge className="absolute bottom-2 right-2 bg-white text-primary">
            {selectedMaterial}
          </Badge>
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h4 className="font-semibold text-primary mb-3">Choose Color</h4>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
          <div className="grid grid-cols-2 gap-3">
            {colors.map((color) => (
              <div key={color.name} className="flex items-center space-x-3">
                <RadioGroupItem value={color.name} id={`color-${color.name}`} />
                <Label htmlFor={`color-${color.name}`} className="flex items-center space-x-2 cursor-pointer">
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm">{color.name}</span>
                  {color.price > 0 && (
                    <Badge variant="outline" className="text-xs">+₹{color.price}</Badge>
                  )}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Material Selection */}
      <div>
        <h4 className="font-semibold text-primary mb-3">Choose Material</h4>
        <RadioGroup value={selectedMaterial} onValueChange={setSelectedMaterial}>
          <div className="space-y-3">
            {materials.map((material) => (
              <div key={material.name} className="flex items-start space-x-3">
                <RadioGroupItem value={material.name} id={`material-${material.name}`} className="mt-1" />
                <Label htmlFor={`material-${material.name}`} className="cursor-pointer flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{material.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {material.multiplier > 1 ? '+' : material.multiplier < 1 ? '-' : ''}
                      {Math.round(Math.abs(basePot.price * material.multiplier - basePot.price))}
                      {material.multiplier !== 1 && '₹'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default PotCustomizer;
