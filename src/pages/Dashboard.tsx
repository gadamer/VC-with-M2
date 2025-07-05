import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { Play, BookOpen, Award, Clock, User, Settings, LogOut } from 'lucide-react'
import CourseModal from '../components/CourseModal'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [courseModalOpen, setCourseModalOpen] = useState(false)

  const stats = [
    { label: 'Lessons Completed', value: '12/45', icon: BookOpen },
    { label: 'Hours Learned', value: '24.5', icon: Clock },
    { label: 'Certificates', value: '2', icon: Award },
    { label: 'Projects Built', value: '5', icon: Play }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">{user?.email}</span>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => signOut()}
                className="p-2 text-gray-400 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-gray-600">
            Ready to continue your coding journey? Let's pick up where you left off.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Course Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Continue Learning
                </h3>
                <div className="text-sm text-gray-500">
                  Progress: 27%
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>JavaScript Fundamentals</span>
                  <span>12/45 lessons</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full" style={{ width: '27%' }}></div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCourseModalOpen(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Continue Course</span>
                </button>
                
                <button className="btn-secondary">
                  View All Lessons
                </button>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card p-8 mt-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Completed: Variables and Data Types', time: '2 hours ago' },
                  { title: 'Started: Functions and Scope', time: '1 day ago' },
                  { title: 'Earned: JavaScript Basics Certificate', time: '3 days ago' },
                  { title: 'Completed: HTML & CSS Fundamentals', time: '1 week ago' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-900">{activity.title}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Up</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Play className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Arrays & Objects</p>
                    <p className="text-sm text-gray-600">15 min</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Play className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">DOM Manipulation</p>
                    <p className="text-sm text-gray-600">22 min</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-medium text-gray-900">First Steps</p>
                    <p className="text-sm text-gray-600">Completed first lesson</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">Quick Learner</p>
                    <p className="text-sm text-gray-600">5 lessons in one day</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CourseModal
        isOpen={courseModalOpen}
        onClose={() => setCourseModalOpen(false)}
      />
    </div>
  )
}
