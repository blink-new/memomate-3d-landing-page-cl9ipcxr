import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Users, CreditCard, Building2, BookOpen, LogIn } from 'lucide-react'

type Page = 'home' | 'community' | 'pricing' | 'enterprise' | 'learn'

interface NavigationProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

const navigationItems = [
  { id: 'home' as Page, label: 'Home', icon: Home },
  { id: 'community' as Page, label: 'Community', icon: Users },
  { id: 'pricing' as Page, label: 'Pricing', icon: CreditCard },
  { id: 'enterprise' as Page, label: 'Enterprise', icon: Building2 },
  { id: 'learn' as Page, label: 'Learn', icon: BookOpen },
]

const HolographicNavigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-6">
        {/* Logo/Brand */}
        <motion.div
          className="mr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-orbitron text-2xl font-bold holographic-text">
            MemoMate
          </div>
        </motion.div>

        {/* Navigation Orbs */}
        <div className="flex items-center space-x-4">
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            const isActive = currentPage === item.id
            const isHovered = hoveredItem === item.id

            return (
              <motion.button
                key={item.id}
                className={`
                  relative group perspective-1000
                  ${isActive ? 'z-20' : 'z-10'}
                `}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => onPageChange(item.id)}
              >
                {/* Holographic Orb */}
                <motion.div
                  className={`
                    w-16 h-16 rounded-full glass preserve-3d
                    flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? 'glass-red glow-red' : 'glass'}
                    ${isHovered ? 'scale-110' : 'scale-100'}
                  `}
                  animate={{
                    rotateY: isHovered ? 180 : 0,
                    rotateX: isHovered ? 15 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Front Face */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center preserve-3d"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <Icon 
                      className={`
                        w-6 h-6 transition-colors duration-300
                        ${isActive ? 'text-red-400' : 'text-white'}
                      `} 
                    />
                  </motion.div>

                  {/* Back Face */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center preserve-3d"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="text-xs font-orbitron text-red-400 font-semibold">
                      {item.label}
                    </div>
                  </motion.div>

                  {/* Glow Ring */}
                  {(isActive || isHovered) && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-500/50"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ 
                        scale: isHovered ? 1.3 : 1.1, 
                        opacity: isHovered ? 0.8 : 0.5 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                {/* Floating Label */}
                <motion.div
                  className={`
                    absolute -bottom-8 left-1/2 transform -translate-x-1/2
                    text-xs font-rajdhani text-white/70
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  {item.label}
                </motion.div>

                {/* Neural Connection Lines */}
                {isActive && (
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-24 h-24 border border-red-500/30 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.7,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Login Button */}
        <motion.button
          className="ml-8 glass-red px-6 py-3 rounded-full font-rajdhani font-semibold text-white hover:glow-red transition-all duration-300 flex items-center space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </motion.button>
      </div>
    </nav>
  )
}

export default HolographicNavigation