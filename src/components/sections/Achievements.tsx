import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Code2, Award, Rocket } from 'lucide-react';
import { useAnimatedCounter } from '../../hooks/useAnimations';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Trophy;
  color: string;
}

const stats: Stat[] = [
  { value: 3, suffix: '+', label: 'Projects', icon: Rocket, color: 'text-primary-400' },
  { value: 10, suffix: '+', label: 'Technologies', icon: Code2, color: 'text-cyan-400' },
  { value: 4, suffix: '', label: 'Certifications', icon: Award, color: 'text-yellow-500' },
];

function CounterCard({ stat, index, isInView }: { stat: Stat; index: number; isInView: boolean }) {
  const { count, ref } = useAnimatedCounter(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      className="text-center relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="glass rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 overflow-hidden group">
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <stat.icon className={`w-8 h-8 ${stat.color}`} />
        </motion.div>

        {/* Counter */}
        <motion.div
          className="text-5xl font-bold mb-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          <span className="gradient-text">
            {count}
            <span>{stat.suffix}</span>
          </span>
        </motion.div>

        {/* Label */}
        <span className="text-dark-400 font-medium">{stat.label}</span>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
      className="section-padding relative bg-dark-900/50"
      ref={ref as React.RefObject<HTMLElement>}
    >
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
            <Trophy className="w-12 h-12 text-yellow-500 mb-2 mx-auto" />
          </motion.div>
          <h2 className="heading-secondary mb-4">
            Key <span className="gradient-text-alt">Achievements</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A snapshot of my professional journey and growing expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <CounterCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
