'use client';

import { Mail, Phone, MapPin, ExternalLink, Github, FileText, Database, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Research Overview', href: '#research' },
    { label: 'Technology Stack', href: '#technology' },
    { label: 'Results & Impact', href: '#results' },
    { label: 'Research Team', href: '#team' }
  ];

  const researchLinks = [
    { label: 'Published Papers', href: '#', icon: FileText },
    { label: 'Technical Documentation', href: '#', icon: ExternalLink },
    { label: 'Dataset Access', href: '#', icon: Database },
    { label: 'Source Code', href: '#', icon: Github }
  ];

  const achievements = [
    { metric: "93.2%", label: "Drowsiness Accuracy" },
    { metric: "89.7%", label: "Stress Detection" },
    { metric: "37%", label: "Risk Reduction" },
    { metric: "22 FPS", label: "Real-time Processing" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">DG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DrowsyGuard AI</h3>
                <p className="text-blue-300 text-sm">Research Project</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Revolutionary real-time driver drowsiness detection using non-intrusive multispectral vision and 
              physio-behavioral cues. Advancing automotive safety through cutting-edge AI technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">University of Sri Jayewardenepura</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ict20876@fot.sjp.ac.lk</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+94 77 668 3240</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-blue-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>Resources</span>
            </h4>
            <ul className="space-y-3">
              {researchLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 text-sm group"
                  >
                    <link.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-white mb-2">Research Achievements</h4>
            <p className="text-blue-200">Breakthrough results in driver monitoring technology</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-2">{achievement.metric}</div>
                <div className="text-blue-200 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-blue-300 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} DrowsyGuard AI Research Project. University of Sri Jayewardenepura. 
              <br className="md:hidden" />
              <span className="block md:inline md:ml-1">All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">
                Terms of Use
              </a>
              <button 
                onClick={() => scrollToSection('#contact')} 
                className="text-blue-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;