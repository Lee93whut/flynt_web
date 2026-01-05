import { motion } from 'motion/react';
import techImage from 'figma:asset/9fcf293776eabb1adcf38e16ccb86027859c2f9c.png';

export function Technology() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated scan lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-400 text-sm">Technology Excellence</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Advanced EV Platform for the Future
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Built from the ground up for electric mobility, with autonomous-ready architecture and maximum efficiency.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-slate-950 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl mb-2">New Electric Platform</h3>
                  <p className="text-slate-400">Dedicated EV architecture optimized for commercial use</p>
                </motion.div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-slate-950 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  ></motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl mb-2">Advanced Energy Management</h3>
                  <p className="text-slate-400">Integrated thermal management and energy recovery systems</p>
                </motion.div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-slate-950 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  ></motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl mb-2">Autonomous-Ready Design</h3>
                  <p className="text-slate-400">Scalable from L2+ to L4 autonomous driving capabilities</p>
                </motion.div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-slate-950 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                  ></motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl mb-2">Lightweight Engineering</h3>
                  <p className="text-slate-400">Purpose-built lightweight platform with low drag coefficient</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden border border-amber-500/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={techImage}
                alt="Flynt Technology Architecture"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Scanning effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent h-20"
                animate={{ y: ['-20%', '120%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
            
            {/* Floating tech badges */}
            <motion.div
              className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm border border-amber-500/50 rounded-lg px-4 py-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' 
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-amber-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <p className="text-sm text-amber-400">L4/L5 Ready</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur-sm border border-yellow-500/50 rounded-lg px-4 py-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)' 
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
                <p className="text-sm text-yellow-400">30-50% Lower TCO</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}