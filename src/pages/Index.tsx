
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from "@/components/HeroSection";
import QuizSection from '@/components/QuizSection';
import CategoriesSection from '@/components/CategoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuizSection />
      <CategoriesSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
