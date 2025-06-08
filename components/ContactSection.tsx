"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Users,
  FileText,
  Calendar,
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  });
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      type: "general",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ict20876@fot.sjp.ac.lk",
      description: "Primary contact for research inquiries",
      action: "mailto:ict20876@fot.sjp.ac.lk",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+94 77 668 3240",
      description: "Direct line for urgent matters",
      action: "tel:+94776683240",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Faculty of Technology",
      description: "University of Sri Jayewardenepura, Sri Lanka",
      action: "",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "collaboration", label: "Research Collaboration", icon: Users },
    { value: "technical", label: "Technical Questions", icon: FileText },
    { value: "media", label: "Media & Press", icon: Calendar },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
      "
    ></section>
  );
};

export default ContactSection;
