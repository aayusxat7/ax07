import { motion } from 'framer-motion';
import { Code2, Shield, Gamepad2, Globe } from 'lucide-react';

const skills = [
  { 
    name: 'Web Development', 
    icon: Globe, 
    description: 'Building responsive, modern web applications with React & TypeScript'
  },
  { 
    name: 'Penetration Testing', 
    icon: Shield, 
    description: 'Identifying security vulnerabilities and strengthening defenses'
  },
  { 
    name: 'Game Development', 
    icon: Gamepad2, 
    description: 'Creating engaging interactive gaming experiences'
  },
  { 
    name: 'Full Stack', 
    icon: Code2, 
    description: 'End-to-end development from database to frontend'
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer focused on creating secure, beautiful digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="card-elevated p-8"
          >
            <h3 className="text-xl font-display mb-4 text-primary">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Aayush Bhandari, a web developer and penetration tester dedicated 
                to creating secure and innovative digital solutions.
              </p>
              <p>
                With a strong foundation in both offensive security and modern web 
                technologies, I bridge the gap between beautiful user experiences 
                and robust security practices.
              </p>
              <p>
                My hobbies include exploring new web frameworks, building games, and 
                helping organizations strengthen their security posture through 
                professional penetration testing.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-elevated p-6 group cursor-default"
              >
                <skill.icon className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-medium mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
