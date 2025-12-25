import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Globe, Shield, Gamepad2, FileText, Hand, Eye, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Modern portfolio with interactive elements and smooth animations',
    link: 'https://aayusx.lovable.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    icon: Globe,
    category: 'Web',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: '2',
    title: 'AT7 Site',
    description: 'Personal website with sleek, modern design and clean aesthetics',
    link: 'https://at7.site/',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    icon: Globe,
    category: 'Web',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '3',
    title: 'Gesture Control',
    description: 'Hand gesture recognition for intuitive human-computer interaction',
    link: 'https://aayusxat7.github.io/GESTURE/',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    icon: Hand,
    category: 'AI/ML',
    tech: ['Python', 'OpenCV', 'MediaPipe'],
  },
  {
    id: '4',
    title: 'Face Detector',
    description: 'Real-time face detection using advanced computer vision',
    link: 'https://aayusx.github.io/Face-Detector/',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    icon: Eye,
    category: 'AI/ML',
    tech: ['JavaScript', 'TensorFlow.js', 'ML'],
  },
  {
    id: '5',
    title: 'Aayush Defender',
    description: 'Interactive defense game with engaging gameplay mechanics',
    link: 'https://aayushkin.github.io/-Aayush-Defender/',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop',
    icon: Shield,
    category: 'Game',
    tech: ['JavaScript', 'Canvas', 'HTML5'],
  },
  {
    id: '6',
    title: 'PDF Viewer',
    description: 'Feature-rich PDF viewing with navigation and zoom tools',
    link: 'https://aayushkin.github.io/The-Pdf-viewer/',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=500&fit=crop',
    icon: FileText,
    category: 'Tool',
    tech: ['JavaScript', 'PDF.js', 'React'],
  },
  {
    id: '7',
    title: '3D Game',
    description: 'Immersive 3D gaming experience with stunning visuals',
    link: 'https://aayushkin.github.io/3game/',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0c?w=800&h=500&fit=crop',
    icon: Gamepad2,
    category: 'Game',
    tech: ['Three.js', 'WebGL', 'JavaScript'],
  },
  {
    id: '8',
    title: '2D Game',
    description: 'Classic 2D game with retro aesthetics and fun mechanics',
    link: 'https://aayushkin.github.io/2game/',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop',
    icon: Gamepad2,
    category: 'Game',
    tech: ['JavaScript', 'Canvas', 'CSS'],
  },
  {
    id: '9',
    title: 'Pentesting Tool',
    description: 'Comprehensive penetration testing toolkit for security professionals',
    link: 'https://github.com/aayusxat7/pentesting-tool',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
    icon: Shield,
    category: 'Security',
    tech: ['Python', 'Bash', 'Linux'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const isGithub = project.link.includes('github');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group block"
    >
      <div className="card-premium h-full">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full glass-strong text-foreground uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          
          {/* Icon */}
          <motion.div 
            className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-6 h-6 text-primary-foreground" />
          </motion.div>

          {/* Hover overlay with arrow */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
            >
              <ArrowUpRight className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold mb-2 group-hover:text-gradient transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Link indicator */}
          <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
            {isGithub ? (
              <>
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </>
            ) : (
              <>
                <ExternalLink className="w-4 h-4" />
                <span>Visit Project</span>
              </>
            )}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function ProjectsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative noise">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications, games, AI tools, and security projects 
            I've built with passion and precision
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/aayusxat7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-border hover:border-primary/50 font-semibold transition-all group"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
