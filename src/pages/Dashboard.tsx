import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, BookOpen, Trophy, Clock, User, LogOut, ArrowRight } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const stats = [
    { label: 'Lessons Completed', value: '12/24', icon: BookOpen, color: 'from-primary-500 to-primary-600' },
    { label: 'Hours Learned', value: '18.5', icon: Clock, color: 'from-accent-500 to-accent-600' },
    { label: 'Certificates Earned', value: '2', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
  ]

  const recentLessons = [
    { title: 'HTML Fundamentals', progress: 100, duration: '45 min' },
    { title: 'CSS Styling Basics', progress: 85, duration: '60 min' },
    { title: 'JavaScript Introduction', progress: 60, duration: '75 min' },
    { title: 'React Components', progress: 30, duration: '90 min' },
  ]

  return (
    <div className="min-h-screen dark-gradient-bg">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">{user?.email}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
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
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-gray-300">Ready to continue your coding journey?</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6 mb-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Continue Learning</h3>
              <div className="space-y-4">
                {recentLessons.map((lesson, index) => (
                  <div key={lesson.title} className="flex items-center justify-between p-4 bg-dark-800/30 rounded-lg border border-dark-700">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{lesson.title}</h4>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex-1 bg-dark-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${lesson.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">{lesson.progress}%</span>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-sm text-gray-400">{lesson.duration}</p>
                      <button className="mt-2 text-primary-400 hover:text-primary-300 transition-colors">
                        <Play className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Full Course Access</h3>
              <p className="text-gray-300 mb-6">
                Access the complete Vibe Coding course with all lessons, projects, and resources.
              </p>
              <button
                onClick={() => navigate('/course')}
                className="btn-primary w-full"
              >
                <Play className="h-5 w-5 mr-2" />
                Go to Course
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Next Milestone</h3>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-medium text-white mb-2">JavaScript Master</h4>
                <p className="text-sm text-gray-400 mb-4">Complete 5 more lessons</p>
                <div className="bg-dark-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent-500 to-primary-500 h-2 rounded-full w-3/4" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300 text-sm mb-4">
                Join our Discord community to connect with other learners and get help.
              </p>
              <button className="btn-secondary w-full text-sm">
                Join Discord
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
