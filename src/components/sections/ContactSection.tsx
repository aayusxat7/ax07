import { motion, useInView } from 'framer-motion';
import { MessageCircle, Facebook, Mail, MapPin, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { useRef } from 'react';

const socialLinks = [
  {
    name: 'Discord',
    icon: MessageCircle,
    link: 'https://discord.gg/cZyxDKFY',
    description: 'Join my community',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    link: 'https://www.facebook.com/Aayush457W',
    description: 'Connect with me',
    gradient: 'from-blue-500 to-blue-700',
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative noise">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4"
          >
            Contact
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind or just want to say hello
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-premium p-8 md:p-12 text-center mb-8 relative overflow-hidden"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x opacity-10" />
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-2xl"
              >
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Let's Build Something <span className="text-gradient">Amazing</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>Available for freelance</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span>Remote worldwide</span>
                </div>
              </div>

              <motion.a
                href="mailto:contact@aayusx.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                <Send className="w-5 h-5" />
                <span>Say Hello</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-premium p-6 flex items-center gap-4 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg group-hover:text-gradient transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {social.description}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
