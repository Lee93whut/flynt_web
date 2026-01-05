import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from 'figma:asset/5159f5d6ea0c335cd8bc69a563e78a9a97ff29ee.png';
import { VideoPlayer } from './VideoPlayer';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  /**
   * 视频文件路径 - 视频文件放在 public 目录，使用绝对路径
   * public 目录下的文件会被直接复制到构建输出目录的根目录
   * 由于设置了 base: '/flynt_web/'，所以路径需要包含 base
   */
  const videoFile = '/flynt_web/video.mp4';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2420_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2420_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-amber-400 text-sm">Launching Europe 2026 Q4</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <motion.span
                className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Driving the Future
              </motion.span>
              <motion.span
                className="block text-white mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                of Sustainable
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Transportation
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-slate-300 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Pure electric light commercial vehicles designed for European business needs.
              Sustainable, efficient, and ready for the future of urban logistics.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center gap-4 hover:shadow-lg hover:shadow-amber-500/50 transition-all group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="flex items-center gap-2">
                  <span className="font-medium text-slate-950">Explore Our Vehicles</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-950" />
                </button>
                <div className="h-6 w-px bg-slate-950/30"></div>
                <button
                  className="flex items-center gap-2"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="w-5 h-5 text-slate-950" />
                  <span className="font-medium text-slate-950">Watch Video</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Key stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '500km', label: 'Range' },
                { value: '17%', label: 'More Efficient' },
                { value: '30-50%', label: 'Lower TCO' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-transparent blur-3xl"></div>

              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={heroImage}
                  alt="FLYNT Electric LCV"
                  className="w-full h-auto"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
                    WebkitMaskComposite: 'source-in'
                  }}
                />

                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent h-32 pointer-events-none"
                  animate={{ y: ['-20%', '120%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Floating info cards */}
              <motion.div
                className="absolute top-1/4 -left-4 bg-slate-900/90 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-amber-400 text-sm mb-1">Zero Emissions</div>
                <div className="text-2xl font-bold">100% Electric</div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -right-4 bg-slate-900/90 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-amber-400 text-sm mb-1">Cargo Space</div>
                <div className="text-2xl font-bold">8.1-16.5 m³</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-amber-400 rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Video Player Modal */}
      <VideoPlayer
        videoSrc={videoFile}
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="FLYNT Electric LCV - Product Video"
      />
    </section>
  );
}