import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cotton-pink/20 via-cotton-lavender/15 to-cotton-blue/20" />
      
      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cotton-pink/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cotton-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cotton-lavender/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
            The Future of Cotton Candy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-tight mb-6"
        >
          Fresh Cotton Candy,{" "}
          <span className="text-primary">Crafted by CloudBot</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Watch CloudBot's smart vending machines craft beautiful, custom cotton candy
          designs right before your eyes. Choose your flavor, pick a shape, and
          enjoy the sweetest experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="text-base px-8 rounded-full shadow-lg shadow-primary/25">
            <a href="#locations">Find a Machine</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 rounded-full border-2">
            <a href="#contact">Request a Machine for Your Venue</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
