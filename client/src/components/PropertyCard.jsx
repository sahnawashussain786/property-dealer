import React from "react";
import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, Square, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
    >
      <div className="relative overflow-hidden h-64">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
          {property.type}
        </div>
        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          Featured
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link
            to={`/properties/${property._id}`}
            className="w-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 font-bold py-3 rounded-lg flex items-center justify-center transition-all duration-300"
          >
            View Details <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 line-clamp-1 font-serif">
              {property.title}
            </h3>
            <p className="text-slate-500 text-sm flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-amber-500" />
              {property.location}
            </p>
          </div>
          <p className="text-amber-600 font-bold text-lg">
            ${property.price.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between items-center py-4 border-t border-slate-100 text-slate-600">
          <div className="flex items-center space-x-1">
            <BedDouble className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">
              {property.bedrooms} Beds
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">
              {property.bathrooms} Baths
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{property.area} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
