import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import AuthModal from '../components/AuthModal'

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pendingCourseAccess, setPendingCourseAccess] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleAuthClick = () => {
    setShowAuthModal(true)
  }

  const handleCourseClick = () => {
    if (user) {
      navigate('/course')
    } else {
      setPendingCourseAccess(true)
      setShowAuthModal(true)
    }
  }

  const handleAuthSuccess = () => {
    if (pendingCourseAccess) {
      setPendingCourseAccess(false)
      navigate('/course')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen dark-gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">Vibe Coding</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn-secondary"
                >
                  Dashboard
                </button>
              ) : (
                <button
                  onClick={handleAuthClick}
                  className="btn-secondary"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero onAuthClick={handleAuthClick} onCourseClick={handleCourseClick} />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Your
              <span className="block">Coding Journey?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of students who have already transformed their lives through code. 
              Start building your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleCourseClick}
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </button>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false)
          setPendingCourseAccess(false)
        }}
        onAuthSuccess={handleAuthSuccess}
        redirectTo={pendingCourseAccess ? '/course' : undefined}
      />
    </div>
  )
}
