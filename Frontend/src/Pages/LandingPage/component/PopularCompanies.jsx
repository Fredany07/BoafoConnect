import React from "react";
import { motion } from "framer-motion";

// --- Import Local Assets ---
// NOTE: You'll need to adjust the paths and file extensions (.svg, .png, .jpg)
// to match exactly how they are stored in your asset folder.
import google from "../../../assets/google.jpg";
import amazon from "../../../assets/amazon.jpg";
import microsoft from "../../../assets/microsoft.jpg";

import delta from "../../../assets/delta.jpg";
import netflix from "../../../assets/netflix.png";
import testla from "../../../assets/testla.png";
import meta from "../../../assets/meta.png"


import samsung from "../../../assets/samsung.png";


// ---------------------------


const PopularCompanies = () => {
  const companies = [
    // FIX: Update the 'logo' property to use the imported local assets
    { name: "google", logo: google },
    { name: "amazon", logo: amazon },
    { name: "microsoft", logo: microsoft},
    {name:"meta", logo: meta},
  
    { name: "delta", logo: delta },
    { name: "netflix", logo: netflix},
    { name: "tesla", logo: testla},
   
    { name: "samsung", logo: samsung },
    
    
  
  ];

  // Repeat companies for seamless scroll
  const scrollingCompanies = [...companies, ...companies];

  // FIX: Adjust the duration to account for more companies and a smooth speed
  const scrollDuration = 45; // Seconds for one full loop

  // FIX: Ensure the Framer Motion animation is always wide enough for all items
  // by calculating the required width based on the number of items and their size.
  const itemWidth = 192; // w-48 is 192px
  const itemMargin = 16; // mx-4 means 16px left + 16px right (total 32px per item)
  const totalItemWidth = itemWidth + itemMargin * 2;
  const totalContainerWidth = scrollingCompanies.length * totalItemWidth;
  // This will stretch the motion div to be exactly the size of all logos combined
  const motionDivStyle = {
    width: `${totalContainerWidth}px`,
  };

  return (
    
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800">
          <span className="text-green-600">Popular Companies</span> Hiring
        </h2>

        {/* Auto-scrolling container */}
        <div className="overflow-hidden relative w-full border-y-2 border-gray-200 py-4">
          <motion.div
            className="flex items-center"
            style={motionDivStyle} // Apply the calculated width
            animate={{ x: ["0%", "-50%"] }} // Scroll exactly half the container width
            transition={{ repeat: Infinity, duration: scrollDuration, ease: "linear" }}
          >
            {scrollingCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                // FIX: Set a fixed width for the card instead of a percentage
                // w-48 (192px) is used to calculate the animation width
                className="flex-shrink-0 w-48 p-4 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all mx-4 group"
              >
                {/* Image container to control logo size */}
                <div className="h-20 flex items-center justify-center">
                  <img
                    // FIX: Use the imported logo variable
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    // FIX: Use max-width and max-height for better SVG scaling
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Optional: Add company name below the logo */}
                <p className="mt-4 text-sm font-semibold text-gray-700">
                    {company.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
   
  );
};

export default PopularCompanies;