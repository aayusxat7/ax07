import { motion } from 'framer-motion';
import { MessageCircle, Facebook, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'Discord',
    icon: MessageCircle,
    link: 'https://discord.gg/cZyxDKFY',
    description: 'Join my community',
    color: 'bg-[#5865F2]',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    link: 'https://www.facebook.com/Aayush457W',
    description: 'Connect with me',
    color: 'bg-[#1877F2]',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind or just want to say hello
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-elevated p-6 flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {social.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated p-8 text-center"
          >
            <h3 className="text-xl font-display mb-4">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>Available for freelance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Remote worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
