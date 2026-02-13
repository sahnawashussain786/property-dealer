import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Users,
  Home as HomeIcon,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");
        setFeaturedProperties(res.data.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-2a4d9f31b936?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight"
          >
            Discover Your <span className="text-amber-500">Sanctuary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto"
          >
            Curated properties for the modern lifestyle. Experience luxury
            living like never before.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/properties"
              className="bg-amber-600 text-white font-bold py-4 px-8 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Browse Properties <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center"
            >
              Contact Agent
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              Why Choose LuxeEstate
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Star,
                title: "Premium Properties",
                desc: "Access to exclusive listings in the most sought-after locations.",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                desc: "Our team of experienced agents is dedicated to finding your perfect match.",
              },
              {
                icon: CheckCircle,
                title: "Seamless Process",
                desc: "From viewing to closing, we ensure a smooth and stress-free experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
                Featured Listings
              </h2>
              <p className="text-slate-600 text-lg">
                Explore our hand-picked selection of premium properties.
              </p>
            </motion.div>
            <Link
              to="/properties"
              className="hidden md:flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors"
            >
              View All <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/properties"
              className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors"
            >
              View All <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Ready to Find Your Dream Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10"
          >
            Schedule a consultation with our expert agents today and take the
            first step towards luxury living.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-amber-600 text-white font-bold py-4 px-10 rounded-full hover:bg-amber-700 transition-all shadow-xl inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
