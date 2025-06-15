import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

export default function LinkedInFeed() {
  return (
    <section id="linkedin" className="py-20 bg-gradient-to-br from-bannerton-light via-white to-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            Stay connected with our latest insights, campaigns, and industry updates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden"
        >
          {/* Decorative gradient elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-flamingo-pink/20 to-coral/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mint/20 to-lavender/20 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-bannerton-navy to-flamingo-pink p-4 rounded-full">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="font-poppins text-2xl font-bold text-bannerton-navy mb-4">
              Connect with Bannerton PR on LinkedIn
            </h3>
            
            <p className="text-bannerton-gray mb-8 max-w-2xl mx-auto">
              Get the latest updates on our campaigns, industry insights, and behind-the-scenes glimpses of our award-winning work. Join our professional network for exclusive content and networking opportunities.
            </p>
            
            {/* LinkedIn Embed Area */}
            <div className="bg-bannerton-light rounded-xl p-8 mb-8">
              <div className="text-center">
                <p className="text-bannerton-gray mb-4">
                  LinkedIn posts and updates will display here when integrated with the LinkedIn API
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-50">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-lg">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/bannerton/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-bannerton-navy to-bannerton-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Follow Us on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              
              <a
                href="https://www.linkedin.com/company/bannerton/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-bannerton-navy text-bannerton-navy px-8 py-4 rounded-full font-semibold hover:bg-bannerton-navy hover:text-white transition-all duration-300"
              >
                View Company Page
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-bannerton-gray">
            For a fully integrated LinkedIn feed, we can implement the LinkedIn API to display your latest posts, company updates, and engagement metrics directly on your website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}