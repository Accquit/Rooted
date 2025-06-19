
import React from 'react';
import Layout from '@/components/Layout';
import { Heart, Leaf, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mindful Connection",
      description: "We believe every plant has a soul and every person has a plant waiting to transform their energy."
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description: "Our plants are ethically sourced and grown with love, respecting both earth and spirit."
    },
    {
      icon: Users,
      title: "Community Care",
      description: "We nurture a supportive community of plant parents sharing wisdom and growing together."
    },
    {
      icon: Award,
      title: "Sacred Quality",
      description: "Each plant is carefully selected and blessed before finding its way to your sacred space."
    }
  ];

  const team = [
    {
      name: "Kushaj Sethi",
      team: "Zeal",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=300&fit=crop&crop=center",
      bio: ""
    },
    {
      name: "Vanshika Sharma",
      team: "Zeal",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&h=300&fit=crop&crop=center",
      bio: ""
    },
    {
      name: "Yashavi Jaswsal",
      team: "Zeal",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop&crop=center",
      bio: ""
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-mint to-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-6xl text-primary mb-6">
              Growing More Than Plants
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Rooted began with a simple belief: that plants are more than decoration. 
              They're companions, teachers, and bridges to deeper spiritual connection. 
              We're here to help you find the perfect plant ally for your journey.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-6">
                  Our Sacred Beginning
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    At Rooted, we believe your space is sacred. Our mission is to blend spiritual energy with intentional design—through plants,
                     handcrafted pots, and rituals that bring grounding, calm, and flow to your life.
                  </p>
                  <p>
                    Whether you're nurturing a Snake Plant for its grounding aura or choosing a moon-charged ceramic pot for your altar,
                     every piece at Rooted is curated with meaning.
                  </p>
                  <p>
                    ✨ Rooted in intention <br />
                    🪴 Grown with care <br />
                    🧿 Designed to heal your space. <br />
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=500&fit=crop&crop=center"
                  alt="Plants in natural light"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-white animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-mint/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-6">
                What We Believe
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our values guide everything we do, from the plants we choose to the way we care for our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-primary mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-6">
                Meet Our Plant Family
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The passionate souls behind Rooted, dedicated to helping you grow where you're planted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-mint/30 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                  />
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.team}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
