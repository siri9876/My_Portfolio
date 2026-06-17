import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Linkedin, Github, ArrowDown } from 'lucide-react';
import { useTypewriter, useMagneticButton } from '../../hooks/useAnimations';
import profilePic from '../../assets/profile.jpg';

const roles = [
  'Java Full Stack Developer',
  'React Developer',
  'Spring Boot Developer',
  'Software Engineer',
];

export function Hero() {
  const currentRole = useTypewriter(roles, 80, 40, 1500);
  const magneticBtn1 = useMagneticButton();
  const magneticBtn2 = useMagneticButton();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
             
            </motion.div>
             <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md w-fit"
>
  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
  <span className="text-sm font-medium text-emerald-300 whitespace-nowrap">
    Open To Work
  </span>
</motion.div>
          
            <motion.h3
              className="heading-primary mb-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Ankadi Sai Sireesha</span>
            </motion.h3>
            

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-xl sm:text-2xl text-dark-300">I'm a</span>
              <div className="relative h-8 overflow-hidden">
                <span className="text-xl sm:text-2xl font-semibold gradient-text-alt inline-block min-w-[300px]">
                  {currentRole}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                    className="inline-block ml-1 text-primary-400"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Computer Science Engineering graduate skilled in Java, Spring Boot, React.js, MongoDB, and MySQL. Passionate about building modern web applications and solving real-world problems.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="/Ankadi_Sai_Sireesha.pdf"
                download
                className="gradient-btn flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // ref={magneticBtn1.ref}
                onMouseMove={magneticBtn1.handleMouseMove}
                onMouseLeave={magneticBtn1.handleMouseLeave}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.button
                onClick={scrollToProjects}
                className="outline-btn flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                ref={magneticBtn2.ref}
                onMouseMove={magneticBtn2.handleMouseMove}
                onMouseLeave={magneticBtn2.handleMouseLeave}
              >
                <FolderGit2 className="w-5 h-5" />
                View Projects
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="outline-btn flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/sai-sireesha-ankadi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-hover flex items-center justify-center text-dark-300 hover:text-primary-400 hover:border-primary-500/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/siri9876"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-hover flex items-center justify-center text-dark-300 hover:text-cyan-400 hover:border-cyan-500/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:saisiriankadi@gmail.com"
                className="w-12 h-12 rounded-xl glass-hover flex items-center justify-center text-dark-300 hover:text-primary-400 hover:border-primary-500/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

        {/* Right Content - Avatar/Image */}
<motion.div
  className="flex-1 relative flex justify-center lg:justify-end"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <div className="relative">

    {/* Main Glow */}
    <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[60px] scale-110" />

    {/* Avatar Container */}
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px]">

      {/* Single Premium Ring */}
      <motion.div
        className="absolute -inset-5 z-20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="heroRing"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="url(#heroRing)"
            strokeWidth="0.7"
            strokeDasharray="95 205"
            strokeLinecap="round"
            />
        </svg>
      </motion.div>

      {/* Floating Dot 1 */}
      <motion.div
        className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full z-30"
        animate={{
          y: [0, -12, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Floating Dot 2 */}
      <motion.div
        className="absolute bottom-6 left-6 w-4 h-4 bg-violet-500 rounded-full z-30"
        animate={{
          y: [0, 12, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Profile Image */}
      <motion.img
        src={profilePic}
        alt="Ankadi Sai Sireesha"
        className="relative z-30 w-full h-full object-cover rounded-full border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.30)]"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  </div>
</motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-dark-400 cursor-pointer hover:text-primary-400 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
