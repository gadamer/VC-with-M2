import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Users, Trophy, BookOpen, Rocket } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Hands-On Projects',
    description: 'Build real applications from day one with guided project-based learning that builds your portfolio.'
  },
  {
    icon: Zap,
    title: 'Fast-Track Learning',
    description: 'Skip the fluff and focus on what matters. Learn practical coding skills in weeks, not years.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a vibrant community of learners and get help whenever you need it from peers and mentors.'
  },
  {
    icon: Trophy,
    title: 'Industry Recognition',
    description: 'Earn certificates that employers recognize and showcase your skills with confidence.'
  },
  {
    icon: BookOpen,
    title: 'Beginner Friendly',
    description: 'No prior experience needed. Start from absolute zero and build up to professional-level skills.'
  },
  {
    icon: Rocket,
    title: 'Career Ready',
    description: 'Learn the exact skills and tools used by professional developers in the industry today.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Vibe Coding</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed the perfect learning experience for complete beginners who want to become confident coders
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
              className="card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
