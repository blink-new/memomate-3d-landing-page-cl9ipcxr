import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Star, Globe } from 'lucide-react'

const CommunitySection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="holographic-text">Community</span> Galaxy
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Connect with MemoMate users worldwide in our interactive 3D community space
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { icon: Users, number: '50K+', label: 'Active Members' },
            { icon: MessageCircle, number: '1M+', label: 'Discussions' },
            { icon: Star, number: '4.9', label: 'Average Rating' },
            { icon: Globe, number: '120+', label: 'Countries' }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="glass p-6 rounded-xl text-center">
                <Icon className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <div className="text-2xl font-orbitron font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-rajdhani">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          className="text-center glass-red p-12 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-24 h-24 rounded-full glass mx-auto mb-6 flex items-center justify-center">
            <Users className="w-12 h-12 text-red-400" />
          </div>
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
            3D Community Galaxy Coming Soon
          </h2>
          <p className="text-gray-300 font-rajdhani text-lg max-w-2xl mx-auto">
            We're building an immersive 3D space where you can interact with avatars, 
            join discussions, and collaborate in real-time. Stay tuned for the most 
            futuristic community experience ever created.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunitySection