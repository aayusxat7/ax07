import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Shield, Gamepad2, FileText, Hand, Eye } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Modern portfolio with interactive elements built with React',
    link: 'https://aayusx.lovable.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    icon: Globe,
    category: 'Web',
  },
  {
    id: '2',
    title: 'AT7 Site',
    description: 'Personal website with sleek, modern design',
    link: 'https://at7.site/',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    icon: Globe,
    category: 'Web',
  },
  {
    id: '3',
    title: 'Gesture Control',
    description: 'Hand gesture recognition for intuitive interaction',
    link: 'https://aayusxat7.github.io/GESTURE/',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    icon: Hand,
    category: 'AI/ML',
  },
  {
    id: '4',
    title: 'Face Detector',
    description: 'Real-time face detection using computer vision',
    link: 'https://aayusx.github.io/Face-Detector/',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    icon: Eye,
    category: 'AI/ML',
  },
  {
    id: '5',
    title: 'Aayush Defender',
    description: 'Interactive defense game with engaging gameplay',
    link: 'https://aayushkin.github.io/-Aayush-Defender/',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
    icon: Shield,
    category: 'Game',
  },
  {
    id: '6',
    title: 'PDF Viewer',
    description: 'Feature-rich PDF viewing with navigation tools',
    link: 'https://aayushkin.github.io/The-Pdf-viewer/',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop',
    icon: FileText,
    category: 'Tool',
  },
  {
    id: '7',
    title: '3D Game',
    description: 'Immersive 3D gaming experience',
    link: 'https://aayushkin.github.io/3game/',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0c?w=600&h=400&fit=crop',
    icon: Gamepad2,
    category: 'Game',
  },
  {
    id: '8',
    title: '2D Game',
    description: 'Classic 2D game with retro aesthetics',
    link: 'https://aayushkin.github.io/2game/',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
    icon: Gamepad2,
    category: 'Game',
  },
  {
    id: '9',
    title: 'Pentesting Tool',
    description: 'Comprehensive penetration testing toolkit',
    link: 'https://github.com/aayusxat7/pentesting-tool',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    icon: Shield,
    category: 'Security',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const isGithub = project.link.includes('github');
  
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group block"
    >
      <div className="card-elevated overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/90 backdrop-blur-sm text-foreground">
              {project.category}
            </span>
          </div>
          
          {/* Icon */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>
          
          {/* Link indicator */}
          <div className="flex items-center gap-2 text-primary text-sm font-medium">
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
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications, games, AI tools, and security projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/aayusxat7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
