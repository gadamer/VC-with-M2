import React from 'react'
import { motion } from 'framer-motion'
import { Play, Star, Users, Award, Sparkles } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HeroProps {
  onAuthClick: () => void
  onCourseClick: () => void
}

export default function Hero({ onAuthClick, onCourseClick }: HeroProps) {
  const { user } = useAuth()

  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-2 text-primary-400"
              >
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">Transform Your Creativity</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="gradient-text">Vibe Coding</span>
                <br />
                <span className="text-white">with Milo</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
              >
                Confidently Transform Your Creativity into Code and Profit from Your Passion
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={user ? onCourseClick : onAuthClick}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>{user ? 'Start Learning' : 'Get Started Free'}</span>
              </button>
              
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Preview</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">4.9/5 rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">2,500+ students</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coding workspace"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent rounded-2xl"></div>
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-accent-400" />
                  <div>
                    <p className="font-semibold text-white">Certificate Ready</p>
                    <p className="text-sm text-gray-300">Industry recognized</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full opacity-60 animate-bounce-gentle blur-sm"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-accent-400/40 to-primary-400/40 rounded-full opacity-70 animate-bounce-gentle blur-sm" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full opacity-50 animate-bounce-gentle blur-sm" style={{ animationDelay: '0.5s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
