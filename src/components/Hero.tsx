import React from 'react'
import { motion } from 'framer-motion'
import { Play, Star, Users, Award } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HeroProps {
  onAuthClick: () => void
  onCourseClick: () => void
}

export default function Hero({ onAuthClick, onCourseClick }: HeroProps) {
  const { user } = useAuth()

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="gradient-text">Vibe Coding</span>
                <br />
                <span className="text-gray-900">with Milo</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
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
                <span className="text-gray-600">4.9/5 rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary-600" />
                <span className="text-gray-600">2,500+ students</span>
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
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-accent-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Certificate Ready</p>
                    <p className="text-sm text-gray-600">Industry recognized</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-30 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
