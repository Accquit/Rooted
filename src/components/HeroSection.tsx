import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const PlantOfTheDayModal = ({ open, onClose, parentRef }: { open: boolean; onClose: () => void; parentRef: React.RefObject<HTMLDivElement> }) => {
  if (!open || !parentRef.current) return null;
  // Get parent position for absolute centering
  const rect = parentRef.current.getBoundingClientRect();
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: rect.width,
        height: rect.height,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.45)',
      }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 max-w-md w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-primary"
          aria-label="Close"
        >
          &times;
        </button>
        <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop&crop=center" alt="Plant of the Day" className="w-40 h-40 object-contain mx-auto mb-4" />
        <h3 className="text-2xl font-serif text-primary dark:text-white mb-2 text-center">Plant of the Day</h3>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-2">Peace Lily</p>
        <p className="text-center text-gray-600 dark:text-gray-400">A symbol of peace and harmony, the Peace Lily purifies air and brings calm to your space. Water when soil is dry and keep in indirect light.</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = React.useRef<HTMLDivElement>(null);
  return (
    <section ref={heroRef} className="min-h-screen relative bg-mint dark:bg-[--background] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/80 via-mint/60 to-primary/20 dark:from-[--background] dark:via-[--background] dark:to-[--background]" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
            <span className="text-primary dark:text-white">Grow Where You're</span>
            <br />
            <span className="text-accent dark:text-[#7C5C37] animate-float inline-block">Rooted</span>
          </h1>
          
          {/* Subheading */}
          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Find the perfect plant for your soul and space — explore spiritual greens, custom pots, and natural vibes tailored to you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-4">
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Growing 🌱
              </Button>
            </Link>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="p-2 rounded-full bg-[#F8F8F2] dark:bg-[#23211A] shadow hover:scale-110 transition-transform border-2 border-primary flex items-center justify-center"
                title="Show Plant of the Day"
              >
                <Leaf className="h-10 w-10 text-primary dark:text-[#A3C293]" />
              </button>
            </div>
          </div>
          
          <PlantOfTheDayModal open={modalOpen} onClose={() => setModalOpen(false)} parentRef={heroRef} />
          
          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-60">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-white dark:fill-[--background]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="dark:fill-[--background]" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="dark:fill-[--background]" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="dark:fill-[--background]" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
