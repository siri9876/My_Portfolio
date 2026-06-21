import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Briefcase,
  ExternalLink,
  Github,
  Sparkles,
  Shield,
  ShoppingCart,
  Search,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  gradient: string;
  icon: typeof Briefcase;
  github?: string;
  live?: string;
}

const projects: Project[] = [
   {
  id: 1,
  title: 'E-Commerce Website',
  description: 'Full-featured e-commerce platform with comprehensive shopping experience',
  features: [
    'Product Listing',
    'Shopping Cart',
    'Checkout Flow',
    'Responsive UI',
    'Dynamic State Management',
  ],
  techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  gradient: 'from-orange-600 via-red-600 to-rose-700',
  icon: ShoppingCart,
  github: 'https://github.com/siri9876/Ecommerce-Website',
  live: 'https://ecommerce-website-ten-steel.vercel.app/',
},
  
  {
  id: 2,
  title: 'Resume Parser & AI Job Matching',
  description: 'Intelligent resume parsing system with AI-powered job recommendation engine',
  features: [
    'AI Resume Parsing',
    'Candidate Search',
    'Skill Matching',
    'Job Recommendation Engine',
    'MongoDB Integration',
  ],
  techStack: ['Java', 'Spring Boot', 'MongoDB', 'AI/ML', 'React'],
  gradient: 'from-primary-600 via-violet-600 to-primary-700',
  icon: Search,
  github: 'https://github.com/siri9876/resume--parser',
  live: 'https://resume-parser-chi.vercel.app/',
},
  {
  id: 3,
  title: 'Code Studio ATS',
  description: 'Applicant Tracking System with JWT authentication and role-based access control',
  features: [
    'JWT Authentication',
    'Role Based Access Control',
    'Protected Routes',
    'Admin Dashboard',
    'Secure Authorization',
  ],
  techStack: ['React', 'Node.js', 'Express.js', 'JWT', 'MongoDB'],
  gradient: 'from-cyan-600 via-teal-600 to-emerald-700',
  icon: Shield,
  github: 'https://github.com/siri9876/-Authentication-Role-Based-Access',
  live: 'https://authentication-role-based-access.vercel.app',
},
  
];

function FeatureItem({ feature, index }: { feature: string; index: number }) {
  return (
    <motion.li
      className="flex items-center gap-2 text-sm text-dark-300"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
      {feature}
    </motion.li>
  );
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Card */}
      <motion.div
        className="relative h-full rounded-2xl overflow-hidden glass group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* Animated border glow */}
        <motion.div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            background: `linear-gradient(180deg, transparent, transparent) padding-box, linear-gradient(135deg, ${
              project.gradient.includes('primary') ? 'rgb(99, 102, 241)' : 'rgb(6, 182, 212)'
            }, transparent) border-box`,
            border: '1px solid transparent',
          }}
        />

        {/* Content */}
        <div className="relative p-6 h-full flex flex-col z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
              <project.icon className="w-7 h-7 text-white" />
            </div>
            <motion.div
              animate={{ rotate: isHovered ? 15 : 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-dark-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6 flex-grow">
            {project.features.map((feature, i) => (
              <FeatureItem key={i} feature={feature} index={i} />
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-dark-800/80 text-dark-300 rounded-full border border-dark-700 hover:border-primary-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
<div className="flex gap-3">
  <motion.a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-cyan-600 text-white text-sm font-medium"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <ExternalLink className="w-4 h-4" />
    Live Demo
  </motion.a>

  <motion.a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2.5 rounded-lg glass-hover text-dark-300 hover:text-white text-sm font-medium flex items-center gap-2"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Github className="w-4 h-4" />
    Code
  </motion.a>
</div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
          <div
            className={`absolute inset-0 bg-gradient-to-tl ${project.gradient}`}
            style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="w-12 h-12 text-primary-400 mb-2 mx-auto" />
          </motion.div>
          <h2 className="heading-secondary mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Showcasing my best work and technical expertise through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
           href="https://github.com/siri9876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 outline-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
