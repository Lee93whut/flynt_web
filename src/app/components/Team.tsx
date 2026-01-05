import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export function Team() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M24.5 0L49 12.5v25L24.5 50 0 37.5v-25z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-amber-400" />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm">Our Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Global Leadership Team
          </h2>
          <p className="text-slate-400 text-lg">
            Automotive excellence with 20+ years of experience across key markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: GraduationCap, label: 'Automotive Expertise', value: '20+' },
            { icon: Briefcase, label: 'Years of Experience', value: 'Years' },
            { icon: Award, label: 'Global Markets', value: '3' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 border rounded-2xl p-8 text-center relative overflow-hidden"
              style={{ borderColor: '#334155' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                borderColor: 'rgba(251, 191, 36, 0.5)'
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              />
              
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="w-8 h-8 text-slate-950" />
              </motion.div>
              <motion.p 
                className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.p>
              <p className="text-slate-400 relative">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border rounded-2xl p-8 relative overflow-hidden"
            style={{ borderColor: '#334155' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
          >
            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <h3 className="text-2xl mb-4 relative">Key Executives</h3>
            <ul className="space-y-3 text-slate-300 relative">
              {[
                'Rogan Liu - Product & R&D, 20 years in automotive engineering',
                'Dr. Daniel Kirchert - Europe Lead, 20+ years in sales and branding',
                'Min Chen - Finance, 25 years in capital markets and IPOs',
                'Combined expertise in EV manufacturing and market entry'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
          >
            {/* Animated corner accent */}
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-tr-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            
            <h3 className="text-2xl mb-4 relative">Strategic Advantages</h3>
            <ul className="space-y-3 text-slate-300 relative">
              {[
                'Proven track record in launching EV products globally',
                'Established partnerships with GAC for supply chain',
                'Deep understanding of fleet operations and TCO optimization',
                'Network across Europe, North America, and Asia'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}