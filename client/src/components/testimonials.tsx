import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "Kilkenny Group",
      text: "Bannerton PR are a really impressive strategic partner of Kilkenny Design, and very simply, know how to get the job done. Bannerton have a very strong reputation in the Irish marketplace and have a hugely influential network, driven by their open and honest way of working, and the focus they put on building strong relationships with their clients. Bannerton PR are strong on Strategy development, and in my experience, really get under the skin of a brand's DNA, which has given huge confidence to our brand Voice. They are really strong on new Ideas, yet more importantly, they are strong on delivering on their ideas.",
      author: "Evelyn Moynihan",
      title: "Brand & Commercial Director – Kilkenny Group",
      highlight: "Kilkenny Design have worked with Bannerton PR on the delivery of the very successful Green Friday initiative in 2019, and they have been instrumental in the launch and delivery of the more recent Champion Green movement."
    },
    {
      company: "Mortgage Navigators",
      text: "Sharon Bannerton has supported us in building strong media relationships and partnerships that have opened doors to exciting collaborations and opportunities we wouldn't have thought possible. Their networking skills are truly impressive, and they have a knack for connecting us with the right influencers and industry leaders. We have full confidence in their abilities, and we're excited about the continued growth and opportunities that lie ahead in our partnership.",
      author: "Margaret Barrett",
      title: "Managing Director",
      highlight: ""
    },
    {
      company: "The Employment & Recruitment Federation",
      text: "The Employment & Recruitment Federation have been working with Bannerton and Sharon Bannerton since 2018. Sharon manages all our public relations and media releases. From the onset of partnering with Bannerton we saw an immediate increase in market presence and increased opportunities to be heard as the voice of the recruitment sector in Ireland. Sharon took the time to understand who we are as a sector and profession and fully engages with us on every campaign and narrative we release. She takes a personal interest in her clients and I wholeheartedly recommend Bannerton to everyone we know.",
      author: "Employment & Recruitment Federation",
      title: "Client Since 2018",
      highlight: "From the onset of partnering with Bannerton we saw an immediate increase in market presence and increased opportunities to be heard as the voice of the recruitment sector in Ireland."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-bannerton-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-bannerton-gray max-w-3xl mx-auto">
            Real results from real clients who trust Bannerton PR to deliver exceptional campaigns
          </p>
        </motion.div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bannerton-light rounded-2xl p-8 md:p-12 relative"
            >
              <div className="absolute top-6 left-6 text-bannerton-navy opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="font-poppins text-2xl font-bold text-bannerton-navy mb-2">
                    {testimonial.company}
                  </h3>
                </div>
                
                <blockquote className="text-bannerton-gray text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>
                
                {testimonial.highlight && (
                  <div className="bg-white p-6 rounded-xl mb-6 border-l-4 border-bannerton-navy">
                    <p className="text-bannerton-gray italic">
                      "{testimonial.highlight}"
                    </p>
                  </div>
                )}
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-bannerton-navy rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-bannerton-navy">
                      {testimonial.author}
                    </div>
                    <div className="text-bannerton-gray">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-bannerton-navy p-8 rounded-2xl">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              From Green Friday initiatives to sector-leading campaigns, we deliver results that matter. Let's create your success story together.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-bannerton-navy px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Campaign
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}