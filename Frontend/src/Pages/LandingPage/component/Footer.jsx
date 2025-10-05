import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-r from-purple-400 to-yellow-400">
      {/* Animated Background Shapes */}
      <div className="footer-bg-animated footer-bg-purple"></div>
      <div className="footer-bg-animated footer-bg-blue"></div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold
               text-green
               ">
                BoafoConnect
                </h3>
            </div>
            <p className="text-sm text-white/80 max-w-xs">
              Connecting talented professionals with innovative companies worldwide. Your career success is our mission.
            </p>
            <div className="flex space-x-4 mt-2">
              <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              <li className="hover:text-gray-300 cursor-pointer">Explore Jobs</li>
              <li className="hover:text-gray-300 cursor-pointer">Find Jobs</li>
              <li className="hover:text-gray-300 cursor-pointer">For Employers</li>
              <li className="hover:text-gray-300 cursor-pointer">Job Alerts</li>
              <li className="hover:text-gray-300 cursor-pointer">Upload Resume</li>
              <li className="hover:text-gray-300 cursor-pointer">Salary Tool</li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company Info</h4>
            <ul className="space-y-2 text-white/90">
              <li className="hover:text-gray-300 cursor-pointer">About Us</li>
              <li className="hover:text-gray-300 cursor-pointer">Careers</li>
              <li className="hover:text-gray-300 cursor-pointer">Press</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for latest updates.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md flex-1 text-gray-900"
              />
              <button className="bg-white text-blue-600 px-4 py-2 rounded-r-md font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Policies */}
        <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-white/70 space-y-2">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">California Privacy Notice</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Use</span>
            <span className="hover:text-gray-300 cursor-pointer">Cookie Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Job Posting Rules</span>
            <span className="hover:text-gray-300 cursor-pointer">Attribution Notices</span>
            <span className="hover:text-gray-300 cursor-pointer">Corporate Responsibility</span>
            <span className="hover:text-gray-300 cursor-pointer">Security and Compliance</span>
          </div>

          <p className="mt-4">
            © {new Date().getFullYear()} BoafoConnect.
             Made with ❤️ Freda Nyarko LLC.All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


