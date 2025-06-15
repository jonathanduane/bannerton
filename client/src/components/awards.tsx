import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    {
      emoji: "🏆",
      title: "Award Winning",
      description: "Awards are great to receive and to be recognised as a leader in the PR field but it's the campaign results and happy clients that we get our kicks from. We thrive on disrupting the status quo with thoroughly researched stats and unique campaigns. Bannerton PR symbolizes the difference between 'good' and 'exceptional'."
    },
    {
      emoji: "📈",
      title: "Results Driven",
      description: "Our kaleidoscope of skills helps us create stories that leave tracks but in a world that revolves around 1s and 0s, everything comes down to the numbers. Everything we issue contains relevant messaging which drives a quantifiable ROI. We show our clients PR Value > Advertising every single month."
    },
    {
      emoji: "🎯",
      title: "Experts in the PR field",
      description: "We recognise the importance of using a mix of national and regional media and adapt our messaging to suit. Originally country women moving to the big city, we see huge value in nurturing our relationship with both sides of the media resulting in both major regional reach and understanding too."
    }
  ];

  return (
    <section id="awards" className="py-20 bg-bannerton-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
            What Sets Us Apart
          </h2>
          <div className="w-24 h-1 gradient-flamingo mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-6xl mb-6">{award.emoji}</div>
              <h3 className="font-poppins text-xl font-semibold text-white mb-4">
                {award.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
