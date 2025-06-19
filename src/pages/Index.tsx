import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from "@/components/HeroSection";
import QuizSection from '@/components/QuizSection';
import CategoriesSection from '@/components/CategoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <HeroSection />
        <QuizSection />
        <CategoriesSection />
        <TestimonialsSection />
      </div>
    </Layout>
  );
};

export default Index;
