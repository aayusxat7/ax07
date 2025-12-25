import { motion, useInView } from 'framer-motion';
import { Code2, Shield, Gamepad2, Globe, Zap, Database, Terminal, Lock } from 'lucide-react';
import { useRef } from 'react';

const skills = [
  { 
    name: 'Web Development', 
    icon: Globe, 
    description: 'Building responsive, modern web applications',
    color: 'from-blue-500 to-cyan-500',
  },
  { 
    name: 'Penetration Testing', 
    icon: Shield, 
    description: 'Identifying security vulnerabilities',
    color: 'from-red-500 to-orange-500',
  },
  { 
    name: 'Game Development', 
    icon: Gamepad2, 
    description: 'Creating engaging interactive experiences',
    color: 'from-purple-500 to-pink-500',
  },
  { 
    name: 'Full Stack', 
    icon: Code2, 
    description: 'End-to-end development expertise',
    color: 'from-green-500 to-emerald-500',
  },
];

const techStack = [
  { name: 'React', icon: Zap },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Python', icon: Terminal },
  { name: 'Security', icon: Lock },
  { name: 'Database', icon: Database },
  { name: 'Node.js', icon: Globe },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative noise">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
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
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer focused on creating secure, beautiful digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-premium p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold">My Story</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-medium">Aayush Bhandari</span>, a web developer 
                and penetration tester dedicated to creating secure and innovative digital solutions.
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

            {/* Tech stack */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm"
                  >
                    <tech.icon className="w-4 h-4 text-primary" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-premium p-6 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
