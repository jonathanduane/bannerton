import { motion } from "framer-motion";
import { MessageSquare, FileText, Rocket, BarChart3 } from "lucide-react";

export default function Process() {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Key Messaging Workshop",
      description: "One to one workshop with PR agent and client to identify the brand's USP and agree on campaign messaging.",
      step: "01"
    },
    {
      icon: FileText,
      title: "PR Plan & Press Materials",
      description: "Here's where we work our magic, using the information we have identified we will create a dynamic and engaging PR plan with all the relevant press materials including photo calls, press releases and personalized pitches.",
      step: "02"
    },
    {
      icon: Rocket,
      title: "Campaign Take Off",
      description: "When everything is approved by the client, we harness all of our national and regional contacts to create clear and interested content for your ideal consumer/market. We draft a target media list for each campaign to make sure every piece secured is relevant to your brand.",
      step: "03"
    },
    {
      icon: BarChart3,
      title: "Reporting",
      description: "We take pride in showing our clients campaign results. Our media evaluations show the PR value vs advertising value plus how many people the campaign has reached. The ROI shows we are big enough to deliver outstanding results and small enough to really care about the client.",
      step: "04"
    }
  ];

  return (
    <section id="process" className="py-20 bg-bannerton-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            The Bannerton Process
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            Our proven four-step approach ensures every campaign delivers exceptional results and measurable ROI
          </p>
        </motion.div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-coral/20 to-flamingo-pink/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="flex items-center mb-6 relative z-10">
                  <div className="bg-gradient-to-r from-bannerton-navy to-flamingo-pink text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div className="text-bannerton-navy">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="font-poppins text-2xl font-semibold text-bannerton-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-bannerton-gray leading-relaxed text-lg relative z-10">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-bannerton-navy rounded-full flex items-center justify-center">
                  <step.icon className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-bannerton-navy mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-bannerton-gray mb-6">
              Our systematic approach ensures your brand gets the attention it deserves with measurable results you can trust.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-bannerton-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-bannerton-blue transition-all duration-300 transform hover:scale-105"
            >
              Start Your Campaign Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}