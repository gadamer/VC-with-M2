import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, BookOpen, Clock, Users, Star, Maximize2, Minimize2, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Course() {
  const [showCourseModal, setShowCourseModal] = useState(false)
  const [isModalMaximized, setIsModalMaximized] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  const courseStats = [
    { icon: BookOpen, label: 'Lessons', value: '24' },
    { icon: Clock, label: 'Duration', value: '12 hours' },
    { icon: Users, label: 'Students', value: '2,847' },
    { icon: Star, label: 'Rating', value: '4.9' },
  ]

  const modules = [
    {
      title: 'Getting Started',
      lessons: 4,
      duration: '45 min',
      description: 'Introduction to coding fundamentals and setting up your environment'
    },
    {
      title: 'HTML Foundations',
      lessons: 6,
      duration: '2 hours',
      description: 'Learn the building blocks of web pages with HTML'
    },
    {
      title: 'CSS Styling',
      lessons: 8,
      duration: '3 hours',
      description: 'Make your websites beautiful with CSS styling and layouts'
    },
    {
      title: 'JavaScript Basics',
      lessons: 6,
      duration: '2.5 hours',
      description: 'Add interactivity to your websites with JavaScript'
    }
  ]

  return (
    <div className="min-h-screen dark-gradient-bg">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold gradient-text">Vibe Coding with Milo</h1>
            </div>
            <div className="text-gray-300 text-sm">
              Welcome, {user?.email}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Complete Coding Course
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Transform your creativity into code and profit from your passion
                  </p>
                </div>
                <button
                  onClick={() => setShowCourseModal(true)}
                  className="btn-primary mt-4 md:mt-0 md:ml-6"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {courseStats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-dark-800/30 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Modules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="p-6 bg-dark-800/30 rounded-lg border border-dark-700 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-300 mb-3">{module.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      <button className="text-primary-400 hover:text-primary-300 transition-colors ml-4">
                        <Play className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Overall Progress</span>
                    <span className="text-primary-400">45%</span>
                  </div>
                  <div className="bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full w-[45%]" />
                  </div>
                </div>
                <div className="pt-4 border-t border-dark-700">
                  <div className="text-sm text-gray-400 mb-2">Next up:</div>
                  <div className="text-white font-medium">CSS Flexbox Layouts</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowCourseModal(true)}
                  className="w-full btn-primary text-sm"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </button>
                <button className="w-full btn-secondary text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Download Resources
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Join our community for support and discussions.
              </p>
              <button className="w-full btn-secondary text-sm">
                Join Discord
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Modal - Pop-out style */}
      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCourseModal(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
              isModalMaximized 
                ? 'w-[95vw] h-[95vh]' 
                : 'w-full max-w-5xl h-[80vh]'
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-t-2xl">
              <h2 className="text-xl font-semibold text-gray-900">
                Vibe Coding with Milo - Complete Course
              </h2>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsModalMaximized(!isModalMaximized)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title={isModalMaximized ? 'Restore' : 'Maximize'}
                >
                  {isModalMaximized ? (
                    <Minimize2 className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Maximize2 className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                
                <button
                  onClick={() => setShowCourseModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Close course"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Course Content */}
            <div className="w-full h-full bg-white rounded-b-2xl overflow-hidden">
              <iframe 
                src="https://app.courseau.co/projects/aca90ee7-81a5-4a86-85db-a5fb10469735/preview?mode=course" 
                style={{ 
                  border: 'none', 
                  height: isModalMaximized ? 'calc(95vh - 73px)' : 'calc(80vh - 73px)', 
                  width: '100%' 
                }} 
                allowTransparency={true}
                title="Vibe Coding Course"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
