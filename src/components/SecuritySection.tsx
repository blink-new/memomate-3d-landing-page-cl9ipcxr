import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Server } from 'lucide-react'

const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'AES-256 Secure',
      description: 'Military-grade encryption protects all your data'
    },
    {
      icon: Eye,
      title: 'GDPR Compliant',
      description: 'Full compliance with global privacy regulations'
    },
    {
      icon: Lock,
      title: 'Privacy-First AI',
      description: 'Your data never leaves your control'
    },
    {
      icon: Server,
      title: 'Zero-Knowledge',
      description: 'We cannot access your encrypted information'
    }
  ]

  return (
    <section className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="holographic-text">Security</span> & Trust
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Your data is protected by enterprise-grade security measures and privacy-first architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Security Visualization */}
          <motion.div
            className="relative h-96 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Security Shield */}
              <motion.div
                className="w-48 h-48 rounded-full glass-red glow-red-intense flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity },
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                }}
              >
                <Shield className="w-24 h-24 text-red-400" />
              </motion.div>

              {/* Protective Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-red-500/30 rounded-full"
                  style={{
                    width: `${300 + i * 40}px`,
                    height: `${300 + i * 40}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2 + i, repeat: Infinity }
                  }}
                />
              ))}

              {/* Data Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-red-400 rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            {/* Security Badge */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-red px-6 py-3 rounded-full flex items-center space-x-3">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="font-orbitron text-sm font-bold text-white">
                  SECURED BY AI
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Security Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl hover:glass-red transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full glass-red flex items-center justify-center group-hover:glow-red transition-all duration-300">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 font-rajdhani">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Data Tunnel Visualization */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-orbitron font-bold text-white mb-8">
            Live Encrypted Data Tunnel
          </h3>
          
          <div className="relative h-32 max-w-2xl mx-auto flex items-center justify-center">
            {/* Tunnel Rings */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-red-500/30 rounded-full"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
            
            {/* Data Flow Indicators */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <div className="text-sm font-rajdhani text-gray-400">
                Raw Data
              </div>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <div className="text-sm font-rajdhani text-gray-400">
                Encrypted
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 font-rajdhani mt-4">
            Real-time visualization of your data being encrypted and transmitted securely
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SecuritySection