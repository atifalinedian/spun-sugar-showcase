import { motion } from "framer-motion";
import { Palette, Cog, Sparkles, IceCreamCone } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Choose Your Flavor & Design",
    description: "Pick from a range of delicious flavors and fun shapes on the touchscreen.",
    color: "bg-cotton-pink/15 text-cotton-pink",
  },
  {
    icon: Cog,
    title: "Watch the Magic Spin",
    description: "Our machine heats and spins sugar into silky threads — mesmerizing to watch!",
    color: "bg-cotton-blue/15 text-cotton-blue",
  },
  {
    icon: Sparkles,
    title: "Custom Shape Crafted",
    description: "Robotic arms sculpt your cotton candy into flowers, hearts, swirls, and more.",
    color: "bg-cotton-lavender/15 text-cotton-lavender",
  },
  {
    icon: IceCreamCone,
    title: "Enjoy Your Treat",
    description: "Grab your freshly made, one-of-a-kind cotton candy and savor every bite.",
    color: "bg-cotton-mint/15 text-cotton-mint",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-secondary">
            Simple & Delightful
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${step.color}`}>
                <step.icon size={28} />
              </div>
              <span className="font-display text-sm font-bold text-muted-foreground mb-1">
                Step {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
