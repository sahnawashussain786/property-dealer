import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  ArrowLeft,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/properties/${id}`,
        );
        setProperty(res.data);
        setLoading(false);
      } catch (err) {
        setError("Property not found");
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-40">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{error}</h2>
        <Link
          to="/properties"
          className="text-amber-600 hover:text-amber-700 font-bold flex items-center justify-center"
        >
          <ArrowLeft className="mr-2" /> Back to listings
        </Link>
      </div>
    );

  return (
    <div className="pt-20 pb-12 bg-slate-50 min-h-screen">
      {/* Hero Image */}
      <div className="h-[60vh] w-full relative mb-12">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-end">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif shadow-sm">
                    {property.title}
                  </h1>
                  <p className="text-xl text-slate-200 flex items-center shadow-sm">
                    <MapPin className="mr-2 text-amber-500" />{" "}
                    {property.location}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <p className="text-3xl font-bold text-white">
                    ${property.price.toLocaleString()}
                  </p>
                  <p className="text-amber-400 font-bold uppercase tracking-wide text-sm text-right">
                    For {property.type}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">
              Property Overview
            </h2>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                <BedDouble className="w-8 h-8 text-amber-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">
                  {property.bedrooms}
                </span>
                <span className="text-slate-500 text-sm">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                <Bath className="w-8 h-8 text-amber-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">
                  {property.bathrooms}
                </span>
                <span className="text-slate-500 text-sm">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                <Square className="w-8 h-8 text-amber-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">
                  {property.area}
                </span>
                <span className="text-slate-500 text-sm">Sq Ft</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Description
            </h3>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <User className="mr-2 text-amber-600" /> Contact Agent
              </h3>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Michael Sterling</p>
                  <p className="text-sm text-slate-500">
                    Senior Real Estate Agent
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="I'm interested in this property..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                ></textarea>
                <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center">
                  <Mail className="mr-2 w-4 h-4" /> Send Message
                </button>
                <button className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">
                  <Phone className="mr-2 w-4 h-4" /> Call Agent
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
