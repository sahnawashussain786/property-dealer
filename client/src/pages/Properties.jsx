import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");
        setProperties(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 font-serif mb-2">
              Exclusive Listings
            </h1>
            <p className="text-slate-600">
              Browse our collection of premium properties.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-grow md:w-80">
              <input
                type="text"
                placeholder="Search location, price..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none shadow-sm"
              />
              <Search className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
            </div>
            <button className="bg-white p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 shadow-sm transition-colors">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
            {properties.length === 0 && (
              <div className="col-span-full text-center text-slate-500 py-20">
                <p className="text-xl">No properties found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
