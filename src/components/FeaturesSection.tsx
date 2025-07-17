import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Clock, 
  Globe, 
  Shield, 
  Palette, 
  Share2,
  Brain,
  Zap
} from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  details: string[]
}

const features: Feature[] = [
  {
    id: 'unified-chat',
    title: 'Unified AI Chat',
    description: 'Connect WhatsApp, Gmail, Zoom, and Notion in one intelligent interface',
    icon: MessageSquare,
    color: '#dc2626',
    details: [
      'Cross-platform messaging',
      'AI-powered responses',
      'Smart conversation threading',
      'Real-time synchronization'
    ]
  },
  {
    id: 'smart-reminders',
    title: 'Smart Reminders & Timeline',
    description: 'AI-driven scheduling that adapts to your workflow patterns',
    icon: Clock,
    color: '#ea580c',
    details: [
      'Predictive scheduling',
      'Context-aware reminders',
      'Calendar integration',
      'Priority optimization'
    ]
  },
  {
    id: 'translation',
    title: 'Multilingual Translation',
    description: 'Break language barriers with real-time AI translation',
    icon: Globe,
    color: '#dc2626',
    details: [
      '100+ languages supported',
      'Real-time translation',
      'Context preservation',
      'Cultural adaptation'
    ]
  },
  {
    id: 'security',
    title: 'AES-256 Encryption',
    description: 'Military-grade security for all your data and communications',
    icon: Shield,
    color: '#b91c1c',
    details: [
      'End-to-end encryption',
      'Zero-knowledge architecture',
      'GDPR compliant',
      'Secure cloud storage'
    ]
  },
  {
    id: 'themes',
    title: 'Theme & Language Sync',
    description: 'Seamless experience across all devices and platforms',
    icon: Palette,
    color: '#dc2626',
    details: [
      'Universal theming',
      'Cross-device sync',
      'Custom branding',
      'Accessibility features'
    ]
  },
  {
    id: 'sharing',
    title: '1-Click Task Sharing',
    description: 'Instant collaboration with granular permission controls',
    icon: Share2,
    color: '#ef4444',
    details: [
      'Instant sharing',
      'Role-based permissions',
      'Team collaboration',
      'Activity tracking'
    ]
  }
]

const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

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
            AI-Powered{' '}
            <span className="holographic-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Experience the future of productivity with our neural-enhanced feature ecosystem
          </p>
        </motion.div>

        {/* Central Orb and Feature Orbit */}
        <div className="relative h-[600px] mb-20 flex items-center justify-center">
          
          {/* Central AI Orb */}
          <motion.div
            className="w-32 h-32 rounded-full glass-red glow-red flex items-center justify-center z-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
          >
            <Brain className="w-12 h-12 text-red-400" />
          </motion.div>

          {/* Orbiting Feature Cards */}
          {features.map((feature, index) => {
            const angle = (index * Math.PI * 2) / features.length
            const radius = 250
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const Icon = feature.icon
            const isSelected = selectedFeature === feature.id
            const isHovered = hoveredFeature === feature.id

            return (
              <motion.div
                key={feature.id}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`
                    relative w-24 h-24 rounded-full cursor-pointer
                    ${isSelected || isHovered ? 'glass-red glow-red' : 'glass'}
                    flex items-center justify-center
                    transition-all duration-300
                  `}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    rotate: isSelected ? 360 : 0,
                    scale: isSelected ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  onClick={() => setSelectedFeature(
                    selectedFeature === feature.id ? null : feature.id
                  )}
                >
                  <Icon 
                    className={`
                      w-8 h-8 transition-colors duration-300
                      ${isSelected || isHovered ? 'text-red-400' : 'text-white'}
                    `}
                  />

                  {/* Connection Line to Center */}
                  <div
                    className={`
                      absolute w-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent
                      transition-opacity duration-300
                      ${isSelected || isHovered ? 'opacity-100' : 'opacity-30'}
                    `}
                    style={{
                      height: `${radius}px`,
                      transform: `rotate(${-angle + Math.PI}rad)`,
                      transformOrigin: 'top center',
                      top: '50%',
                      left: '50%',
                    }}
                  />

                  {/* Floating Label */}
                  <motion.div
                    className={`
                      absolute -bottom-12 left-1/2 transform -translate-x-1/2
                      text-xs font-rajdhani text-center whitespace-nowrap
                      transition-opacity duration-300
                      ${isHovered ? 'opacity-100' : 'opacity-70'}
                    `}
                  >
                    <div className="text-white font-semibold">{feature.title}</div>
                  </motion.div>

                  {/* Pulse Rings */}
                  {isSelected && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-full border border-red-500/30"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.7,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Feature Details Panel */}
        <motion.div
          className="min-h-[300px]"
          layout
        >
          {selectedFeature && (
            <motion.div
              key={selectedFeature}
              className="glass-red rounded-2xl p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {(() => {
                const feature = features.find(f => f.id === selectedFeature)!
                const Icon = feature.icon
                
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                          <Icon className="w-8 h-8 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-orbitron font-bold text-white">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 font-rajdhani">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {feature.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-red-400 rounded-full" />
                            <span className="text-gray-300 font-rajdhani">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="relative h-64 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 rounded-full glass-red glow-red flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <Icon className="w-12 h-12 text-red-400" />
                      </motion.div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
          
          {!selectedFeature && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
              <p className="text-xl text-gray-400 font-rajdhani">
                Click on any feature orb to explore its capabilities
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection