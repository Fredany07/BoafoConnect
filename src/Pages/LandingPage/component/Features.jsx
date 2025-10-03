import React from "react";
import { jobSeekerFeatures, employerFeatures, helpfulResources } from "../../../utils/data";

const Features = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for your next opportunity or the perfect
            candidate, we have the tools and resources to make it happen.
          </p>
        </div>

        {/* 3-Column Grid: Job Seekers | Employers | Helpful Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Job Seekers Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                For Job Seekers
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
            </div>
            <div className="space-y-4">
              {jobSeekerFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employers Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                For Employers
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full" />
            </div>
            <div className="space-y-4">
              {employerFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <feature.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helpful Resources Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Helpful Resources
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
            </div>
            <div className="space-y-4">
              {helpfulResources.map((resource, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <resource.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {resource.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
