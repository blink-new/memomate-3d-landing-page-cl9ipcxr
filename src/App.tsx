import React, { useState } from 'react'
import { motion } from 'framer-motion'
import HolographicNavigation from './components/HolographicNavigation'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CommunitySection from './components/CommunitySection'
import PricingSection from './components/PricingSection'
import EnterpriseSection from './components/EnterpriseSection'
import LearnSection from './components/LearnSection'
import SecuritySection from './components/SecuritySection'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import HolographicElements from './components/HolographicElements'

type Page = 'home' | 'community' | 'pricing' | 'enterprise' | 'learn'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            <SecuritySection />
          </>
        )
      case 'community':
        return <CommunitySection />
      case 'pricing':
        return <PricingSection />
      case 'enterprise':
        return <EnterpriseSection />
      case 'learn':
        return <LearnSection />
      default:
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            <SecuritySection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Holographic Elements */}
      <HolographicElements />
      
      {/* Neural Grid Overlay */}
      <div className="fixed inset-0 neural-grid opacity-20 pointer-events-none" />
      
      {/* Holographic Navigation */}
      <HolographicNavigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      
      {/* Main Content */}
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {renderCurrentPage()}
      </motion.main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App