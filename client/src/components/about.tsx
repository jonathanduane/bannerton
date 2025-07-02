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
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform perspective-1000 rotateY-2 hover:rotateY-0 transition-all duration-500">
              {/* Enhanced 3D Blue styling backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-bannerton-navy/40 to-blue-900/30 rounded-2xl transform translate-x-4 translate-y-4 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-bannerton-navy/30 to-blue-800/20 rounded-2xl transform translate-x-2 translate-y-2 blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-bannerton-navy/20 to-blue-700/15 rounded-2xl transform translate-x-1 translate-y-1 blur-sm"></div>
              
              {/* Sharon's image */}
              <img 
                src="/sharon.jpeg"
                alt="Sharon - Bannerton PR Leadership" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-3 border-white/60"
                onError={(e) => {
                  // Fallback to professional businesswoman if Sharon's image doesn't load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";
                }}
              />
              
              {/* Enhanced blue glow and shading effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-bannerton-navy/30 via-transparent to-blue-400/15 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-bannerton-navy/20 rounded-2xl"></div>
              
              {/* Cool blue highlight on edges */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-t-2xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bannerton-navy/50 to-transparent rounded-b-2xl"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent rounded-l-2xl"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-bannerton-navy/50 to-transparent rounded-r-2xl"></div>
            </div>
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

          <p className="text-lg text-bannerton-gray text-center leading-relaxed">
            <strong>Celebrating over 20 years in business.</strong> Bannerton PR is a top-rated PR agency. We offer one-on-one attention and our award-winning team is motivated by the success of our clients. Whether you're just starting off or a global brand, we have industry leading solutions just for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
