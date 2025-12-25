import { motion } from 'framer-motion';
import { ChevronDown, Github, Shield, Code } from 'lucide-react';
import profileImage from '@/assets/aayush-profile.jpg';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Aayush</span>
              <br />
              <span className="text-gradient-secondary">Bhandari</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Web Developer & Penetration Tester crafting secure, beautiful digital experiences with cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg glass neon-border font-display font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="w-5 h-5 text-primary" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Pentesting</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center z-10"
          >
            <div className="relative">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl scale-150" />
              <div className="absolute inset-0 rounded-full neon-border animate-pulse" style={{ transform: 'scale(1.1)' }} />
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border p-1">
                <img
                  src={profileImage}
                  alt="Aayush Bhandari"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass neon-border"
              >
                <Code className="w-6 h-6 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass"
                style={{ boxShadow: '0 0 20px hsl(280 100% 60% / 0.5)' }}
              >
                <Shield className="w-6 h-6 text-secondary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-lg glass"
                style={{ boxShadow: '0 0 20px hsl(320 100% 60% / 0.5)' }}
              >
                <Github className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          >
            <span className="text-sm font-display">Scroll Down</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
