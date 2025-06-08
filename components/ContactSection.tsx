"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Users,
  FileText,
  Calendar,
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  });
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      type: "general",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ict20876@fot.sjp.ac.lk",
      description: "Primary contact for research inquiries",
      action: "mailto:ict20876@fot.sjp.ac.lk",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+94 77 668 3240",
      description: "Direct line for urgent matters",
      action: "tel:+94776683240",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Faculty of Technology",
      description: "University of Sri Jayewardenepura, Sri Lanka",
      action: "",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "collaboration", label: "Research Collaboration", icon: Users },
    { value: "technical", label: "Technical Questions", icon: FileText },
    { value: "media", label: "Media & Press", icon: Calendar },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-slate-900 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
            <MessageSquare className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-300 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Contact <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Have questions about our research? Interested in collaboration? We'd
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-200 mb-8">
                  Reach out to our research team for inquiries about our driver
                  drowsiness detection project.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div
                      className={`flex items-start space-x-4 ${
                        info.action ? "cursor-pointer" : ""
                      }`}
                      onClick={() => info.action && window.open(info.action)}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-cyan-300 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-blue-200 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Response Time */}
              <Card className="bg-cyan-500/20 border-cyan-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-cyan-300" />
                    <h4 className="text-lg font-semibold text-white">
                      Response Time
                    </h4>
                  </div>
                  <p className="text-cyan-200">
                    We typically respond to inquiries within 24-48 hours during
                    business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="glass border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Send us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-blue-200 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-white placeholder-blue-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-200 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-white placeholder-blue-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-blue-200 mb-2"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-white"
                    >
                      {inquiryTypes.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="bg-slate-800 text-white"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-blue-200 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-white placeholder-blue-300"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-blue-200 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-blue-300"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Collaboration CTA */}
        <div
          className={`mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6">
                  Research Collaboration
                </h3>
                <p className="text-purple-100 mb-8 max-w-3xl mx-auto text-lg">
                  We're open to collaborating with researchers, institutions,
                  and industry partners who share our vision of making roads
                  safer through innovative AI technology. Let's work together to
                  advance driver monitoring systems.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button
                    size="lg"
                    className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open(
                        "mailto:ict20876@fot.sjp.ac.lk?subject=Research Collaboration Inquiry"
                      )
                    }
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Collaboration Inquiry
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-black hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
