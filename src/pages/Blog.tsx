
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Leaf } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    slug: "sacred-art-plant-meditation",
    title: "The Sacred Art of Plant Meditation",
    excerpt: "Discover how to deepen your mindfulness practice by connecting with the living energy of your green companions.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop&crop=center",
    author: "Luna Sage",
    date: "December 15, 2024",
    category: "Spiritual Practice",
    readTime: "5 min read"
  };

  const posts = [
    {
      slug: "full-moon-plant-rituals",
      title: "Full Moon Plant Rituals",
      excerpt: "Harness lunar energy to enhance your plants' growth and your spiritual connection.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop&crop=center",
      author: "River Moon",
      date: "December 12, 2024",
      category: "Rituals",
      readTime: "7 min read"
    },
    {
      slug: "air-purifying-plants-energy-cleansing",
      title: "Air-Purifying Plants for Energy Cleansing",
      excerpt: "These sacred plants don't just clean your air—they purify your space's energy too.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop&crop=center",
      author: "Sage Green",
      date: "December 10, 2024",
      category: "Plant Care",
      readTime: "4 min read"
    },
    {
      slug: "creating-sacred-spaces-succulents",
      title: "Creating Sacred Spaces with Succulents",
      excerpt: "How these resilient beauties can anchor your meditation corner with grounding energy.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center",
      author: "Moss Stone",
      date: "December 8, 2024",
      category: "Home & Spirit",
      readTime: "6 min read"
    },
    {
      slug: "plant-communication-green-wisdom",
      title: "Plant Communication: Listening to Green Wisdom",
      excerpt: "Learn the subtle art of tuning into your plants' needs and messages.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop&crop=center",
      author: "Willow Branch",
      date: "December 5, 2024",
      category: "Spiritual Practice",
      readTime: "8 min read"
    }
  ];

  const categories = ["All", "Spiritual Practice", "Plant Care", "Rituals", "Home & Spirit", "Seasonal"];

  return (
    <Layout>
      <div className="min-h-screen bg-mint/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Leaf className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Whispering Leaves
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Stories, wisdom, and guidance from the plant kingdom. 
              Cultivate deeper connections with nature and yourself.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Link to={`/blog/${featuredPost.slug}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-accent text-white">{featuredPost.category}</Badge>
                    <h2 className="font-serif text-3xl font-semibold text-primary mb-4 hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-primary">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
