import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Trophy, Users, BookOpen, Star } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Learn by Doing',
    description: 'Build real projects from day one with hands-on coding exercises and practical applications.',
    gradient: 'from-primary-400 to-primary-600'
  },
  {
    icon: Zap,
    title: 'Fast Track Learning',
    description: 'Accelerated curriculum designed to get you coding confidently in weeks, not months.',
    gradient: 'from-accent-400 to-accent-600'
  },
  {
    icon: Trophy,
    title: 'Industry Recognition',
    description: 'Earn certificates that employers value and showcase your skills with portfolio projects.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join thousands of learners in our supportive community with mentorship and peer learning.',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'From basics to advanced concepts, master everything you need for a successful coding career.',
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Star,
    title: 'Lifetime Access',
    description: 'Get lifetime access to all course materials, updates, and new content as we expand.',
    gradient: 'from-purple-400 to-pink-600'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose</span>
            <span className="text-white"> Vibe Coding?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our unique approach combines practical learning with creative expression, 
            helping you build both technical skills and artistic vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
