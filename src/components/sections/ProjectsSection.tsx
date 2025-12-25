import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Shield, Gamepad2, FileText, Hand, Eye } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Modern portfolio with 3D animations and interactive elements built with React and Three.js',
    link: 'https://aayusx.lovable.app/',
    icon: Globe,
    category: 'Web',
    gradient: 'from-primary to-secondary',
  },
  {
    id: '2',
    title: 'AT7 Site',
    description: 'Personal website showcasing projects and services with a sleek, modern design',
    link: 'https://at7.site/',
    icon: Globe,
    category: 'Web',
    gradient: 'from-secondary to-accent',
  },
  {
    id: '3',
    title: 'Gesture Control',
    description: 'Hand gesture recognition system for intuitive computer interaction and control',
    link: 'https://aayusxat7.github.io/GESTURE/',
    icon: Hand,
    category: 'AI/ML',
    gradient: 'from-accent to-primary',
  },
  {
    id: '4',
    title: 'Face Detector',
    description: 'Real-time face detection application using advanced computer vision algorithms',
    link: 'https://aayusx.github.io/Face-Detector/',
    icon: Eye,
    category: 'AI/ML',
    gradient: 'from-primary to-accent',
  },
  {
    id: '5',
    title: 'Aayush Defender',
    description: 'Interactive defense game with engaging gameplay and stunning visuals',
    link: 'https://aayushkin.github.io/-Aayush-Defender/',
    icon: Shield,
    category: 'Game',
    gradient: 'from-secondary to-primary',
  },
  {
    id: '6',
    title: 'PDF Viewer',
    description: 'Feature-rich PDF viewing application with annotation and navigation tools',
    link: 'https://aayushkin.github.io/The-Pdf-viewer/',
    icon: FileText,
    category: 'Tool',
    gradient: 'from-accent to-secondary',
  },
  {
    id: '7',
    title: '3D Game',
    description: 'Immersive 3D gaming experience with advanced graphics and physics',
    link: 'https://aayushkin.github.io/3game/',
    icon: Gamepad2,
    category: 'Game',
    gradient: 'from-primary to-secondary',
  },
  {
    id: '8',
    title: '2D Game',
    description: 'Classic 2D game with retro aesthetics and addictive gameplay mechanics',
    link: 'https://aayushkin.github.io/2game/',
    icon: Gamepad2,
    category: 'Game',
    gradient: 'from-secondary to-accent',
  },
  {
    id: '9',
    title: 'Pentesting Tool',
    description: 'Comprehensive penetration testing toolkit for security professionals and researchers',
    link: 'https://github.com/aayusxat7/pentesting-tool',
    icon: Shield,
    category: 'Security',
    gradient: 'from-accent to-primary',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative glass rounded-2xl p-6 h-full glass-hover overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-display font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            {project.category}
          </span>
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-background" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-display text-sm font-medium hover:gap-3 transition-all duration-300"
        >
          {project.link.includes('github') ? (
            <>
              <Github className="w-4 h-4" />
              View on GitHub
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              Visit Project
            </>
          )}
        </a>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className={`absolute top-0 right-0 w-28 h-28 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`} />
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications, games, AI tools, and security projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aayusxat7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass neon-border font-display font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
