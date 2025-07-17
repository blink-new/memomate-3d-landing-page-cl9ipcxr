import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Enterprise', 'API']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Blog', 'Press']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help Center', 'Community', 'Status']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Compliance']
    }
  ]

  return (
    <footer className="relative py-20 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-orbitron text-2xl font-bold holographic-text mb-4">
              MemoMate
            </div>
            <p className="text-gray-400 font-rajdhani text-lg mb-6 max-w-md">
              Your intelligent productivity OS. Powered by AI, synced to your life.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-red transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron font-bold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 font-rajdhani hover:text-red-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 font-rajdhani mb-4 md:mb-0">
            © 2024 MemoMate. All rights reserved.
          </div>
          
          <motion.div
            className="flex items-center space-x-2 text-gray-400 font-rajdhani"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>by the MemoMate team</span>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer