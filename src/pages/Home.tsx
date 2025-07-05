import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import AuthModal from '../components/AuthModal'
import CourseModal from '../components/CourseModal'

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [courseModalOpen, setCourseModalOpen] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleAuthSuccess = () => {
    setAuthModalOpen(false)
    setCourseModalOpen(true)
  }

  const handleCourseClick = () => {
    if (user) {
      setCourseModalOpen(true)
    } else {
      setAuthModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen">
      <Header onAuthClick={() => setAuthModalOpen(true)} />
      <Hero 
        onAuthClick={() => setAuthModalOpen(true)}
        onCourseClick={handleCourseClick}
      />
      <Features />
      <Testimonials />
      <Footer />
      
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
      
      <CourseModal
        isOpen={courseModalOpen}
        onClose={() => setCourseModalOpen(false)}
      />
    </div>
  )
}
