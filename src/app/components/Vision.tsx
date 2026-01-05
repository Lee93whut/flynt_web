import { motion } from 'motion/react';
import { Target, Compass, Heart, TrendingUp } from 'lucide-react';

export function Vision() {
  const values = [
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      desc: 'Leading the industry with cutting-edge electric vehicle technology'
    },
    {
      icon: Heart,
      title: 'Respect & Win-Win',
      desc: 'Valuing customers, partners, and the environment equally'
    },
    {
      icon: Compass,
      title: 'Long-term Vision',
      desc: 'Building sustainable value beyond short-term gains'
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vision Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 text-sm">Our Purpose</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Creating a safe and sustainable world of autonomous commercial transportation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-amber-500/20 rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2410_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2410_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-slate-950" />
                </div>
                <h3 className="text-3xl md:text-4xl">Our Mission</h3>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                Building efficient electric light commercial vehicles, empowering partners, 
                and driving customer needs forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: 'Partner Empowerment', value: 'Collaborative ecosystem' },
                { label: 'Customer-Driven', value: 'Needs-first approach' },
                { label: 'Efficiency Focus', value: 'Maximum value delivery' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ borderColor: 'rgba(251, 191, 36, 0.3)', x: 5 }}
                >
                  <span className="text-slate-400">{item.label}</span>
                  <span className="text-amber-400 font-medium">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h3>
            <p className="text-slate-400 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  borderColor: 'rgba(251, 191, 36, 0.3)',
                  boxShadow: '0 10px 30px rgba(251, 191, 36, 0.1)'
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-300"
                />

                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-6 relative"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-amber-400" />
                </motion.div>

                <h4 className="text-xl mb-3 relative">{value.title}</h4>
                <p className="text-slate-400 relative">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
