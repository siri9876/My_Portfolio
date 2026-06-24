import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saisiriankadi@gmail.com',
    href: 'mailto:saisiriankadi@gmail.com',
    color: 'from-primary-500 to-indigo-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 89xxxxxx09',
    href: 'tel:+9189xxxxxx09',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-sireesha-ankadi',
    href: 'https://www.linkedin.com/in/sai-sireesha-ankadi',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/siri9876',
    href: 'https://github.com/siri9876',
    color: 'from-gray-600 to-gray-700',
  },
];

function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  rows,
}: {
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
}) {
  

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-dark-300 mb-2">{label}</label>
      <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
        {rows ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 border ${
              error ? 'border-red-500/50' : 'border-dark-700'
            } text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 border ${
              error ? 'border-red-500/50' : 'border-dark-700'
            } text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all`}
          />
        )}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    await emailjs.send(
  'service_k6iot68',
  'template_6a2ut75',
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString(),
  },
  'BIOCgeAgUIlWj6CQQ'
);

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  } catch (error) {
    console.error(error);
    setSubmitStatus('error');
  }

  setIsSubmitting(false);

  setTimeout(() => {
    setSubmitStatus('idle');
  }, 5000);
};

  return (
    <section id="contact" className="section-padding relative" ref={ref as React.RefObject<HTMLElement>}>
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
            <Mail className="w-12 h-12 text-primary-400 mb-2 mx-auto" />
          </motion.div>
          <h2 className="heading-secondary mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary-500/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-dark-400 text-sm">{item.label}</span>
                    <p className="text-white font-medium group-hover:gradient-text transition-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              className="mt-6 glass rounded-xl p-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 text-dark-400 mb-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-white">Hyderabad, India</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Your name"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="your@email.com"
                  />
                </div>

                <InputField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="What's this about?"
                />

                <InputField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full gradient-btn flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
