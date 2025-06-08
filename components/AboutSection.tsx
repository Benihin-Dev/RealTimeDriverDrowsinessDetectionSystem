'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Cpu, AlertTriangle, Shield, FileSearch, Target, Lightbulb, Zap } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Eye,
      title: "Drowsiness & Stress Detection",
      description: "The system uses deep learning models on RGB, NIR, and thermal images to detect drowsiness and stress in real time—no wearables needed, fully non-intrusive."
    },
    {
      icon: Cpu,
      title: "Edge Deployment",
      description: "Runs on a Raspberry Pi 4 with Coral TPU accelerator, processing at 22 fps with <90 ms latency—ideal for in-vehicle integration."
    },
    {
      icon: AlertTriangle,
      title: "Behavioral Interventions",
      description: "Triggers adaptive audio, haptic, and music alerts tailored to the driver's state, reducing risky driving behaviors by up to 37%."
    },
    {
      icon: Shield,
      title: "Robust Performance",
      description: "Tested on 18 drivers under diverse real-world conditions—day/night, urban/rural, various occlusions—with high accuracy: 89.7% (stress) and 93.2% (drowsiness)."
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: "Real-time, non-intrusive drowsiness and stress detection"
    },
    {
      icon: Cpu,
      title: "Embedded edge deployment (Raspberry Pi + TPU)"
    },
    {
      icon: Zap,
      title: "Multimodal sensor fusion (RGB, NIR, Thermal)"
    },
    {
      icon: FileSearch,
      title: "Open-source dataset and edge-optimized deep learning model"
    }
  ];

  const findings = [
    {
      icon: Lightbulb,
      title: "Real-Time Drowsiness and Stress Detection Is Feasible and Accurate",
      description: "Through extensive experimentation with multispectral imaging (RGB, NIR, thermal) and deep learning models, we found that our approach reliably detects driver drowsiness and stress in real-world conditions. The system achieved 93.2% accuracy for drowsiness and 89.7% for stress detection, outperforming traditional methods even in challenging lighting and occlusion scenarios."
    },
    {
      icon: Shield,
      title: "Adaptive Alerts Enhance Driving Safety",
      description: "By integrating audio, haptic, and music-based alerts, our system effectively reduced risky driving behaviors by up to 37%. The adaptive countermeasures were well-received by drivers, offering a practical and non-intrusive way to maintain alertness and improve road safety."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About the <span className="gradient-text">Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing road safety through advanced AI and computer vision technology
          </p>
        </div>

        {/* Project Description */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Description</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our system fuses eye movement, blink rate, pupil dilation, gaze, facial temperature, and hand position to detect driver states. 
                It uses deep learning (Bi-GRU + CNNs) and multispectral imaging. It triggers adaptive alerts (sound, haptic feedback, calming music) 
                to improve driver safety.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h4>
                <p className="text-gray-700 leading-relaxed">
                  Developed an in-vehicle driver monitoring system combining RGB, NIR, and thermal cameras to detect drowsiness and stress 
                  in real time. Achieved 89.7% stress accuracy and 93.2% drowsiness accuracy on a Raspberry Pi 4 with Coral TPU. 
                  Tested on 18 drivers in real traffic; reduced risky driving by 37% with adaptive alerts. System is non-intrusive, 
                  cost-effective, and works in low light and occlusion. Dataset and code to be released open-source.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Objectives */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Objectives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <objective.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{objective.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System Diagrams Placeholder */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">System Flow</h4>
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">System Flow Diagram Placeholder</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Modular Software Design</h4>
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Software Architecture Diagram Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Research Findings */}
        <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Research Findings</h3>
          <div className="space-y-8">
            {findings.map((finding, index) => (
              <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <finding.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{finding.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{finding.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Papers Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-blue-900 to-cyan-600 border-0 text-white">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-6">Research Papers</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Explore our published research and detailed technical documentation
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl"
              >
                <FileSearch className="w-5 h-5 mr-2" />
                Find Research Papers
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;