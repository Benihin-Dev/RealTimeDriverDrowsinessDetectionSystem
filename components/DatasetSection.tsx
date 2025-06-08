'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Brain, Download, Eye, Clock, Users } from 'lucide-react';

const DatasetSection = () => {
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

  const datasetStats = [
    { icon: Clock, value: "42", label: "Hours of Data", unit: "hrs" },
    { icon: Users, value: "18", label: "Test Drivers", unit: "drivers" },
    { icon: Eye, value: "3", label: "Camera Types", unit: "types" },
    { icon: Database, value: "100k+", label: "Labeled Frames", unit: "frames" }
  ];

  const modelFeatures = [
    {
      title: "Squeeze Temporal Attention Fusion (STAF)",
      description: "Novel architecture combining CNN and Bi-GRU for temporal sequence analysis"
    },
    {
      title: "Multi-Spectral Input Processing",
      description: "Simultaneous processing of RGB, NIR, and thermal imagery"
    },
    {
      title: "Edge-Optimized Design",
      description: "Quantized model for efficient deployment on Raspberry Pi + Coral TPU"
    },
    {
      title: "Real-Time Performance",
      description: "22 FPS processing with <90ms latency for immediate response"
    }
  ];

  return (
    <section id="dataset" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Dataset & <span className="gradient-text">Model</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive dataset and state-of-the-art model architecture for driver monitoring
          </p>
        </div>

        {/* Dataset Statistics */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {datasetStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TR-Stress-Drive Dataset */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">TR-Stress-Drive Dataset</h3>
                  <p className="text-xl text-gray-600">Comprehensive multimodal driver monitoring dataset</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Dataset Features</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>42 hours of labeled driving data</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>RGB, NIR, and Thermal camera streams</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Synchronized annotations for stress and drowsiness</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Diverse driving conditions and environments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Collection Details</h4>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Data collected from 18 diverse participants across various driving scenarios including 
                      urban and rural environments, different times of day, and varying weather conditions. 
                      All data is carefully annotated with ground truth labels for stress and drowsiness states.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">Open Source Release</h5>
                    <p className="text-gray-600">Dataset and code will be released for research community</p>
                  </div>
                  <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* STAF Model */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-gray-900 to-blue-900 border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">STAF Model</h3>
                  <p className="text-xl text-blue-200">Squeeze Temporal Attention Fusion Architecture</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">Model Architecture</h4>
                  <div className="space-y-4">
                    {modelFeatures.map((feature, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h5 className="font-semibold text-cyan-300 mb-2">{feature.title}</h5>
                        <p className="text-blue-100 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">Performance Metrics</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Drowsiness Detection</span>
                      <span className="text-2xl font-bold text-cyan-300">93.2%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '93.2%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Stress Detection</span>
                      <span className="text-2xl font-bold text-cyan-300">89.7%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '89.7%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Processing Speed</span>
                      <span className="text-2xl font-bold text-cyan-300">22 FPS</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <h5 className="text-lg font-semibold text-white mb-4">Deployment Setup</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-cyan-300 font-semibold">Hardware</div>
                      <div className="text-blue-100">Raspberry Pi 4 + Coral TPU</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-cyan-300 font-semibold">Latency</div>
                      <div className="text-blue-100">&lt;90ms</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-cyan-300 font-semibold">Power</div>
                      <div className="text-blue-100">Low Power (&lt;15W)</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DatasetSection;