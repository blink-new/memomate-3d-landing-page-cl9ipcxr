import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Shield, Globe, Brain, Sparkles } from 'lucide-react'

const HolographicElements: React.FC = () => {
  const elements = [
    { icon: Cpu, x: 10, y: 20, delay: 0, size: 'w-8 h-8' },
    { icon: Zap, x: 85, y: 15, delay: 0.5, size: 'w-6 h-6' },
    { icon: Shield, x: 15, y: 70, delay: 1, size: 'w-7 h-7' },
    { icon: Globe, x: 80, y: 75, delay: 1.5, size: 'w-6 h-6' },
    { icon: Brain, x: 50, y: 10, delay: 2, size: 'w-10 h-10' },
    { icon: Sparkles, x: 90, y: 45, delay: 2.5, size: 'w-5 h-5' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((element, index) => {
        const Icon = element.icon
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
              rotateX: -90,
              rotateY: 0,
            }}
            animate={{ 
              opacity: [0, 0.6, 0.3, 0.6, 0],
              scale: [0, 1, 1.1, 1, 0],
              rotateX: [-90, 0, 15, 0, -90],
              rotateY: [0, 360, 720, 1080, 1440],
              y: [0, -20, -40, -20, 0],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut"
            }}
          >
            <div className="glass-red p-3 rounded-xl glow-red preserve-3d">
              <Icon className={`${element.size} text-red-400`} />
            </div>
            
            {/* Holographic scan lines */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
              animate={{
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )
      })}
      
      {/* Floating data streams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-red-500/50 via-red-500/20 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
            y: [0, -100, -200],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  )
}

export default HolographicElements