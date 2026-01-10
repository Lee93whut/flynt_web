import { motion } from 'motion/react';
import { Box, Battery, DollarSign, Gauge } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: 'Maximized Space Efficiency',
    description: '15-22 m³ cargo space with 17% better efficiency than competitors',
    stats: '17% More'
  },
  {
    icon: Battery,
    title: 'Exceptional Range',
    description: 'Up to 500km range with advanced energy management system',
    stats: '500 km'
  },
  {
    icon: DollarSign,
    title: 'Competitive TCO',
    description: 'Low energy costs, minimal maintenance, zero carbon taxes',
    stats: '30-50% Lower'
  },
  {
    icon: Gauge,
    title: 'User-Focused Design',
    description: 'Advanced connectivity and ADAS systems for safety and comfort',
    stats: 'Automony Ready'
  }
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2415_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2415_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating particles in background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 text-xs sm:text-sm">Product Highlights</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Designed for Excellence
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every detail engineered for maximum efficiency and value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(251, 191, 36, 0.5) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6"
                style={{ borderColor: '#334155' }}>
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-slate-950" />
                </motion.div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{feature.description}</p>
                <motion.div
                  className="text-2xl bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {feature.stats}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}