import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Shield, Users, Settings, Calendar, Phone } from 'lucide-react'

const EnterpriseSection: React.FC = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Data Privacy & Compliance',
      description: 'SOC 2, GDPR, HIPAA compliance with enterprise-grade security'
    },
    {
      icon: Users,
      title: 'Admin Controls & Access',
      description: 'Role-based permissions, user management, and audit trails'
    },
    {
      icon: Settings,
      title: 'API & Integration Support',
      description: 'Custom integrations, webhooks, and dedicated API access'
    }
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
            <span className="holographic-text">Enterprise</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Scale MemoMate across your organization with enterprise-grade features and support
          </p>
        </motion.div>

        {/* Enterprise Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {enterpriseFeatures.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={index}
                className="glass p-8 rounded-xl hover:glass-red transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 rounded-full glass-red flex items-center justify-center mb-6 group-hover:glow-red transition-all duration-300">
                  <Icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Demo Request Section */}
        <motion.div
          className="glass-red p-12 rounded-2xl text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-24 h-24 rounded-full glass mx-auto mb-6 flex items-center justify-center">
            <Building2 className="w-12 h-12 text-red-400" />
          </div>
          
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          
          <p className="text-gray-300 font-rajdhani text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how MemoMate can revolutionize 
            productivity across your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="glass px-8 py-4 rounded-full font-rajdhani font-semibold text-lg flex items-center justify-center space-x-2 border border-white/20 hover:border-red-500/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </motion.button>
            
            <motion.button
              className="glass px-8 py-4 rounded-full font-rajdhani font-semibold text-lg flex items-center justify-center space-x-2 border border-white/20 hover:border-red-500/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Contact Sales</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Enterprise Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '500+', label: 'Enterprise Clients' },
            { number: '99.99%', label: 'SLA Uptime' },
            { number: '24/7', label: 'Dedicated Support' },
            { number: '<1hr', label: 'Response Time' }
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

export default EnterpriseSection