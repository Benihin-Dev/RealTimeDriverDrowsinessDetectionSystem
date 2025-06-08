"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    drowsiness: 0,
    stress: 0,
    reduction: 0,
    fps: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate statistics
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setAnimatedStats({
              drowsiness: Math.round(93.2 * easeOut * 10) / 10,
              stress: Math.round(89.7 * easeOut * 10) / 10,
              reduction: Math.round(37 * easeOut),
              fps: Math.round(22 * easeOut),
            });

            if (step >= steps) {
              clearInterval(timer);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: "Drowsiness Detection Accuracy",
      value: animatedStats.drowsiness,
      unit: "%",
      description: "State-of-the-art performance in real-world conditions",
      color: "from-blue-500 to-cyan-500",
      icon: "🎯",
    },
    {
      title: "Stress Detection Precision",
      value: animatedStats.stress,
      unit: "%",
      description: "Reliable stress level assessment during driving",
      color: "from-purple-500 to-pink-500",
      icon: "🧠",
    },
    {
      title: "Risk Reduction",
      value: animatedStats.reduction,
      unit: "%",
      description: "Decrease in risky driving behaviors with adaptive alerts",
      color: "from-green-500 to-teal-500",
      icon: "🛡️",
    },
    {
      title: "Processing Speed",
      value: animatedStats.fps,
      unit: " FPS",
      description: "Real-time performance on edge hardware",
      color: "from-orange-500 to-red-500",
      icon: "⚡",
    },
  ];

  const testingConditions = [
    { condition: "Urban Driving", participants: 18, hours: 24 },
    { condition: "Rural Roads", participants: 18, hours: 12 },
    { condition: "Night Driving", participants: 15, hours: 6 },
    { condition: "Various Weather", participants: 12, hours: 8 },
  ];

  return (
    <section
      id="results"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">
              Research Results
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Breakthrough <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Demonstrating significant advances in driver monitoring accuracy and
            real-world safety impact
          </p>
        </div>

        {/* Key Achievements */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 overflow-hidden"
              >
                <CardContent className="p-6 text-center relative">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`}
                  ></div>
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {achievement.value}
                    {achievement.unit}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 border-0 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6">Research Impact</h3>
                <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                  Our research demonstrates the feasibility and effectiveness of
                  real-time, non-intrusive driver monitoring systems, paving the
                  way for widespread adoption in automotive safety applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">
                      93.2%
                    </div>
                    <div className="text-blue-200">Drowsiness Accuracy</div>
                    <div className="text-blue-300 text-sm mt-1">
                      Best-in-class performance
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">
                      37%
                    </div>
                    <div className="text-blue-200">Risk Reduction</div>
                    <div className="text-blue-300 text-sm mt-1">
                      Proven safety impact
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">
                      Open
                    </div>
                    <div className="text-blue-200">Source Release</div>
                    <div className="text-blue-300 text-sm mt-1">
                      Community contribution
                    </div>
                  </div>
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

export default ResultsSection;
