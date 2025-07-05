import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2, Minimize2 } from 'lucide-react'

interface CourseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CourseModal({ isOpen, onClose }: CourseModalProps) {
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`relative bg-white rounded-2xl shadow-2xl ${
              isFullscreen 
                ? 'w-full h-full max-w-none max-h-none rounded-none' 
                : 'w-full max-w-6xl h-[80vh]'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Vibe Coding with Milo - Complete Course
              </h2>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-5 w-5" />
                  ) : (
                    <Maximize2 className="h-5 w-5" />
                  )}
                </button>
                
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Close course"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="w-full h-full">
              <iframe 
                src="https://app.courseau.co/projects/dd809d68-0fea-4d38-86d0-e028b55ca531/preview?mode=course" 
                style={{ 
                  border: 'none', 
                  height: isFullscreen ? 'calc(100vh - 73px)' : 'calc(80vh - 73px)', 
                  width: '100%' 
                }} 
                allowTransparency={true}
                title="Vibe Coding Course"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
