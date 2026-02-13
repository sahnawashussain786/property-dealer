import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Building"
          />
        </div>
        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-serif mb-6"
          >
            Redefining <span className="text-amber-500">Luxury</span> Real
            Estate
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We are more than just a real estate agency. We are curators of the
            finest lifestyles.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 2010, LuxeEstate began with a simple mission: to
              connect discerning clients with exceptional properties. What
              started as a boutique agency has grown into a premier luxury real
              estate firm, renowned for our personalized service and exclusive
              portfolio.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe that a home is more than just square footage—it's a
              sanctuary, a statement, and a legacy. Our team is dedicated to
              understanding your unique vision and turning it into reality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
              alt="Office"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-amber-600 font-serif">
                15+
              </p>
              <p className="text-slate-600 font-bold">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 font-serif">
            Meet Our Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Jenkins",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
              },
              {
                name: "Michael Sterling",
                role: "Head of Sales",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
              },
              {
                name: "Emily Chen",
                role: "Senior Consultant",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-amber-100"
                />
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  {/* Social icons would go here */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
