import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Phone, Video, Calendar, FileText, Users } from 'lucide-react'

const MessageApp3D: React.FC = () => {
  const appIcons = [
    { icon: MessageSquare, name: 'WhatsApp', color: '#25D366', delay: 0 },
    { icon: Phone, name: 'Gmail', color: '#EA4335', delay: 0.1 },
    { icon: Video, name: 'Zoom', color: '#2D8CFF', delay: 0.2 },
    { icon: Calendar, name: 'Calendar', color: '#4285F4', delay: 0.3 },
    { icon: FileText, name: 'Notion', color: '#000000', delay: 0.4 },
    { icon: Users, name: 'Slack', color: '#4A154B', delay: 0.5 }
  ]

  return (
    <div className="relative w-80 h-96 mx-auto perspective-1000">
      {/* Phone Frame */}
      <motion.div
        className="relative w-full h-full glass-red rounded-3xl p-6 preserve-3d"
        initial={{ rotateY: -15, rotateX: 10 }}
        animate={{ 
          rotateY: [-15, 15, -15],
          rotateX: [10, -5, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-black/80 rounded-2xl p-4 relative overflow-hidden">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-4">
            <span className="font-rajdhani">9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
              <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
              <div className="w-4 h-2 bg-white rounded-sm" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-white font-orbitron font-bold text-lg">MemoMate</h3>
            <p className="text-gray-400 font-rajdhani text-sm">AI Productivity Hub</p>
          </div>

          {/* App Grid */}
          <div className="grid grid-cols-3 gap-4">
            {appIcons.map((app, index) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.name}
                  className="relative"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: app.delay,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center glass cursor-pointer"
                    style={{ backgroundColor: `${app.color}20` }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      boxShadow: `0 0 20px ${app.color}50`
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color: app.color }}
                    />
                  </motion.div>
                  
                  {/* App Name */}
                  <div className="text-center mt-2">
                    <span className="text-white text-xs font-rajdhani">
                      {app.name}
                    </span>
                  </div>

                  {/* Connection Lines */}
                  <motion.div
                    className="absolute top-8 left-8 w-px h-8 bg-gradient-to-b from-red-500/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: app.delay + 0.3 }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* AI Integration Indicator */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="glass-red px-4 py-2 rounded-full flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-white text-xs font-rajdhani font-semibold">
                AI ACTIVE
              </span>
            </div>
          </motion.div>

          {/* Floating Data Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                x: [0, Math.random() * 20 - 10, 0],
                y: [0, Math.random() * 20 - 10, 0],
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

        {/* Holographic Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 pointer-events-none" />
        
        {/* Side Reflection */}
        <div className="absolute -right-2 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full" />
      </motion.div>

      {/* Integration Orbits */}
      {appIcons.slice(0, 4).map((app, index) => {
        const angle = (index * Math.PI * 2) / 4
        const radius = 180
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const Icon = app.icon

        return (
          <motion.div
            key={`orbit-${index}`}
            className="absolute w-8 h-8 rounded-full glass flex items-center justify-center"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }}
          >
            <Icon className="w-4 h-4 text-red-400" />
            
            {/* Connection Line */}
            <div
              className="absolute w-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
              style={{
                height: `${radius}px`,
                transform: `rotate(${-angle + Math.PI}rad)`,
                transformOrigin: 'top center',
                top: '50%',
                left: '50%',
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default MessageApp3D