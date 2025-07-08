
import { useState } from "react";
import { ChevronDown, ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(false);

  return (
    <footer className="bg-stone-900 text-white py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">GoCart</h3>
            <p className="text-stone-300 leading-relaxed">
              Your trusted destination for premium outdoor gear and adventure essentials. 
              <span className="text-white font-medium"> Quality crafted</span> for every journey.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-stone-300 hover:bg-olive-600 hover:text-white transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-stone-300 hover:bg-olive-600 hover:text-white transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-stone-300 hover:bg-olive-600 hover:text-white transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="flex items-center text-stone-300 hover:text-white transition-colors"
                >
                  About GoCart
                  {isAboutExpanded ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </button>
                {isAboutExpanded && (
                  <p className="text-stone-400 mt-3 pl-6 border-l-2 border-olive-600 leading-relaxed">
                    GoCart is your premium destination for outdoor adventure gear, 
                    offering carefully curated equipment for every expedition.
                  </p>
                )}
              </li>
              <li>
                <button
                  onClick={() => setIsContactExpanded(!isContactExpanded)}
                  className="flex items-center text-stone-300 hover:text-white transition-colors"
                >
                  Contact
                  {isContactExpanded ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </button>
                {isContactExpanded && (
                  <div className="text-stone-400 mt-3 pl-6 border-l-2 border-olive-600 space-y-1">
                    <p><span className="text-white font-medium">Email:</span> support@gocart.com</p>
                    <p><span className="text-white font-medium">Phone:</span> +91-9363862074</p>
                    <p><span className="text-white font-medium">Hours:</span> Mon–Fri, 9AM–6PM</p>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/track-order" className="text-stone-300 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-stone-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-stone-300 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="text-stone-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-400">
            &copy; 2025 <span className="text-white font-medium">GoCart</span>. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
