import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              Luxe<span className="text-amber-500">Estate</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Experience the pinnacle of luxury living. We help you find not
              just a house, but a home that defines your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-500">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/sell"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Sell Property
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-500">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@luxeestate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-500">
              Newsletter
            </h4>
            <p className="text-slate-400 mb-4">
              Subscribe to get the latest property updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 text-white"
              />
              <button className="bg-amber-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LuxeEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
