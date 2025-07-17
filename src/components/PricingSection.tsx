import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
  popular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals getting started',
    icon: Zap,
    features: [
      '5 connected apps',
      'Basic AI assistance',
      '100 tasks per month',
      'Standard support',
      'Mobile app access'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For power users and small teams',
    icon: Crown,
    popular: true,
    features: [
      'Unlimited connected apps',
      'Advanced AI features',
      'Unlimited tasks',
      'Priority support',
      'Team collaboration',
      'Custom integrations',
      'Advanced analytics'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    price: '$49',
    period: 'per month',
    description: 'For growing businesses and teams',
    icon: Rocket,
    features: [
      'Everything in Pro',
      'Advanced security',
      'Admin controls',
      'SSO integration',
      'Custom branding',
      'API access',
      'Dedicated support',
      'SLA guarantee'
    ]
  }
]

const PricingSection: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

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
            <span className="holographic-text">Pricing</span> Plans
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Choose the perfect plan for your productivity needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            const isHovered = hoveredPlan === plan.id
            
            return (
              <motion.div
                key={plan.id}
                className={`
                  relative p-8 rounded-2xl transition-all duration-300
                  ${plan.popular ? 'glass-red glow-red scale-105' : 'glass'}
                  ${isHovered ? 'scale-105' : ''}
                `}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                whileHover={{ y: -10 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="glass-red px-4 py-2 rounded-full text-sm font-orbitron font-bold">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`
                    w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center
                    ${plan.popular ? 'glass' : 'glass-red'}
                  `}>
                    <Icon className="w-8 h-8 text-red-400" />
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-orbitron font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 font-rajdhani ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 font-rajdhani">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-gray-300 font-rajdhani">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`
                    w-full py-4 rounded-full font-rajdhani font-semibold text-lg
                    transition-all duration-300
                    ${plan.popular 
                      ? 'glass text-white hover:glow-red' 
                      : 'glass-red text-white hover:glow-red-intense'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.price === '$0' ? 'Get Started Free' : 'Choose Plan'}
                </motion.button>

                {/* Hover Effect Rings */}
                {isHovered && (
                  <>
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-2xl border border-red-500/30"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.5,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 font-rajdhani mb-6">
            Need a custom solution? We've got you covered.
          </p>
          <motion.button
            className="glass px-8 py-4 rounded-full font-rajdhani font-semibold text-lg border border-white/20 hover:border-red-500/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection