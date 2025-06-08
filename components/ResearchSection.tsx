"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Cpu,
  AlertTriangle,
  Shield,
  FileSearch,
  Target,
  Lightbulb,
  Zap,
  Camera,
  Brain,
  Activity,
} from "lucide-react";

const ResearchSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      icon: Eye,
      title: "Advanced Drowsiness Detection",
      description:
        "Multi-modal analysis of eye movement, blink patterns, and pupil dilation using RGB, NIR, and thermal imaging for unprecedented accuracy.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "93.2% Accuracy",
    },
    {
      icon: Brain,
      title: "AI-Powered Stress Analysis",
      description:
        "Deep learning models analyze facial temperature patterns and micro-expressions to detect stress levels in real-time driving conditions.",
      gradient: "from-purple-500 to-pink-500",
      stats: "89.7% Precision",
    },
    {
      icon: Cpu,
      title: "Edge Computing Optimization",
      description:
        "Optimized for Raspberry Pi 4 with Coral TPU acceleration, achieving 22 FPS processing with sub-90ms latency for immediate response.",
      gradient: "from-green-500 to-teal-500",
      stats: "22 FPS Real-time",
    },
    {
      icon: AlertTriangle,
      title: "Adaptive Alert System",
      description:
        "Intelligent intervention system with audio, haptic, and music-based alerts that adapt to driver behavior and reduce risky driving by 37%.",
      gradient: "from-orange-500 to-red-500",
      stats: "37% Risk Reduction",
    },
  ];

  const objectives = [
    {
      icon: Target,
      title: "Non-Intrusive Monitoring",
      description: "Camera-based detection without wearable devices",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Immediate response with <90ms latency",
    },
    {
      icon: Camera,
      title: "Multi-Spectral Fusion",
      description: "RGB, NIR, and thermal camera integration",
    },
    {
      icon: Activity,
      title: "Edge Deployment",
      description: "Optimized for embedded systems",
    },
  ];

  const findings = [
    {
      icon: Lightbulb,
      title: "Breakthrough in Real-Time Detection",
      description:
        "Our STAF (Squeeze Temporal Attention Fusion) model achieves state-of-the-art performance in detecting driver drowsiness and stress using multispectral imaging. The system maintains high accuracy even in challenging conditions like low light and partial occlusion.",
      highlight: "93.2% drowsiness accuracy",
    },
    {
      icon: Shield,
      title: "Proven Safety Impact",
      description:
        "Field testing with 18 drivers across diverse real-world conditions demonstrated a significant 37% reduction in risky driving behaviors. The adaptive alert system effectively maintains driver alertness without causing distraction.",
      highlight: "37% risk reduction",
    },
  ];

  return (
    <section
      id="research"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-br from-slate-900 to-blue-900 border-0 text-white overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Project Overview</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    Our system revolutionizes driver monitoring by fusing eye
                    movement analysis, blink rate detection, pupil dilation
                    measurement, gaze tracking, facial temperature monitoring,
                    and hand position analysis. Using advanced deep learning
                    with Bi-GRU and CNN architectures, we achieve unprecedented
                    accuracy in real-world driving conditions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-blue-100">
                        42 hours of labeled driving data
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-blue-100">
                        18 diverse test participants
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-blue-100">
                        Multi-spectral camera integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-blue-100">
                        Edge-optimized deployment
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="glass-dark rounded-2xl p-8">
                    <h4 className="text-xl font-semibold text-cyan-300 mb-6">
                      Key Objectives
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {objectives.map((objective, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                            <objective.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white text-sm mb-1">
                              {objective.title}
                            </h5>
                            <p className="text-blue-200 text-xs">
                              {objective.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-float opacity-60"></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full animate-float opacity-60"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <Brain className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">
              Research Innovation
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="gradient-text">AI Research</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of automotive safety through cutting-edge
            computer vision and deep learning technologies
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover-lift border-0 overflow-hidden ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-2xl"
                    : "shadow-lg"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardContent className="p-0">
                  <div
                    className={`h-2 bg-gradient-to-r ${feature.gradient}`}
                  ></div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900">
                            {feature.title}
                          </h4>
                          <span
                            className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white`}
                          >
                            {feature.stats}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Findings */}
        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Key Research Findings
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Breakthrough discoveries that advance the field of driver
              monitoring and automotive safety
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {findings.map((finding, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <finding.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {finding.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {finding.description}
                      </p>
                      <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-800 font-semibold text-sm">
                          {finding.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
