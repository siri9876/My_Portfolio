import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code, Rocket, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Java Full Stack',
    desc: 'Building scalable web applications',
  },
  {
    icon: Rocket,
    title: 'React Development',
    desc: 'Creating responsive user interfaces',
  },
  {
    icon: Heart,
    title: 'Problem Solving',
    desc: 'Strong analytical and logical thinking',
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref as React.RefObject<HTMLElement>}>
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
            <User className="w-12 h-12 text-primary-400 mb-2 mx-auto" />
          </motion.div>
          <h2 className="heading-secondary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-4 glass rounded-2xl overflow-hidden">
                {/* Code snippet visual */}
                <div className="absolute inset-0 bg-dark-900 p-6 font-mono text-sm">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-dark-300"
                  >
                  <p className="text-primary-400">class Developer {'{'}</p>

                  <p className="ml-4 text-cyan-400">
                      name:<span className="text-green-400"> "Ankadi Sai Sireesha"</span>
                  </p>

                  <p className="ml-4 text-cyan-400">
                    role:<span className="text-green-400"> "Java Full Stack Developer"</span>
                  </p>

                  <p className="ml-4 text-cyan-400">
                   skills:<span className="text-green-400"> ["Java", "Spring Boot", "React", "MySQL"]</span>
                  </p>

                  <p className="ml-4 text-cyan-400">
                    goal:<span className="text-green-400"> "Build scalable web applications"</span>
                  </p>

                  <p className="text-primary-400">{'}'}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
               Java Full Stack Developer | React Enthusiast
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              Computer Science Engineering graduate with a strong foundation in Java Full Stack Development,
              React.js, Spring Boot, Node.js, MongoDB, and MySQL. I have built projects such as Resume Parser &
              AI Job Matching System, Code Studio ATS, and E-Commerce Website, which helped me gain practical
              experience in developing responsive web applications, REST APIs, authentication systems, and
              database-driven applications.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
             I am passionate about learning new technologies, solving real-world problems, and building
             scalable software solutions. Currently, I am seeking an opportunity as a Java Full Stack
             Developer where I can contribute my skills, gain industry experience, and continue growing
             as a software engineer.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="skill-card text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <item.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-dark-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
