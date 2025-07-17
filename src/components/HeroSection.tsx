import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import CodeInterface3D from './CodeInterface3D'

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - 3D Code Interface Centerpiece */}
        <motion.div
          className="relative h-96 lg:h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <CodeInterface3D />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl lg:text-7xl font-orbitron font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your{' '}
              <span className="holographic-text">
                Intelligent
              </span>
              <br />
              Productivity OS
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 font-rajdhani max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Powered by AI. Synced to your life. From chats to calendar — all in one.
            </motion.p>
          </div>

          {/* Integration Icons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['WhatsApp', 'Gmail', 'Zoom', 'Calendar', 'Notion', 'Slack', 'Docs'].map((app, index) => (
              <motion.div
                key={app}
                className="glass px-4 py-2 rounded-lg text-sm font-rajdhani"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 38, 38, 0.1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                {app}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="glass-red px-8 py-4 rounded-full font-rajdhani font-semibold text-lg flex items-center justify-center space-x-2 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className="glass px-8 py-4 rounded-full font-rajdhani font-semibold text-lg flex items-center justify-center space-x-2 border border-white/20 hover:border-red-500/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: '10M+', label: 'Tasks Managed' },
              { number: '50K+', label: 'Active Users' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-orbitron font-bold text-red-400">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-rajdhani">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection