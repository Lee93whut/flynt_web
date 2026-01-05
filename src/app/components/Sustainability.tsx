import { motion } from 'motion/react';
import { Leaf, TrendingDown, Building2, Calculator } from 'lucide-react';

export function Sustainability() {
  const stats = [
    { value: '91M', label: 'Tons CO₂/year', sublabel: 'Europe LCV emissions' },
    { value: '30-50%', label: 'TCO Reduction', sublabel: 'vs. diesel vehicles' },
    { value: '80%', label: 'Cost Savings', sublabel: 'with autonomous features' },
    { value: '0', label: 'Carbon Tax', sublabel: 'Pure electric advantage' }
  ];

  const tcoComparison = [
    { category: 'Energy Costs', diesel: '€15,000', electric: '€4,500', savings: '70%' },
    { category: 'Maintenance', diesel: '€8,000', electric: '€2,400', savings: '70%' },
    { category: 'Carbon Tax', diesel: '€3,000', electric: '€0', savings: '100%' },
    { category: 'Insurance', diesel: '€2,500', electric: '€2,000', savings: '20%' }
  ];

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm">Sustainability Commitment</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-green-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Decarbonizing Transportation
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tackling the urgent challenge of commercial vehicle emissions with purpose-built electric solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-amber-500/20 rounded-2xl p-6 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                borderColor: 'rgba(251, 191, 36, 0.4)',
                y: -5
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-medium mb-1 relative">{stat.label}</div>
              <div className="text-sm text-slate-400 relative">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* TCO Advantage Section */}
        <motion.div
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/60 border border-amber-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2408_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2408_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          {/* Floating icon */}
          <motion.div
            className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Calculator className="w-10 h-10 text-amber-400" />
          </motion.div>

          <div className="relative z-10">
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Total Cost of Ownership Advantage
                </span>
              </h3>
              <p className="text-slate-300 text-lg">
                Electric LCVs deliver substantial savings across every operational aspect
              </p>
            </div>

            {/* Comparison Table */}
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-sm text-slate-400 mb-2 px-4">
                <div>Category</div>
                <div className="text-center">Diesel</div>
                <div className="text-center">FLYNT eLCV</div>
                <div className="text-center">Savings</div>
              </div>

              {tcoComparison.map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-4 gap-4 items-center bg-slate-900/50 rounded-xl p-4 border border-slate-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    borderColor: 'rgba(251, 191, 36, 0.3)',
                    x: 5
                  }}
                >
                  <div className="font-medium">{item.category}</div>
                  <div className="text-center text-red-400">{item.diesel}</div>
                  <div className="text-center text-green-400">{item.electric}</div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
                      -{item.savings}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Total */}
              <motion.div
                className="grid grid-cols-4 gap-4 items-center bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/40 mt-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="font-bold text-lg">Total Annual Cost</div>
                <div className="text-center font-bold text-red-400">€28,500</div>
                <div className="text-center font-bold text-green-400">€8,900</div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-amber-500 text-slate-950 rounded-full font-bold">
                    -69%
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.p
              className="text-slate-400 text-sm mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              * Based on 5-year ownership period, 50,000 km/year usage. Actual savings may vary based on usage patterns and local energy costs.
            </motion.p>
          </div>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: TrendingDown, title: 'Zero Tailpipe Emissions', desc: 'Contributing to cleaner air in urban areas' },
            { icon: Building2, title: 'Last-Mile Ready', desc: 'Perfect for city logistics and delivery needs' },
            { icon: Leaf, title: 'Sustainable Future', desc: 'Supporting Europe\'s carbon neutrality goals' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                borderColor: 'rgba(34, 197, 94, 0.3)',
                y: -5
              }}
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-medium mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
