import { motion } from "framer-motion";
import { Megaphone, Shield, Calendar, Users, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "Public Relations",
      description: "\"If I was down to my last dollar, I would spend it on PR\" – Bill Gates. Brand stories influence the way people think what products or services they buy. Both our dedicated corporate and consumer division create innovative and intelligent content that builds brand profile and visibility."
    },
    {
      icon: Shield,
      title: "Reputation Management",
      description: "From global companies to start-ups, we help organisations become stronger and more sustainable by managing their reputation as an asset. Through honest and creative communication, we can completely reshape a company's image in the public eye."
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Bannerton takes the stress of launching a new product or celebrating a significant brand milestone by providing creative and unique Irish events everyone wants an invite to. We harness the power of influencers, talent, content, media, publicity and ink to proactively develop mind blowing events for our clientele."
    },
    {
      icon: Users,
      title: "Social Media Management & Content Creation",
      description: "Social media is the 24/7 representation of your brand and one of the top ways to communicate with your target consumer. We create and implement social media calendars with key messages to continuously engage and excite your followers."
    },
    {
      icon: Star,
      title: "Influencer Management",
      description: "Influencer activity is a useful tool to drive online connections and strengthen PR campaigns. We connect our clients with genuine people who influence their target audience by creating valuable and engaging content."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            Full-service PR solutions tailored to your market, budget, and communications brief
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bannerton-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-bannerton-navy mb-4 relative">
                <div className={`absolute -inset-2 rounded-full ${
                  index === 0 ? 'bg-gradient-to-r from-flamingo-pink/15 to-coral/15' :
                  index === 1 ? 'bg-gradient-to-r from-lavender/15 to-mint/15' :
                  index === 2 ? 'bg-gradient-to-r from-sunset-orange/15 to-flamingo-pink/15' :
                  index === 3 ? 'bg-gradient-to-r from-mint/15 to-coral/15' :
                  'bg-gradient-to-r from-coral/15 to-lavender/15'
                }`}></div>
                <service.icon className="w-8 h-8 relative z-10" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-bannerton-navy mb-4">
                {service.title}
              </h3>
              <p className="text-bannerton-gray leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}