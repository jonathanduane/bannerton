import { motion } from "framer-motion";
import { Building2, Plane, Heart, Zap, ShoppingBag, Home, Utensils, GraduationCap } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Banking, investment, fintech, and insurance communications that build trust and drive growth.",
      expertise: ["Corporate Communications", "Crisis Management", "Regulatory Compliance", "Digital Banking PR"]
    },
    {
      icon: Plane,
      title: "Tourism & Hospitality",
      description: "Destination marketing and hospitality PR that creates memorable experiences and drives visitation.",
      expertise: ["Destination Branding", "Event Promotion", "Travel Media Relations", "Crisis Communication"]
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Healthcare communications that educate, inform, and build confidence in medical services.",
      expertise: ["Medical PR", "Health Campaigns", "Patient Education", "Healthcare Innovation"]
    },
    {
      icon: Zap,
      title: "Technology & Innovation",
      description: "Tech PR that translates complex innovations into compelling stories for diverse audiences.",
      expertise: ["Product Launches", "Thought Leadership", "B2B Tech PR", "Startup Communications"]
    },
    {
      icon: ShoppingBag,
      title: "Retail & Consumer",
      description: "Brand communications that connect with consumers and drive purchasing decisions.",
      expertise: ["Brand Launches", "Consumer Campaigns", "Influencer Marketing", "Retail PR"]
    },
    {
      icon: Home,
      title: "Real Estate & Development",
      description: "Property and development communications that showcase vision and drive investment.",
      expertise: ["Project Launches", "Investor Relations", "Community Engagement", "Development PR"]
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Culinary communications that create buzz and build brand loyalty in competitive markets.",
      expertise: ["Restaurant Openings", "Food & Beverage Launches", "Chef Profiles", "Culinary Events"]
    },
    {
      icon: GraduationCap,
      title: "Education & Non-Profit",
      description: "Mission-driven communications that inspire action and build community support.",
      expertise: ["Educational Campaigns", "Fundraising Support", "Community Outreach", "Impact Storytelling"]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-gradient-to-br from-lavender/10 to-mint/10 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-sunset-orange/10 to-coral/10 rounded-full"></div>
      


      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            Our deep industry expertise spans across diverse sectors, delivering specialized PR strategies that drive meaningful results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-bannerton-light p-6 rounded-2xl hover:shadow-lg transition-all duration-300 relative overflow-hidden hover:transform hover:scale-105"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 rounded-full -translate-y-8 translate-x-8 ${
                index % 4 === 0 ? 'bg-gradient-to-br from-flamingo-pink/15 to-coral/15' :
                index % 4 === 1 ? 'bg-gradient-to-br from-lavender/15 to-mint/15' :
                index % 4 === 2 ? 'bg-gradient-to-br from-sunset-orange/15 to-flamingo-pink/15' :
                'bg-gradient-to-br from-mint/15 to-coral/15'
              }`}></div>

              <div className="relative z-10">
                <div className="text-bannerton-navy mb-4">
                  <industry.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-poppins text-xl font-semibold text-bannerton-navy mb-3">
                  {industry.title}
                </h3>
                
                <p className="text-bannerton-gray mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-bannerton-navy text-sm">Key Expertise:</h4>
                  <ul className="text-sm text-bannerton-gray space-y-1">
                    {industry.expertise.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-flamingo-pink rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-bannerton-navy to-flamingo-pink p-8 rounded-2xl text-white">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              We work with businesses across all sectors. Our adaptable approach means we can craft the perfect PR strategy for your unique industry needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-bannerton-navy px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Industry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}