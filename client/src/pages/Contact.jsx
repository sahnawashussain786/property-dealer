import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about a property or need expert advice? We're here to
            help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Call Us
                </h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
                <p className="text-slate-500 text-sm mt-1">Mon-Fri 9am-6pm</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Email Us
                </h3>
                <p className="text-slate-600">info@luxeestate.com</p>
                <p className="text-slate-500 text-sm mt-1">24/7 Support</p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Visit Our Office
              </h3>
              <p className="text-slate-600 text-lg">
                123 Luxury Lane, Beverly Hills, CA 90210
              </p>
              <div className="mt-6 aspect-video bg-slate-200 rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1150&q=80"
                  alt="Map"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-full shadow-lg font-bold text-slate-900">
                    View on Google Maps
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center text-lg">
                <Send className="mr-2 w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
