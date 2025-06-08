"use client";

import React from "react";
import Image from "next/image";
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
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>

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
        <div className="">
          <h3 className=" text-black text-center font-bold text-4xl pt-16">
            System Flow
          </h3>
          <p className=" text-center text-gray-700 pt-2">
            An illustration of how data and processes move through the system’s
            architecture.
          </p>
          <div className=" flex items-center justify-center w-full mt-10">
            <Image
              src="\images\SystemFlowImage.png"
              alt="System Flow Image"
              width={840}
              height={150}
              className=" object-cover  "
            />
          </div>
        </div>

        <div className="">
          <div className=" w-40  border-b pt-20 mx-auto pb-5"></div>
          <h3 className=" text-black text-center font-bold text-4xl pt-20">
            The Modular Software Design
          </h3>
          <p className=" text-center text-gray-700 pt-2">
            A visual representation of the system’s modular structure and its
            components.
          </p>
          <div className=" flex items-center justify-center w-full mt-10">
            <Image
              src="\images\SoftwareDesignImage.png"
              alt="System Flow Image"
              width={740}
              height={150}
              className=" object-cover  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
