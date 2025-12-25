import { motion } from 'framer-motion';
import { Heart, Github, MessageCircle, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="text-2xl font-display font-bold mb-2 inline-block">
              <span className="text-gradient">Aayush Bhandari</span>
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> © {currentYear}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/aayusxat7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/cZyxDKFY"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/Aayush457W"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 text-sm"
          >
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-display">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-display">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-display">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
