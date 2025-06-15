import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "Award", label: "Winning Agency" },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative flamingo */}
      <div className="absolute bottom-4 left-4 opacity-60">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-bannerton-navy to-flamingo-pink bg-clip-text text-transparent mb-2 font-playfair">
                {stat.value}
              </div>
              <div className="text-lg text-bannerton-gray">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
