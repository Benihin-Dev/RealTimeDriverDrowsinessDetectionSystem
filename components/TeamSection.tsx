"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "S. Lakeeshan",
      role: "Software Technology",
      email: "ict20876@fot.sjp.ac.lk",
      phone: "+94776683240",
      specialization: "AI/ML Development, Edge Computing",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      contributions: [
        "STAF Model Architecture",
        "Edge Optimization",
        "Real-time Processing",
      ],
    },
    {
      name: "T.KG.A.I. Sampath",
      role: "Network Technology",
      email: "ict20922@fot.sjp.ac.lk",
      phone: "+94 76 758 5990",
      specialization: "Computer Vision, Signal Processing",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      gradient: "from-purple-500 to-pink-500",
      contributions: [
        "Computer Vision Pipeline",
        "Data Collection",
        "Algorithm Development",
      ],
    },
    {
      name: "H.C. Charithma",
      role: "Network Technology",
      email: "ict20831@fot.sjp.ac.lk",
      phone: "+94 76 180 1738",
      specialization: "Hardware Integration, Embedded Systems",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      gradient: "from-green-500 to-teal-500",
      contributions: ["Hardware Setup", "System Integration", "Field Testing"],
    },
  ];

  const supervisor = {
    name: "Mr. Chamila Karunatilake",
    role: "Senior Lecturer",
    department: "Faculty of Technology",
    university: "University of Sri Jayewardenepura",
    email: "pulasthi@sjp.ac.lk",
    specialization: "Computer Vision, Machine Learning, IoT Systems",
    image:
      "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    achievements: [
      "15+ Years Research Experience",
      "50+ Published Papers",
      "Industry Collaborations",
    ],
  };

  const projectStats = [
    { label: "Research Duration", value: "12 Months", icon: Calendar },
    { label: "Team Members", value: "3 Students", icon: GraduationCap },
    {
      label: "University",
      value: "University fo Sri Jayewardenepura",
      icon: MapPin,
    },
    { label: "Research Level", value: "Undergraduate", icon: Award },
  ];

  return (
    <section id="team" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Research Team</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Passionate researchers dedicated to advancing automotive safety
            through innovative AI technology
          </p>
        </div>

        {/* Project Stats */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <Card key={index} className="hover-lift border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supervisor */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Project Supervisor
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert guidance and mentorship driving our research excellence
            </p>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-white/20">
                      <img
                        src={supervisor.image}
                        alt={supervisor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-3xl font-bold mb-2">
                      {supervisor.name}
                    </h4>
                    <div className="text-xl text-cyan-300 font-semibold mb-2">
                      {supervisor.role}
                    </div>
                    <div className="text-blue-200 mb-1">
                      {supervisor.department}
                    </div>
                    <div className="text-blue-200 mb-6">
                      {supervisor.university}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {supervisor.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="glass-dark rounded-lg p-3 text-center"
                        >
                          <div className="text-cyan-300 font-semibold text-sm">
                            {achievement}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
                      <a
                        href={`mailto:${supervisor.email}`}
                        className="flex items-center space-x-2 text-cyan-300 hover:text-white transition-colors duration-200 group"
                      >
                        <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span>{supervisor.email}</span>
                      </a>
                      <div className="text-blue-200 text-sm">
                        {supervisor.specialization}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Research Students
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Undergraduate researchers pushing the boundaries of driver
              monitoring technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div
                    className={`h-2 bg-gradient-to-r ${member.gradient}`}
                  ></div>
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="relative inline-block">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center`}
                        >
                          <GraduationCap className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h4>
                      <div
                        className={`inline-block bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}
                      >
                        {member.role}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <GraduationCap className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">
                            Specialization
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {member.specialization}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm font-medium text-gray-700 mb-3">
                          Key Contributions
                        </div>
                        <div className="space-y-2">
                          {member.contributions.map((contribution, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-600 text-sm">
                                {contribution}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                            <Mail className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-sm truncate">
                            {member.email}
                          </span>
                        </a>

                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors duration-200 group"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                            <Phone className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm">{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* University Info */}
        <div
          className={`mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-6">
                  University of Sri Jayewardenepura
                </h3>
                <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                  This groundbreaking research is conducted at the Faculty of
                  Technology, University of Sri Jayewardenepura, as part of our
                  commitment to advancing automotive safety through innovative
                  undergraduate research programs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                    <div className="text-xl font-semibold mb-2">
                      Faculty of Technology
                    </div>
                    <div className="text-blue-200 text-sm">
                      Leading innovation in technology education
                    </div>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                    <div className="text-xl font-semibold mb-2">
                      Research Excellence
                    </div>
                    <div className="text-blue-200 text-sm">
                      Fostering cutting-edge research projects
                    </div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                    <div className="text-xl font-semibold mb-2">Sri Lanka</div>
                    <div className="text-blue-200 text-sm">
                      Contributing to global research community
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

export default TeamSection;
