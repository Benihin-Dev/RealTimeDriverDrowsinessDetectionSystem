"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Database,
  Brain,
  Download,
  Eye,
  Clock,
  Users,
  Cpu,
  Camera,
  Activity,
} from "lucide-react";

const TechnologySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const datasetStats = [
    {
      icon: Clock,
      value: "42",
      label: "Hours of Data",
      unit: "hrs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: "18",
      label: "Test Drivers",
      unit: "drivers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      value: "3",
      label: "Camera Types",
      unit: "types",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Database,
      value: "100k+",
      label: "Labeled Frames",
      unit: "frames",
      color: "from-orange-500 to-red-500",
    },
  ];

  const tabs = [
    {
      title: "TR-Stress-Drive Dataset",
      icon: Database,
      content: {
        title: "Comprehensive Multimodal Dataset",
        description:
          "Our TR-Stress-Drive dataset represents the most comprehensive collection of driver monitoring data, featuring synchronized RGB, NIR, and thermal camera streams with precise annotations.",
        features: [
          "42 hours of labeled driving data across diverse conditions",
          "RGB, NIR, and Thermal camera streams with temporal synchronization",
          "Precise stress and drowsiness state annotations",
          "Real-world driving scenarios: urban, rural, day, night",
          "18 diverse participants with varying demographics",
          "Ground truth validation through multiple assessment methods",
        ],
        highlight: "Open-source release planned for research community",
      },
    },
    {
      title: "STAF Model Architecture",
      icon: Brain,
      content: {
        title: "Squeeze Temporal Attention Fusion",
        description:
          "Our novel STAF architecture combines CNN feature extraction with Bi-GRU temporal modeling, optimized for real-time edge deployment while maintaining state-of-the-art accuracy.",
        features: [
          "Multi-spectral input processing (RGB, NIR, Thermal)",
          "Temporal attention mechanism for sequence analysis",
          "Edge-optimized quantization for Raspberry Pi deployment",
          "Real-time inference at 22 FPS with <90ms latency",
          "Robust performance across lighting conditions",
          "Adaptive threshold adjustment for different drivers",
        ],
        highlight: "93.2% drowsiness accuracy, 89.7% stress detection",
      },
    },
    {
      title: "Edge Deployment",
      icon: Cpu,
      content: {
        title: "Optimized Hardware Integration",
        description:
          "Engineered for practical deployment on resource-constrained edge devices, our system achieves real-time performance on affordable hardware suitable for automotive integration.",
        features: [
          "Raspberry Pi 4 with Coral TPU acceleration",
          "Low power consumption (<15W total system)",
          "Compact form factor for in-vehicle installation",
          "Real-time processing at 22 FPS",
          "Sub-90ms end-to-end latency",
          "Robust operation in automotive environments",
        ],
        highlight: "Production-ready edge deployment",
      },
    },
  ];

  const performanceMetrics = [
    { label: "Drowsiness Detection", value: 93.2, color: "bg-blue-500" },
    { label: "Stress Detection", value: 89.7, color: "bg-purple-500" },
    {
      label: "Processing Speed",
      value: 88,
      color: "bg-green-500",
      unit: "22 FPS",
    },
    { label: "System Efficiency", value: 95, color: "bg-orange-500" },
  ];

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 mb-6">
            <Cpu className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-semibold">
              Technology Stack
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Advanced <span className="gradient-text-purple">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge dataset, model architecture, and deployment
            infrastructure powering next-generation driver monitoring
          </p>
        </div>

        {/* Dataset Statistics */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {datasetStats.map((stat, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 overflow-hidden"
              >
                <CardContent className="p-6 text-center relative">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                  ></div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Tabs */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-2 sm:space-y-0 sm:space-x-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    {React.createElement(tabs[activeTab].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {tabs[activeTab].content.title}
                  </h3>
                </div>
                <p className="text-purple-100 text-lg leading-relaxed">
                  {tabs[activeTab].content.description}
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      Key Features
                    </h4>
                    <div className="space-y-4">
                      {tabs[activeTab].content.features.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      Performance Metrics
                    </h4>
                    <div className="space-y-4">
                      {performanceMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">
                              {metric.label}
                            </span>
                            <span className="text-gray-900 font-bold">
                              {metric.unit || `${metric.value}%`}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`${metric.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-900">
                          Highlight
                        </span>
                      </div>
                      <p className="text-gray-700">
                        {tabs[activeTab].content.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deployment Architecture */}
        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-br from-slate-900 to-blue-900 border-0 text-white overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  Deployment Architecture
                </h3>
                <p className="text-blue-200 max-w-2xl mx-auto">
                  Optimized hardware and software stack for real-world
                  automotive deployment
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow">
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Multi-Spectral Cameras
                  </h4>
                  <p className="text-blue-200 text-sm">
                    RGB, NIR, and Thermal imaging for comprehensive driver
                    monitoring
                  </p>
                </div>

                <div className="text-center">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow"
                    style={{ animationDelay: "1s" }}
                  >
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Edge Processing
                  </h4>
                  <p className="text-blue-200 text-sm">
                    Raspberry Pi 4 + Coral TPU for real-time AI inference
                  </p>
                </div>

                <div className="text-center">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow"
                    style={{ animationDelay: "2s" }}
                  >
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Alert System</h4>
                  <p className="text-blue-200 text-sm">
                    Adaptive audio, haptic, and visual alerts for driver
                    intervention
                  </p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="glass-dark rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    22 FPS
                  </div>
                  <div className="text-blue-200 text-sm">Processing Speed</div>
                </div>
                <div className="glass-dark rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    &lt;90ms
                  </div>
                  <div className="text-blue-200 text-sm">Latency</div>
                </div>
                <div className="glass-dark rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    &lt;15W
                  </div>
                  <div className="text-blue-200 text-sm">Power Consumption</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 border-0 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Open Source Release</h3>
                <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                  Dataset, model weights, and complete source code will be
                  released to advance research in driver monitoring systems
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button
                    size="lg"
                    className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Coming Soon
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-black hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Database className="w-5 h-5 mr-2" />
                    Preview Dataset
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

export default TechnologySection;
