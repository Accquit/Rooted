
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app this would come from an API
  const blogPosts = {
    'sacred-art-plant-meditation': {
      title: "The Sacred Art of Plant Meditation",
      content: `
        <p>In our fast-paced world, finding moments of tranquility has become more essential than ever. Plant meditation offers a unique pathway to mindfulness, connecting us with the living energy that surrounds us daily.</p>
        
        <h2>Getting Started with Plant Meditation</h2>
        <p>Begin by choosing a plant that resonates with you. It could be a small succulent on your windowsill or a large fiddle leaf fig in your living room. The key is to select a plant that draws your attention naturally.</p>
        
        <h3>The Basic Practice</h3>
        <ol>
          <li>Sit comfortably near your chosen plant</li>
          <li>Take three deep breaths to center yourself</li>
          <li>Observe the plant without judgment</li>
          <li>Notice its colors, textures, and patterns</li>
          <li>Imagine breathing in sync with the plant's natural rhythm</li>
        </ol>
        
        <h2>Deepening Your Connection</h2>
        <p>As you continue this practice, you may begin to notice subtle changes in your awareness. Many practitioners report feeling a sense of calm and groundedness that extends beyond their meditation sessions.</p>
        
        <p>Remember, this is not about achieving a particular state of mind, but rather about cultivating presence and appreciation for the natural world around us.</p>
      `,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=400&fit=crop&crop=center",
      author: "Luna Sage",
      date: "December 15, 2024",
      category: "Spiritual Practice",
      readTime: "5 min read"
    },
    'full-moon-plant-rituals': {
      title: "Full Moon Plant Rituals",
      content: `
        <p>The full moon has long been associated with heightened energy and spiritual awareness. When combined with the living energy of plants, this celestial event becomes a powerful time for ritual and intention-setting.</p>
        
        <h2>Understanding Lunar Energy</h2>
        <p>The full moon represents culmination, completion, and the peak of energy. Plants, being deeply connected to natural cycles, can help us harness this energy for personal growth and healing.</p>
        
        <h3>Simple Full Moon Plant Ritual</h3>
        <ol>
          <li>Place your favorite plants where they can receive moonlight</li>
          <li>Light a white or silver candle nearby</li>
          <li>Hold your hands over your plants and set your intentions</li>
          <li>Visualize the moon's energy flowing through you and into your plants</li>
          <li>End with gratitude for the natural cycles that support all life</li>
        </ol>
        
        <p>This practice helps align our personal energy with the natural rhythms of the earth and cosmos.</p>
      `,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=400&fit=crop&crop=center",
      author: "River Moon",
      date: "December 12, 2024",
      category: "Rituals",
      readTime: "7 min read"
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-mint/10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-primary mb-4">Post not found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-mint/10">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8">
              <Badge className="mb-4 bg-accent text-white">{post.category}</Badge>
              
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
