import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-bannerton-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 gradient-flamingo mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional PR team in modern office" 
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-bannerton-gray mb-6 leading-relaxed">
              Bannerton PR is a driven, results-focused PR firm. We are a team of driven, results-focused PR professionals that prides themselves on original, impactful communication.
            </p>
            <p className="text-lg text-bannerton-gray mb-6 leading-relaxed">
              We are a full-service PR agency. We manage cost-effective consumer, luxury, financial, public information, and corporate campaigns. We tailor them precisely to the client's market, budget, and communications brief. <strong>We smash it every time.</strong>
            </p>
            <p className="text-lg text-bannerton-gray leading-relaxed">
              We are an experienced powerhouse of storytellers. Cultivating brand awareness and razor-sharp messaging at every turn. We focus on the minor details, pursuing every opportunity for brands ready to make their mark.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden"
        >
          {/* Flamingo decoration */}
          <div className="absolute top-4 right-4 opacity-80">
            <svg width="80" height="80" viewBox="0 0 200 200" className="drop-shadow-lg">
              {/* Flamingo body */}
              <ellipse cx="100" cy="120" rx="25" ry="40" fill="#FF69B4" transform="rotate(-10 100 120)"/>
              {/* Flamingo neck */}
              <path d="M85 100 Q70 80 60 60 Q55 45 65 35" stroke="#FF69B4" strokeWidth="12" fill="none" strokeLinecap="round"/>
              {/* Flamingo head */}
              <circle cx="65" cy="35" r="12" fill="#FF69B4"/>
              {/* Beak */}
              <path d="M55 35 L45 38 L55 41 Z" fill="#333"/>
              {/* Eye */}
              <circle cx="68" cy="32" r="2" fill="white"/>
              <circle cx="69" cy="31" r="1" fill="black"/>
              {/* Wing details */}
              <path d="M85 110 Q110 105 115 125 Q110 140 85 135" fill="#FF1493" opacity="0.8"/>
              {/* Leg */}
              <line x1="100" y1="160" x2="105" y2="190" stroke="#FF69B4" strokeWidth="4"/>
              {/* Foot */}
              <path d="M100 190 L95 195 M105 190 L110 195 M105 190 L100 195" stroke="#FF69B4" strokeWidth="3" strokeLinecap="round"/>
              {/* Water ripples */}
              <ellipse cx="105" cy="195" rx="15" ry="3" fill="#87CEEB" opacity="0.5"/>
              <ellipse cx="105" cy="195" rx="10" ry="2" fill="#87CEEB" opacity="0.7"/>
            </svg>
          </div>
          <p className="text-lg text-bannerton-gray text-center leading-relaxed">
            <strong>Celebrating over 15 years in business.</strong> Bannerton PR is a top-rated PR agency. We offer one-on-one attention and our award-winning team is motivated by the success of our clients. Whether you're just starting off or a global brand, we have industry leading solutions just for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
