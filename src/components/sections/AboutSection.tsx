import { motion } from 'framer-motion';
import { Code, Shield, Gamepad2, Globe } from 'lucide-react';
import profileImage from '@/assets/aayush-profile.jpg';

const skills = [
  { name: 'Web Development', icon: Globe, color: 'primary' },
  { name: 'Penetration Testing', icon: Shield, color: 'secondary' },
  { name: 'Game Development', icon: Gamepad2, color: 'accent' },
  { name: 'Full Stack', icon: Code, color: 'primary' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with expertise in building secure web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-3xl" />
              
              {/* Image container */}
              <div className="relative glass rounded-2xl p-4 neon-border">
                <img
                  src={profileImage}
                  alt="Aayush Bhandari"
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-4 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
                
                {/* Name badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-display font-bold text-gradient mb-2">
                    Aayush Bhandari
                  </h3>
                  <p className="text-muted-foreground">
                    Developer & Security Researcher
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border border-secondary/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 neon-border">
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Aayush Bhandari, a passionate web developer and penetration tester 
                dedicated to creating secure and innovative digital solutions. With a 
                strong foundation in both offensive security and modern web technologies, 
                I bridge the gap between beautiful user experiences and robust security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My hobbies include web development, where I love experimenting with new 
                frameworks and technologies, and penetration testing, where I help 
                organizations identify and fix security vulnerabilities before malicious 
                actors can exploit them.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl p-4 glass-hover group cursor-pointer"
                >
                  <skill.icon className={`w-8 h-8 mb-3 text-${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="font-display text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
