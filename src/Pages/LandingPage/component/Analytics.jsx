import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Target } from "lucide-react";
import React from "react";

const Analytics = () => {
  // Your original stats data
  const stats = [
    {
      icon: Users,
      title: "Active Users",
      value: "2.4M+",
      growth: "+15%",
      // Retaining original icon colors for consistency, but changing card background
      iconBg: "bg-blue-300", 
      iconColor: "text-blue-800",
      description: "A large and growing community of users actively engaging with the platform.",
    },
    {
      icon: Briefcase,
      title: "Jobs Posted",
      value: "150K+",
      growth: "+22%",
      iconBg: "bg-purple-300",
      iconColor: "text-purple-800",
      description: "The volume of new opportunities created by companies seeking talent.",
    },
    {
      icon: Target,
      title: "Successful Hires",
      value: "89K+",
      growth: "+18%",
      iconBg: "bg-green-300",
      iconColor: "text-green-800",
      description: "The number of successful matches made between talent and employers.",
    },
    {
      icon: TrendingUp,
      title: "Match Rate",
      value: "94%",
      growth: "+8%",
      iconBg: "bg-orange-300",
      iconColor: "text-orange-800",
      description: "The high efficiency rate of the platform's proprietary matching algorithm.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 relative"> {/* Dark background for the section */}
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6"> {/* Text is white now */}
            Platform <span className="text-black">Analytics</span>
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Real-time insights and data-driven results that showcase the power
            of our platform in connecting talent with opportunities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              // Dark background for the card, rounded corners, and shadow
              className="bg-blue-900 p-6 rounded-2xl shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                {/* Icon */}
                <div
                  // Made icon background slightly lighter to pop on dark card
                  className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>

                {/* Growth badge (always green) */}
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
                  {stat.growth}
                </span>
              </div>

              {/* Values */}
              <h3 className="text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-300 text-lg mb-4">{stat.title}</p>

              {/* Added a short description and a spacer to push the button down */}
              <p className="text-gray-400 text-sm mb-6 flex-grow">{stat.description}</p> 

              {/* Read more button (similar style to the design you liked) */}
              <button className="self-start px-6 py-2 bg-orange-300 text-white font-semibold rounded-full hover:bg-orange-300 transition-colors duration-300 text-sm">
                View Detailed Report
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;