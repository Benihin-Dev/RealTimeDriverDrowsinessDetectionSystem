'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "Real-Time Performance Optimization on Edge Devices",
      excerpt: "Detailed analysis of our optimization techniques for achieving 22 FPS on Raspberry Pi 4 with Coral TPU acceleration.",
      date: "2024-11-15",
      author: "S. Lakeeshan",
      category: "Development",
      readTime: "8 min read"
    },
    {
      title: "Field Testing Results: 18 Drivers, Real-World Conditions",
      excerpt: "Comprehensive results from our extensive field testing program covering urban, rural, day, and night driving scenarios.",
      date: "2024-11-10",
      author: "T.KG.A.I. Sampath",
      category: "Research",
      readTime: "12 min read"
    },
    {
      title: "Multimodal Sensor Fusion: RGB, NIR, and Thermal Integration",
      excerpt: "Technical deep-dive into our sensor fusion approach and how we combine data from multiple camera modalities.",
      date: "2024-11-05",
      author: "H.C. Charithma",
      category: "Technical",
      readTime: "10 min read"
    },
    {
      title: "Adaptive Alert System: Reducing Risky Driving by 37%",
      excerpt: "How our intelligent alert system adapts to driver behavior and significantly improves road safety outcomes.",
      date: "2024-10-28",
      author: "Research Team",
      category: "Results",
      readTime: "6 min read"
    },
    {
      title: "Dataset Creation and Annotation Process",
      excerpt: "Behind the scenes of creating the TR-Stress-Drive dataset with 42 hours of carefully labeled driving data.",
      date: "2024-10-20",
      author: "S. Lakeeshan",
      category: "Data Science",
      readTime: "9 min read"
    },
    {
      title: "STAF Model Architecture: Squeeze Temporal Attention Fusion",
      excerpt: "Technical overview of our novel deep learning architecture that combines CNNs and Bi-GRU for temporal analysis.",
      date: "2024-10-15",
      author: "T.KG.A.I. Sampath",
      category: "AI/ML",
      readTime: "11 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Development': 'bg-blue-100 text-blue-800',
      'Research': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Results': 'bg-orange-100 text-orange-800',
      'Data Science': 'bg-cyan-100 text-cyan-800',
      'AI/ML': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Blog & <span className="gradient-text">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Follow our research journey with weekly updates, development logs, and technical insights
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-blue-900 to-cyan-600 border-0 text-white overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-cyan-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-cyan-200 text-sm">Latest Update</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyan-300" />
                      <span className="text-cyan-200 text-sm">{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-cyan-300" />
                      <span className="text-cyan-200 text-sm">{blogPosts[0].author}</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="lg:w-1/3 bg-white/10 backdrop-blur-sm flex items-center justify-center p-8">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
                    <p className="text-cyan-200">{blogPosts[0].readTime}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-50 transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get notified about our latest research updates, field test results, and technical breakthroughs
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;