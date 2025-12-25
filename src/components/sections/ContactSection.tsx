import { motion } from 'framer-motion';
import { MessageCircle, Facebook, Mail, MapPin, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'Discord',
    icon: MessageCircle,
    link: 'https://discord.gg/cZyxDKFY',
    color: 'from-[#5865F2] to-[#7289DA]',
    description: 'Join my Discord community',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    link: 'https://www.facebook.com/Aayush457W',
    color: 'from-[#1877F2] to-[#42A5F5]',
    description: 'Connect on Facebook',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind or just want to say hi
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Links */}
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass rounded-2xl p-8 glass-hover overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {social.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-display text-sm font-medium">
                      Connect <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              </motion.a>
            ))}
          </div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 glass rounded-2xl p-8 neon-border"
          >
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Let's Build Something <span className="text-gradient">Amazing</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>Available for freelance</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <span>Remote worldwide</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
