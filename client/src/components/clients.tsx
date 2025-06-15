import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Actual clients from Bannerton presentation
  const clients = [
    // Healthcare / Biotech
    "Bluebird Care",
    "HaloCare", 
    "Celligenics",
    "National Orthopaedic Hospital Cappagh",
    "Hidden Hearing",
    "Athena Dermatology",
    "The Skin Diary",
    "Anglo Arab",
    "LLR-G5",
    "Seapoint Clinic",
    "Meaghers Pharmacy",
    "Beechfield Healthcare",
    "Mobility Genie",
    "Parkinson's Association of Ireland",
    "Motivation Weight Management",
    
    // Food Sector
    "Compass Ireland",
    "J.J. Darboven",
    "Primeline Group",
    "GITEX Global",
    "Glanmore Foods",
    "Largo Foods",
    "Quality Assured Origin Ireland",
    "Bord Bia",
    
    // Property / Commercial / Professional Services
    "Forus Training",
    "ERF Employment & Recruitment Federation",
    "BNP Paribas Real Estate",
    "Sanderson Recruitment",
    "Plus Recruitment",
    "Uptown Dubai",
    "The First Group",
    "RE/MAX Ireland",
    "Carton House",
    "Eden One",
    
    // Corporate / Financial
    "Contracting Plus Financial",
    "Creative Media Authority Abu Dhabi",
    "Primeline Group",
    "Mortgage Navigators",
    "Bolt",
    "S&S",
    "Pulse Security Management",
    "BNP Paribas Real Estate",
    "Ask Paul",
    "Abu Dhabi Media Office"
  ];

  const clientsPerSlide = 6;
  const totalSlides = Math.ceil(clients.length / clientsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentClients = () => {
    const start = currentSlide * clientsPerSlide;
    return clients.slice(start, start + clientsPerSlide);
  };

  return (
    <section className="py-20 bg-bannerton-light relative overflow-hidden">
      {/* Background gradient splash */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-mint/10 to-lavender/10 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-coral/10 to-flamingo-pink/10 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            Clients of Bannerton
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            We've had the privilege of working with some of the most innovative and successful companies across the Middle East
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {getCurrentClients().map((client, index) => (
                <motion.div
                  key={`${currentSlide}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden"
                >
                  {/* Clean company name display */}
                  <div className="h-20 flex items-center justify-center">
                    <h3 className="font-poppins text-xl font-bold text-bannerton-navy text-center leading-tight">
                      {client}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-flamingo-pink scale-125' 
                    : 'bg-bannerton-gray/30 hover:bg-bannerton-gray/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-bannerton-gray mb-6">
            Ready to join our portfolio of successful brands?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-flamingo-pink to-coral text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}