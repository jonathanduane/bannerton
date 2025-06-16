import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop video with rounded corners */}
        <div className="hidden md:block absolute inset-8 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://player.vimeo.com/video/1039504919?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-bannerton-navy/50 to-black/60"></div>
        </div>
        
        {/* Mobile video - full screen */}
        <div className="md:hidden absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1039504919?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-bannerton-navy/70 to-black/70"></div>
        </div>
        
        <div className="absolute inset-0 bg-bannerton-navy -z-10"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
        >
          Driven. Results-Focused. 
          <span className="text-blue-300"> Exceptional.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
        >
          Award-winning PR agency delivering impactful communication strategies that drive quantifiable ROI for brands ready to make their mark.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-bannerton-navy px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-bannerton-navy transition-all duration-300"
          >
            Stay Informed
          </button>
        </motion.div>
      </div>
    </section>
  );
}
