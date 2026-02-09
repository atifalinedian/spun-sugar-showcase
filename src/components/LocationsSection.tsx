import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  { venue: "Westfield Mall", address: "123 Shopping Blvd, Level 2", hours: "10 AM – 9 PM", type: "Mall" },
  { venue: "FunLand Amusement Park", address: "456 Adventure Way, Gate B", hours: "11 AM – 10 PM", type: "Theme Park" },
  { venue: "City Convention Center", address: "789 Expo Dr, Main Hall", hours: "9 AM – 6 PM", type: "Event Center" },
  { venue: "Sunshine Boardwalk", address: "321 Ocean Ave, Pier 5", hours: "12 PM – 8 PM", type: "Boardwalk" },
  { venue: "Grand Central Station", address: "100 Transit Sq, Concourse", hours: "7 AM – 11 PM", type: "Transit Hub" },
  { venue: "Riverside Family Zoo", address: "55 Wildlife Ln, Near Gift Shop", hours: "10 AM – 5 PM", type: "Zoo" },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-secondary">
            Near You
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Find a Machine
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.venue}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                    {loc.type}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {loc.venue}
                  </h3>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-1.5">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} className="shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
