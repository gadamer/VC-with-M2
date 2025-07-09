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
  const [pendingCourseAccess, setPendingCourseAccess] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // If user is authenticated and came from a protected route, redirect to dashboard
    if (user && location.state?.from) {
      navigate('/dashboard', { replace: true })
    }
    
    // If user just authenticated and was trying to access course, navigate to course page
    if (user && pendingCourseAccess) {
      navigate('/course')
      setPendingCourseAccess(false)
    }
  }, [user, navigate, location.state, pendingCourseAccess])

  const handleAuthClick = () => {
    if (user) {
      navigate('/dashboard')
    } else {
      setAuthModalOpen(true)
    }
  }

  const handleCourseClick = () => {
    if (user) {
      navigate('/course')
    } else {
      setPendingCourseAccess(true)
      setAuthModalOpen(true)
    }
  }

  const handleAuthSuccess = () => {
    // This will be called after successful authentication
    // The useEffect will handle navigation if pendingCourseAccess is true
  }

  return (
    <div className="min-h-screen dark-gradient-bg">
      <Header onAuthClick={handleAuthClick} />
      <Hero onAuthClick={handleAuthClick} onCourseClick={handleCourseClick} />
      <Features />
      <Testimonials />
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => {
          setAuthModalOpen(false)
          setPendingCourseAccess(false)
        }}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  )
}
