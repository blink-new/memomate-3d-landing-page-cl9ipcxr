import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code, Zap, Database, Globe, MessageSquare, Calendar, Mail } from 'lucide-react'

const CodeInterface3D: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const codeLines = useMemo(() => [
    "const agent = new MemoMateAgent();",
    "agent.autoSync('whatsapp', 'gmail', 'calendar');",
    "agent.extractTasks().notifyUser();",
    "",
    "// API Integration",
    "POST /api/whatsapp/sync",
    "POST /api/calendar/create-task",
    "POST /api/gmail/auto-reply",
    "",
    "// AI Processing",
    "Task extracted: Team Meeting at 4PM",
    "Auto-reply sent to John via Gmail",
    "Reminder set in Google Calendar",
    "",
    "// Neural Network Active",
    "Processing... 🧠",
    "Sync Complete ✓"
  ], [])

  const integrationIcons = [
    { icon: MessageSquare, name: 'whatsapp', color: '#25D366', position: { x: -120, y: -80 } },
    { icon: Mail, name: 'gmail', color: '#EA4335', position: { x: 120, y: -80 } },
    { icon: Calendar, name: 'calendar', color: '#4285F4', position: { x: -120, y: 80 } },
    { icon: Globe, name: 'notion', color: '#000000', position: { x: 120, y: 80 } }
  ]

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine]
        if (typingText.length < line.length) {
          setTypingText(prev => prev + line[typingText.length])
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
            setTypingText('')
          }, 1000)
        }
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentLine(0)
          setTypingText('')
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [currentLine, typingText, codeLines])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="relative w-full h-96 flex items-center justify-center perspective-1000">
      {/* Main Code Interface */}
      <motion.div
        className="relative w-96 h-80 preserve-3d"
        initial={{ rotateY: -10, rotateX: 5 }}
        animate={{ 
          rotateY: [-10, 10, -10],
          rotateX: [5, -5, 5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          rotateY: 0,
          rotateX: 0,
          transition: { duration: 0.5 }
        }}
      >
        {/* Holographic Code Panel */}
        <motion.div
          className="w-full h-full glass-red rounded-2xl p-6 relative overflow-hidden border border-red-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-red-500/20">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-red-400" />
              <span className="font-orbitron text-sm text-white">MemoMate Terminal</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Code Content */}
          <div className="font-mono text-sm space-y-1 h-64 overflow-hidden">
            {/* Previous lines */}
            {codeLines.slice(0, currentLine).map((line, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gray-500 w-6 text-right">{index + 1}</span>
                <span className={getLineColor(line)}>{line}</span>
              </motion.div>
            ))}
            
            {/* Current typing line */}
            {currentLine < codeLines.length && (
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-gray-500 w-6 text-right">{currentLine + 1}</span>
                <span className={getLineColor(codeLines[currentLine])}>
                  {typingText}
                  {showCursor && <span className="text-red-400 animate-pulse">|</span>}
                </span>
              </motion.div>
            )}
          </div>

          {/* Holographic Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 pointer-events-none rounded-2xl" />
          
          {/* Scanning Line Effect */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"
            animate={{
              top: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Matrix-style Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-4 bg-red-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* 3D Depth Layers */}
        <div className="absolute inset-0 -z-10 transform translate-z-[-20px] scale-105">
          <div className="w-full h-full glass rounded-2xl opacity-30" />
        </div>
        <div className="absolute inset-0 -z-20 transform translate-z-[-40px] scale-110">
          <div className="w-full h-full glass rounded-2xl opacity-15" />
        </div>
      </motion.div>

      {/* Integration Icons with Beam Effects */}
      {integrationIcons.map((integration, index) => {
        const Icon = integration.icon
        const isActive = typingText.includes(integration.name)
        
        return (
          <motion.div
            key={integration.name}
            className="absolute"
            style={{
              left: `calc(50% + ${integration.position.x}px)`,
              top: `calc(50% + ${integration.position.y}px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Integration Icon */}
            <motion.div
              className={`w-12 h-12 rounded-full glass flex items-center justify-center ${
                isActive ? 'ring-2 ring-red-400 glow-red' : ''
              }`}
              animate={isActive ? {
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 rgba(220, 38, 38, 0)',
                  '0 0 20px rgba(220, 38, 38, 0.5)',
                  '0 0 0 rgba(220, 38, 38, 0)'
                ]
              } : {}}
              transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
            >
              <Icon 
                className="w-6 h-6" 
                style={{ color: isActive ? '#DC2626' : integration.color }}
              />
            </motion.div>

            {/* Connection Beam */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{
                    width: Math.sqrt(integration.position.x ** 2 + integration.position.y ** 2),
                    transform: `translate(-50%, -50%) rotate(${Math.atan2(-integration.position.y, -integration.position.x)}rad)`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-px bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
                  
                  {/* Beam Particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-0 w-1 h-1 bg-red-400 rounded-full"
                      style={{ left: `${i * 20}%` }}
                      animate={{
                        x: [0, 50, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}

      {/* Floating Data Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
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

      {/* Neural Network Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#DC2626" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Status Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="glass-red px-4 py-2 rounded-full flex items-center space-x-2">
          <motion.div
            className="w-2 h-2 bg-red-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <span className="text-white text-sm font-orbitron font-semibold">
            AI NEURAL CORE
          </span>
        </div>
      </motion.div>
    </div>
  )
}

// Helper function to color code lines
const getLineColor = (line: string): string => {
  if (line.startsWith('//')) return 'text-gray-400'
  if (line.startsWith('const') || line.startsWith('POST')) return 'text-red-400'
  if (line.includes('agent.')) return 'text-blue-300'
  if (line.includes('Task extracted') || line.includes('Auto-reply') || line.includes('Reminder')) return 'text-green-400'
  if (line.includes('Processing') || line.includes('🧠')) return 'text-yellow-400'
  if (line.includes('✓')) return 'text-green-500'
  return 'text-white'
}

export default CodeInterface3D