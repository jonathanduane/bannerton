import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "Award", label: "Winning Agency" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bannerton-light relative overflow-hidden">
      {/* Decorative flamingo */}
      <div className="absolute bottom-4 left-4 opacity-40">
        <svg width="60" height="60" viewBox="0 0 200 200" className="drop-shadow-lg">
          <ellipse cx="100" cy="120" rx="20" ry="35" fill="#FF69B4" transform="rotate(-15 100 120)"/>
          <path d="M85 100 Q75 85 70 70 Q68 55 75 45" stroke="#FF69B4" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <circle cx="75" cy="45" r="10" fill="#FF69B4"/>
          <path d="M68 45 L60 47 L68 49 Z" fill="#333"/>
          <circle cx="77" cy="43" r="1.5" fill="white"/>
          <circle cx="78" cy="42" r="0.8" fill="black"/>
          <path d="M85 110 Q105 108 108 125 Q105 135 85 132" fill="#FF1493" opacity="0.8"/>
          <line x1="100" y1="155" x2="103" y2="180" stroke="#FF69B4" strokeWidth="3"/>
          <ellipse cx="103" cy="185" rx="10" ry="2" fill="#87CEEB" opacity="0.6"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-bannerton-navy mb-4">
            Proven Excellence
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flamingo-pink to-coral mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 rounded-full -translate-y-8 translate-x-8 ${
                index === 0 ? 'bg-gradient-to-br from-flamingo-pink/20 to-coral/20' :
                index === 1 ? 'bg-gradient-to-br from-lavender/20 to-mint/20' :
                'bg-gradient-to-br from-sunset-orange/20 to-flamingo-pink/20'
              }`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-bannerton-navy mb-4 font-playfair">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-bannerton-navy mb-2">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
