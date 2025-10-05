import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Users, Building2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

// Import your background images
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg"; // Using image1 as a placeholder for image2
import image3 from "../../../assets/image3.jpg";
import back from "../../../assets/back.jpg"
import back2 from "../../../assets/back2.jpg"

// --- Configuration for the Slider ---
const SLIDE_INTERVAL = 5000; // Slide changes every 5 seconds (5000ms)

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  {image:back},
  {image:back2},
];
// --- End Configuration ---


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isAuthenticated = true;
  const user = { fullName: "Alex", role: "employer" };
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Active Users", value: "2.4M+" },
    { icon: Building2, label: "Companies", value: "50K+" },
    { icon: TrendingUp, label: "Jobs Posted", value: "150K+" },
  ];

  // --- Automatic Slide Change Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);
  // --- End useEffect ---


  return (
    // Changed bg-white to transparent since the image covers the background
    <section className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      
      {/* 1. Full-Screen Sliding Background Image Section */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentSlide} // CRITICAL: Forces animation on slide change
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            
            // --- HORIZONTAL SLIDE ANIMATION CHANGES ---
            initial={{ x: '100%', opacity: 1 }} // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }}       // Slide into the center (0)
            exit={{ x: '-100%', opacity: 1 }}    // Slide out off-screen to the left
            transition={{ 
              x: { duration: 1.0, ease: "easeInOut" }, // Smooth slide transition
              opacity: { duration: 0.1 } // Keep opacity high during slide
            }}
          />
        </AnimatePresence>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* End Background Image Section */}

      {/* Main Content (Z-Index 10) - Text color changed to white for background contrast */}
      <div className="container mx-auto px-4 z-10 relative text-white">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight pt-10"
          >
            Find Your Dream Job or
            <span className="block bg-gradient-to-r from-green-700
             to-green-700
             bg-clip-text text-transparent mt-2">
              Perfect Hire
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connect talented professionals with innovative companies. Your next
            career move or perfect candidate is just one click away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-orange-400
               to-green-700
                text-white px-8 py-4 rounded-xl font-semibold text-lg
                 hover:from-orange-400
                  hover:to-green-700
                  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              onClick={() => navigate("/find-jobs")}
            >
              <Search className="w-5 h-5" />
              <span>Find Jobs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-white/50 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => {
                navigate(
                  isAuthenticated && user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/login"
                );
              }}
            >
              Post a Job
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;