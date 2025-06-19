
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Los Angeles, CA",
      text: "The quiz matched me with a snake plant that has completely transformed my bedroom's energy. I sleep so much better now!",
      rating: 5,
      plant: "Snake Plant"
    },
    {
      name: "Michael T.",
      location: "Portland, OR", 
      text: "Rooted didn't just sell me a plant - they helped me find a living meditation partner. My monstera and I start each day together.",
      rating: 5,
      plant: "Monstera Deliciosa"
    },
    {
      name: "Luna R.",
      location: "Austin, TX",
      text: "The care guides feel like spiritual practice. My plants are thriving and so is my connection to nature.",
      rating: 5,
      plant: "Peace Lily"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-mint/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">
            Growing Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real experiences from our plant family. See how Rooted has helped others 
            cultivate deeper connections with nature and themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-medium text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-accent mt-1">Plant Parent to: {testimonial.plant}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
