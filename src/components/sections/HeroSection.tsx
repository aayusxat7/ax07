import { motion } from 'framer-motion';
import { ArrowDown, Code2, Shield } from 'lucide-react';
import profileImage from '@/assets/aayush-profile.jpg';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-narrow relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Aayush Bhandari"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/10" />
            <div className="absolute -z-20 -bottom-8 -right-8 w-full h-full rounded-3xl bg-accent/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left flex-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
              Aayush <span className="text-gradient">Bhandari</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Web Developer & Penetration Tester crafting secure, elegant digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Pentesting</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors font-medium"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
