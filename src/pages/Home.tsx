import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import AuthModal from '../components/AuthModal'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [showCourse, setShowCourse] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // If user is authenticated and came from a protected route, redirect to dashboard
    if (user && location.state?.from) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate, location.state])

  const handleAuthClick = () => {
    if (user) {
      navigate('/dashboard')
    } else {
      setAuthModalOpen(true)
    }
  }

  const handleCourseClick = () => {
    if (user) {
      setShowCourse(true)
    } else {
      setAuthModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen dark-gradient-bg">
      <Header onAuthClick={handleAuthClick} />
      <Hero onAuthClick={handleAuthClick} onCourseClick={handleCourseClick} />
      <Features />
      <Testimonials />
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />

      {/* Course Modal */}
      {showCourse && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setShowCourse(false)}
              className="glass-effect p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
              aria-label="Close course"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <iframe
            src="https://app.courseau.co/projects/aca90ee7-81a5-4a86-85db-a5fb10469735/preview?mode=course"
            style={{ border: 'none', height: '100%', width: '100%' }}
            allowTransparency={true}
            title="Vibe Coding Course"
          />
        </div>
      )}
    </div>
  )
}
