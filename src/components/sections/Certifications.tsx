import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Cloud,
  Brain,
} from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: typeof Award;
  color: string;
  certificateUrl: string;
}

const certifications: Certification[] = [
  {
    title: 'Full Stack Development (Java)',
    issuer: 'IIT Guwahati E&ICT Academy',
    icon: ShieldCheck,
    color: 'from-blue-500 to-indigo-600',
    certificateUrl:
      'https://drive.google.com/file/d/1XvF3xjvT3gA3wb3Es7-pR34JiEmEeF5A/view?usp=sharing',
  },
  {
    title: 'Full Stack Java Training',
    issuer: 'Teks Academy',
    icon: Award,
    color: 'from-primary-500 to-violet-600',
    certificateUrl:
      'https://drive.google.com/file/d/1vk2IcpQ9GTiWLb3fZDDg9-Jy7eTp7PPf/view?usp=sharing',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    icon: Cloud,
    color: 'from-cyan-500 to-teal-600',
    certificateUrl:
      'https://drive.google.com/file/d/1Zav4b_AR-q4u6lBM26SDaW7NLLUfpP-i/view?usp=sharing',
  },
  {
    title: 'AI For Everyone',
    issuer: 'edX',
    icon: Brain,
    color: 'from-emerald-500 to-green-600',
    certificateUrl:
      'https://courses.edx.org/certificates/b89d4fa1bdf3463e83b565048f7e912e',
  },
];

function CertificationCard({
  certification,
  index,
  isInView,
}: {
  certification: Certification;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <motion.div
        className="glass rounded-xl p-6 h-full hover:border-primary-500/30 transition-all duration-300"
        whileHover={{ scale: 1.03, y: -5 }}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${certification.color} flex items-center justify-center flex-shrink-0`}
          >
            <certification.icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">
              {certification.title}
            </h3>

            <p className="text-dark-400 text-sm mb-3">
              {certification.issuer}
            </p>

            <motion.a
              href={certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300 transition-colors"
              whileHover={{ x: 3 }}
            >
              View Certificate
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
        </div>

        <div
          className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-bl ${certification.color} opacity-10`}
        />
      </motion.div>
    </motion.div>
  );
}

export function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="certifications"
      className="section-padding relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container-custom">
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
            <Award className="w-12 h-12 text-primary-400 mb-2 mx-auto" />
          </motion.div>

          <h2 className="heading-secondary mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Professional certifications validating expertise across various
            domains
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              certification={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}