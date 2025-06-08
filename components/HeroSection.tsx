"use client";
import React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye, Brain, GraduationCap } from "lucide-react";

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
      className="relative border min-h-screen pt-28 pb-10 flex items-center justify-center overflow-hidden"
    >
      <div className=" w-full h-full">
        <div className=" w-full flex items-center justify-center pb-10">
          <div className="inline-flex mx-auto items-center space-x-2 bg-blue-100 rounded-3xl px-6 py-3 mb-6">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
            <span className="text-blue-800 text-xl font-medium">
              Academic Research{" "}
            </span>
          </div>
        </div>
        <h1 className=" text-white relative w-8/12 lg:w-10/12 mx-auto font-bold text-4xl lg:text-6xl text-center">
          REAL-TIME DRIVER DROWSINESS DETECTION USING NON-INTRUSIVE
          MULTISPECTRAL VISION AND PHYSIO-BEHAVIOURAL CUES
        </h1>
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-400 to-indigo-600"></div> */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/1386648/pexels-photo-1386648.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
            className=" w-full h-full object-cover"
            alt=""
          />
        </div>

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
        <div className=" w-11/12 mx-auto"></div>
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
    </section>
  );
};

export default HeroSection;
