import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  score: string;
  period: string;
  type: string;
}

const educationData: Education[] = [
  {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    score: 'CGPA: 7.8',
    period: '2021 - 2025',
    type: 'undergraduate',
  },
  {
    degree: 'Intermediate MPC',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    score: 'CGPA: 9.0',
    period: '2019 - 2021',
    type: 'intermediate',
  },
];

function TimelineItem({
  education,
  index,
  isLeft,
  isInView,
}: {
  education: Education;
  index: number;
  isLeft: boolean;
  isInView: boolean;
}) {
  return (
    <motion.div
      className={`flex items-center gap-4 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      {/* Content */}
      <motion.div
        className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-inherit`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="glass rounded-2xl p-6 inline-block w-full max-w-md hover:border-primary-500/30 transition-colors">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              education.type === 'undergraduate'
                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
            }`}
          >
            {education.type === 'undergraduate' ? 'Bachelor' : 'Intermediate'}
          </div>

          {/* Degree */}
          <h3 className="text-lg font-bold text-white mb-2">{education.degree}</h3>

          {/* Institution */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-dark-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{education.institution}</span>
          </div>

          {/* Score */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="font-semibold text-primary-400">{education.score}</span>
          </div>

          {/* Period */}
          <span className="text-dark-500 text-sm">{education.period}</span>
        </div>
      </motion.div>

      {/* Timeliness */}
      <div className="hidden lg:flex items-center justify-center relative z-10">
        <motion.div
          className={`w-4 h-4 rounded-full ${
            education.type === 'undergraduate'
              ? 'bg-gradient-to-r from-primary-500 to-cyan-500'
              : 'bg-gradient-to-r from-cyan-500 to-emerald-500'
          } shadow-glow`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.3 + 0.3 }}
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
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
            <GraduationCap className="w-12 h-12 text-cyan-400 mb-2 mx-auto" />
          </motion.div>
          <h2 className="heading-secondary mb-4">
            Educational <span className="gradient-text-alt">Journey</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500/50 via-cyan-500/50 to-primary-500/50" />

          {/* Items */}
          <div className="space-y-8 lg:space-y-0">
            {educationData.map((education, index) => (
              <div key={index} className="relative">
                <TimelineItem
                  education={education}
                  index={index}
                  isLeft={index % 2 === 0}
                  isInView={isInView}
                />
                {/* Connector dots for mobile */}
                <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      education.type === 'undergraduate'
                        ? 'bg-gradient-to-r from-primary-500 to-cyan-500'
                        : 'bg-gradient-to-r from-cyan-500 to-emerald-500'
                    }`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
