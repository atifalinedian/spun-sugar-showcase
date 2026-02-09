import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">🍭 SweetSpin</h3>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Automatic cotton candy vending machines — fresh, fun, and unforgettable.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-3">Quick Links</h4>
            <nav className="space-y-2">
              {["How It Works", "Gallery", "Locations", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                  className="block font-body text-sm text-background/60 hover:text-background transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-3">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} SweetSpin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
