import { motion } from "framer-motion";

const designs = [
  { name: "Rose Bloom", emoji: "🌹", gradient: "from-cotton-pink/30 to-cotton-peach/20" },
  { name: "Ocean Swirl", emoji: "🌊", gradient: "from-cotton-blue/30 to-cotton-mint/20" },
  { name: "Love Heart", emoji: "💖", gradient: "from-cotton-pink/25 to-cotton-lavender/20" },
  { name: "Star Burst", emoji: "⭐", gradient: "from-cotton-peach/30 to-cotton-pink/15" },
  { name: "Butterfly", emoji: "🦋", gradient: "from-cotton-lavender/30 to-cotton-blue/20" },
  { name: "Unicorn Swirl", emoji: "🦄", gradient: "from-cotton-mint/25 to-cotton-lavender/20" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Our Creations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Art You Can Eat
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Every cotton candy is a miniature masterpiece — crafted fresh in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {designs.map((design, i) => (
            <motion.div
              key={design.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`bg-gradient-to-br ${design.gradient} rounded-2xl p-8 flex flex-col items-center justify-center aspect-square cursor-pointer border border-border/50 hover:shadow-xl transition-shadow`}
            >
              <span className="text-5xl md:text-6xl mb-3">{design.emoji}</span>
              <span className="font-display text-base font-bold text-foreground">
                {design.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
