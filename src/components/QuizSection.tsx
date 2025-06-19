import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Sun, Moon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const QuizSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuizStart = () => {
    toast({
      title: "Quiz Coming Soon! ✨",
      description: "Our sacred plant matching quiz is being prepared. You'll be notified when it's ready!",
    });
  };

  const quizCards = [
    {
      icon: Sun,
      title: "Light Preferences",
      description: "Bright & cheerful or soft & subtle?"
    },
    {
      icon: Heart,
      title: "Energy Goals",
      description: "Calming vibes or energizing presence?"
    },
    {
      icon: Moon,
      title: "Spiritual Practice",
      description: "Meditation, manifestation, or mindfulness?"
    }
  ];

  return (
    <section id="quiz-section" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="h-12 w-12 text-accent dark:text-[#F8F8F2] mx-auto mb-6 animate-float" />
        <h2 className="font-serif text-4xl lg:text-5xl text-primary dark:text-white mb-6">
          Find Your Soul Plant
        </h2>
        <p className="text-lg text-gray-700 dark:text-[#F8F8F2] mb-12 max-w-2xl mx-auto">
          Answer a few questions about your energy, space, and intentions. 
          We'll match you with plants that align with your spiritual journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {quizCards.map((card, index) => (
            <div key={index} className="bg-[#F8F8F2] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <card.icon className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl text-primary mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          onClick={() => navigate('/quiz')}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Take the Quiz ✨
        </Button>
      </div>
    </section>
  );
};

export default QuizSection;
