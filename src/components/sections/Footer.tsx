import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sai-sireesha-ankadi',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    icon: Github,
    href: 'https://github.com/siri9876',
    label: 'GitHub',
    color: 'hover:text-gray-300',
  },
  {
    icon: Mail,
    href: 'mailto:saisiriankadi@gmail.com',
    label: 'Email',
    color: 'hover:text-primary-400',
  },
];

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-900/80 border-t border-dark-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom py-10">

        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
         <div className="max-w-xs text-center lg:text-left">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
    AS
  </span>
              </div>

              <span className="text-2xl font-bold gradient-text">
              Anakdi Sai Sireesha
              </span>
            </motion.a>

            <p className="text-dark-400 leading-relaxed">
              Java Full Stack Developer specializing in Spring Boot,
              React.js, MySQL and scalable web application development.
            </p>
          </div>

          {/* Center Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-dark-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Social */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  social.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
               className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-400 ${social.color} hover:shadow-lg hover:shadow-cyan-500/20`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-dark-800 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-dark-500 text-sm text-center">
            Designed & Developed by Ankadi Sai Sireesha
          </p>

          <p className="text-dark-500 text-sm text-center">
            © {new Date().getFullYear()} Ankadi Sai Sireesha. All Rights Reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-400 hover:text-white"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>

        </div>
      </div>
    </footer>
  );
}