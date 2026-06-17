import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code2,
  FileCode2,
  Palette,
  Database,
  Server,
  GitBranch,
  Settings,
  Star,
} from 'lucide-react';

type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';

interface Skill {
  name: string;
  level: number;
  icon: typeof Code2;
}

interface Category {
  id: SkillCategory;
  title: string;
  skills: Skill[];
  icon: typeof Code2;
  color: string;
}

const skillCategories: Category[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Palette,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', level: 90, icon: FileCode2 },
      { name: 'CSS3', level: 85, icon: Palette },
      { name: 'JavaScript', level: 85, icon: Code2 },
      { name: 'React.js', level: 80, icon: Code2 },
      { name: 'Tailwind CSS', level: 85, icon: Palette },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    color: 'from-primary-500 to-violet-500',
    skills: [
      { name: 'Java', level: 85, icon: Code2 },
      { name: 'JDBC', level: 75, icon: Database },
      { name: 'Spring Boot', level: 80, icon: Server },
      { name: 'Hibernate', level: 75, icon: Database },
      { name: 'Node.js', level: 80, icon: Server },
      { name: 'Express.js', level: 80, icon: Server },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MySQL', level: 80, icon: Database },
      { name: 'MongoDB', level: 75, icon: Database },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', level: 85, icon: GitBranch },
      { name: 'GitHub', level: 85, icon: GitBranch },
      { name: 'Postman', level: 80, icon: SendIcon },
    ],
  },
];

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SkillBar({ skill, index, isInView }: { skill: Skill; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4 text-dark-400" />
          <span className="text-sm font-medium text-dark-200">{skill.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <motion.span
            className="text-sm font-semibold text-primary-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          >
            {skill.level}%
          </motion.span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(skill.level / 20) ? 'text-yellow-500 fill-yellow-500' : 'text-dark-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={isHovered ? { x: ['-100%', '100%'] } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCard({ category, index, isInView }: { category: Category; index: number; isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="skill-card card-3d cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg">{category.title}</h3>
            <p className="text-sm text-dark-400">{category.skills.length} skills</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* Preview skills (always visible) */}
      <div className="flex flex-wrap gap-2 mb-4">
        {category.skills.slice(0, 3).map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1 text-xs font-medium bg-dark-800/50 text-dark-300 rounded-full border border-dark-700"
          >
            {skill.name}
          </span>
        ))}
        {category.skills.length > 3 && (
          <span className="px-3 py-1 text-xs font-medium text-primary-400">
            +{category.skills.length - 3} more
          </span>
        )}
      </div>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="space-y-4 pt-4 border-t border-dark-800">
          {category.skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} isInView={isInView && isExpanded} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-dark-900/50" ref={ref as React.RefObject<HTMLElement>}>
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
            <Settings className="w-12 h-12 text-cyan-400 mb-2 mx-auto" />
          </motion.div>
          <h2 className="heading-secondary mb-4">
            Technical <span className="gradient-text-alt">Skills</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, databases, and development tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} isInView={isInView} />
          ))}
        </div>

        {/* All Skills Overview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-dark-400 mb-4">Click on a category to see detailed skill levels</p>
        </motion.div>
      </div>
    </section>
  );
}
