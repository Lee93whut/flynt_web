import { motion } from 'motion/react';
import { Globe2, Handshake, TrendingUp, MapPin } from 'lucide-react';

export function Partnership() {
  const phases = [
    {
      phase: 'Phase 1',
      region: 'Europe',
      markets: '26 Markets',
      timeline: '2026 Q4',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      phase: 'Phase 2',
      region: 'North America',
      markets: 'USA & Canada',
      timeline: '2027 Q1',
      color: 'from-yellow-500 to-amber-400'
    },
    {
      phase: 'Phase 3',
      region: 'Global',
      markets: 'Worldwide Expansion',
      timeline: '2028+',
      color: 'from-amber-400 to-yellow-300'
    }
  ];

  const partnerships = [
    {
      icon: Handshake,
      title: 'European Expertise',
      desc: 'Deep market knowledge combined with Chinese innovation'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Advantage',
      desc: 'Partnerships with industry-leading suppliers and OEMs'
    },
    {
      icon: Globe2,
      title: 'Strong Network',
      desc: 'Comprehensive sales and service infrastructure'
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* World map dots pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            <Globe2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm">Global Expansion</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Market Entry Strategy
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic phased approach to deliver electric mobility solutions globally
          </p>
        </motion.div>

        {/* Timeline phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {phases.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Connection line */}
              {index < phases.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}

              <motion.div
                className="bg-gradient-to-br from-slate-900/90 to-slate-800/60 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  borderColor: 'rgba(251, 191, 36, 0.5)',
                  boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)'
                }}
              >
                {/* Animated glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Phase number */}
                <div className="relative mb-4">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-lg`}>
                    <span className="text-slate-950 font-bold">{item.phase}</span>
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-8 h-8 text-amber-400" />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-amber-400"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 relative">{item.region}</h3>
                <p className="text-amber-400 text-lg mb-2 relative">{item.markets}</p>
                <p className="text-slate-400 relative">{item.timeline}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Partnership model */}
        <motion.div
          className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2410_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2410_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Strategic Partnership Model
                </span>
              </h3>
              <p className="text-slate-300 text-lg">
                Combining global expertise with local market knowledge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerships.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    borderColor: 'rgba(251, 191, 36, 0.4)',
                    y: -5
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-300"
                  />

                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-4 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </motion.div>

                  <h4 className="text-xl font-medium mb-3 relative">{item.title}</h4>
                  <p className="text-slate-400 relative">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium text-slate-950">Become a Partner</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
