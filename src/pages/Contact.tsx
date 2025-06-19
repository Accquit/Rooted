import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Leaf } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Sacred Space",
      details: ["Manipal University Jaipur", "Jaipur , 303007"]
    },
    {
      icon: Phone,
      title: "Plant Hotline",
      details: ["+91 1234567890", "Mon-Fri: 9AM-6PM PST"]
    },
    {
      icon: Mail,
      title: "Digital Whispers",
      details: ["hello@rooted.com", "plantcare@rooted.com"]
    },
    {
      icon: Clock,
      title: "Energy Hours",
      details: ["Monday-Friday: 9AM-6PM", "Saturday: 10AM-4PM", "Sunday: Closed for restoration"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary to-accent text-white dark:from-gray-900 dark:to-gray-800 dark:text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Leaf className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Let's Grow Together
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Have questions about your plant journey? Need spiritual plant guidance? 
              We're here to help you flourish.
            </p>
          </div>
        </div>

        <div className="py-20 bg-mint/10 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="font-serif text-2xl text-primary mb-6">
                  Send Us Your Plant Questions
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="What's growing on your mind?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your plant journey, questions, or how we can help you grow..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    size="lg"
                  >
                    Send Your Message 🌱
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h2 className="font-serif text-2xl text-primary dark:text-white mb-6">
                    Connect With Our Plant Family
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    Whether you're a seasoned plant parent or just beginning your green journey, 
                    we're here to support your growth. Reach out with any questions about plant care, 
                    spiritual practices, or finding your perfect plant match.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-mint dark:bg-gray-700 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary dark:text-accent" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-primary dark:text-white mb-1">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-700 dark:text-gray-300">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-gradient-to-br from-mint/30 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg">
                  <h3 className="font-serif text-xl text-primary dark:text-white mb-4">
                    Quick Plant Wisdom
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        How do I know which plant is right for me?
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Take our spiritual plant quiz! It matches plants based on your energy, space, and intentions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Do you offer plant care guidance?
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Absolutely! Each plant comes with personalized care instructions and ongoing support.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        What makes Rooted different?
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        We focus on the spiritual connection between you and your plants, not just aesthetics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
