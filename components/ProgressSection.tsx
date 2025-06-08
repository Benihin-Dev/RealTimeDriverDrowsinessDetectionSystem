'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Target } from 'lucide-react';

const ProgressSection = () => {
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

  const milestones = [
    {
      title: "Literature review completed",
      description: "Comprehensive analysis of existing driver monitoring systems and technologies",
      completed: true,
      date: "Q1 2024"
    },
    {
      title: "System design finalized",
      description: "Complete architecture design for multimodal sensor fusion system",
      completed: true,
      date: "Q1 2024"
    },
    {
      title: "Hardware setup and testing",
      description: "Raspberry Pi 4, Coral TPU, and camera integration testing",
      completed: true,
      date: "Q2 2024"
    },
    {
      title: "Data collection (42 hours, 18 drivers)",
      description: "Extensive data collection across diverse driving conditions",
      completed: true,
      date: "Q2 2024"
    },
    {
      title: "Annotation and dataset creation",
      description: "Precise labeling of stress and drowsiness states in collected data",
      completed: true,
      date: "Q3 2024"
    },
    {
      title: "Model training and evaluation",
      description: "STAF model training achieving F1 scores: 0.93 (drowsiness), 0.89 (stress)",
      completed: true,
      date: "Q3 2024"
    },
    {
      title: "Final report and presentation",
      description: "Documentation and presentation of research findings",
      completed: false,
      date: "Q4 2024"
    }
  ];

  const completedMilestones = milestones.filter(m => m.completed).length;
  const progressPercentage = (completedMilestones / milestones.length) * 100;

  return (
    <section id="progress" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Progress <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tracking our research milestones and achievements
          </p>
        </div>

        {/* Progress Overview */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Progress</h3>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{completedMilestones}</div>
                    <div className="text-gray-600">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-400 mb-2">{milestones.length - completedMilestones}</div>
                    <div className="text-gray-600">Remaining</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{Math.round(progressPercentage)}%</div>
                    <div className="text-gray-600">Complete</div>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                    milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {milestone.completed ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  
                  {/* Milestone content */}
                  <div className="flex-1 min-w-0">
                    <Card className={`${milestone.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'} hover:shadow-lg transition-shadow duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              {milestone.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <Target className="w-5 h-5 text-gray-400" />
                              )}
                              <h4 className={`text-lg font-semibold ${
                                milestone.completed ? 'text-green-800' : 'text-gray-900'
                              }`}>
                                {milestone.title}
                              </h4>
                            </div>
                            <p className={`${
                              milestone.completed ? 'text-green-700' : 'text-gray-600'
                            } leading-relaxed`}>
                              {milestone.description}
                            </p>
                          </div>
                          <div className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                            milestone.completed 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {milestone.date}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Achievements */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-200 mb-2">93.2%</div>
                  <div className="text-white">Drowsiness Detection Accuracy</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-200 mb-2">37%</div>
                  <div className="text-white">Reduction in Risky Driving</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-200 mb-2">22 FPS</div>
                  <div className="text-white">Real-time Processing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;