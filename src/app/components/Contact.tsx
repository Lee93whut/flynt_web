import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px]"
        animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glowing particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm">Get in Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Join the Future of Transportation
          </h2>
          <p className="text-slate-400 text-lg">
            Partner with us for sustainable commercial mobility solutions
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 rounded-tl-3xl"
            style={{
              borderTop: '2px solid rgba(251, 191, 36, 0.3)',
              borderLeft: '2px solid rgba(251, 191, 36, 0.3)'
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20 rounded-br-3xl"
            style={{
              borderBottom: '2px solid rgba(234, 179, 8, 0.3)',
              borderRight: '2px solid rgba(234, 179, 8, 0.3)'
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative">
            {[
              { icon: Mail, label: 'Email', value: 'info@flyntvans.com' },
              { icon: Phone, label: 'Phone', value: '+1 (650) 555-FLYNT' },
              { icon: MapPin, label: 'Headquarters', value: 'Silicon Valley, California' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Flynt Automotive' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6 text-slate-950" />
                </motion.div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                  <p className="text-lg group-hover:text-amber-400 transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-slate-700 pt-8 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-center text-slate-400">
              We are seeking strategic investors to accelerate our mission of sustainable autonomous transportation
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-16 text-slate-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>© 2026 Flynt. All rights reserved.</p>
      </motion.div>
    </section>
  );
}