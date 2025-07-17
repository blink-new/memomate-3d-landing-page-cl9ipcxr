import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Video, Code, HelpCircle, Lightbulb, Rocket } from 'lucide-react'

const LearnSection: React.FC = () => {
  const learningResources = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step guides to master MemoMate',
      count: '50+ videos'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      count: '200+ articles'
    },
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Integration samples and best practices',
      count: '100+ examples'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Answers to common questions',
      count: '500+ answers'
    },
    {
      icon: Lightbulb,
      title: 'Tips & Tricks',
      description: 'Productivity hacks and workflows',
      count: '75+ tips'
    },
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Quick start guides for new users',
      count: '10+ guides'
    }
  ]

  const categories = [
    'Productivity',
    'Tech',
    'AI',
    'Startup',
    'Tutorials',
    'Integrations'
  ]

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
            <span className="holographic-text">Learn</span> & Grow
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Master MemoMate with our comprehensive learning resources and AI-enhanced library
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className="glass px-6 py-3 rounded-full font-rajdhani font-semibold hover:glass-red transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Learning Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {learningResources.map((resource, index) => {
            const Icon = resource.icon
            
            return (
              <motion.div
                key={index}
                className="glass p-8 rounded-xl hover:glass-red transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 rounded-full glass-red flex items-center justify-center mb-6 group-hover:glow-red transition-all duration-300">
                  <Icon className="w-8 h-8 text-red-400" />
                </div>
                
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 font-rajdhani mb-4">
                  {resource.description}
                </p>
                
                <div className="text-sm text-red-400 font-rajdhani font-semibold">
                  {resource.count}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* AI Assistant Section */}
        <motion.div
          className="glass-red p-12 rounded-2xl text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-24 h-24 rounded-full glass mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
            <Lightbulb className="w-12 h-12 text-red-400" />
          </div>
          
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
            AI Learning Assistant
          </h2>
          
          <p className="text-gray-300 font-rajdhani text-lg mb-8 max-w-2xl mx-auto">
            Get instant answers to your questions with our voice-enabled AI assistant. 
            Available 24/7 to help you learn and troubleshoot.
          </p>

          <motion.button
            className="glass px-8 py-4 rounded-full font-rajdhani font-semibold text-lg border border-white/20 hover:border-red-500/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try AI Assistant
          </motion.button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '1M+', label: 'Resources Accessed' },
            { number: '95%', label: 'User Satisfaction' },
            { number: '24/7', label: 'AI Support' },
            { number: '5min', label: 'Avg. Learning Time' }
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <div className="text-2xl font-orbitron font-bold text-red-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-rajdhani">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LearnSection