"use client";
import React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Play,
  Shield,
  Zap,
  Eye,
  Brain,
  Activity,
  Camera,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: "93.2%", label: "Drowsiness Accuracy", icon: Eye },
    { value: "89.7%", label: "Stress Detection", icon: Brain },
    { value: "37%", label: "Risk Reduction", icon: Shield },
    { value: "22 FPS", label: "Real-time Processing", icon: Zap },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToResearch = () => {
    const researchSection = document.querySelector("#research");
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-10 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-cyan-500/20"></div>

        {/* Floating Particles */}
        <div
          className="particle particle-1"
          style={{ top: "20%", left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="particle particle-2"
          style={{ top: "60%", left: "80%", animationDelay: "2s" }}
        ></div>
        <div
          className="particle particle-3"
          style={{ top: "40%", left: "20%", animationDelay: "4s" }}
        ></div>
        <div
          className="particle particle-1"
          style={{ top: "80%", left: "60%", animationDelay: "1s" }}
        ></div>
        <div
          className="particle particle-2"
          style={{ top: "30%", left: "70%", animationDelay: "3s" }}
        ></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-32 w-24 h-24 border border-blue-500/30 rotate-45 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-medium text-sm">
                Live Research Project
              </span>
              <Shield className="w-4 h-4 text-cyan-300" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow-lg">
              Next-Gen
              <span className="block gradient-text text-6xl sm:text-7xl lg:text-8xl font-extrabold">
                DrowsyGuard
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-cyan-300">
                AI System
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary real-time driver monitoring using
              <span className="text-cyan-400 font-semibold">
                {" "}
                multispectral vision
              </span>{" "}
              and
              <span className="text-blue-400 font-semibold">
                {" "}
                AI-powered detection
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button
                onClick={scrollToResearch}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Explore Research
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 text-black hover:bg-gradient-to-r  hover:from-blue-600  hover:to-cyan-500  border-cyan-400/50  bg-cyan-400/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4 hover-lift">
                <div className="text-2xl font-bold text-cyan-400">18</div>
                <div className="text-gray-300 text-sm">Test Drivers</div>
              </div>
              <div className="glass rounded-lg p-4 hover-lift">
                <div className="text-2xl font-bold text-blue-400">42hrs</div>
                <div className="text-gray-300 text-sm">Data Collected</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Stats Display */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Main Stats Card */}
              <div className="glass rounded-3xl p-8 hover-glow">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow">
                    {React.createElement(stats[currentStat].icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {stats[currentStat].value}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stats[currentStat].label}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 mb-6">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStat
                          ? "bg-cyan-400 w-8"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Feature Icons */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Camera className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">Multi-Spectral</div>
                  </div>
                  <div className="text-center">
                    <Brain className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">AI Powered</div>
                  </div>
                  <div className="text-center">
                    <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">Real-time</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-float opacity-80"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full animate-float opacity-80"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToResearch}
            className="text-white/70 hover:text-white transition-colors duration-200 group"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium">Discover More</span>
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
