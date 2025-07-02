import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const services = [
    "Public Relations",
    "Reputation Management",
    "Events", 
    "Social Media Management & Content Creation"
  ];

  return (
    <footer className="bg-bannerton-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <img 
              src="https://bannerton.ae/wp-content/uploads/2025/02/cropped-logo2x-300x31.png" 
              alt="Bannerton PR Logo" 
              className="h-8 mb-4 filter brightness-0 invert"
            />
            <p className="text-blue-100 mb-4 max-w-md">
              Award-winning PR agency delivering exceptional results for brands ready to make their mark. Over 20 years experience in Dubai and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/bannerton/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-flamingo-pink transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-100">
              <li>+971 54 343 7673</li>
              <li>sharon@bannerton.ae</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Bannerton PR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
