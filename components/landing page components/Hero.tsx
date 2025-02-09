'use client'
import { motion } from 'framer-motion'
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect Visually with DRISHYA
        </motion.h1>
        <motion.p 
          className="mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience seamless video conferencing like never before. Crystal clear, secure, and feature-rich.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
            <Link href="/sign-in">
              Get Started
            </Link>
          </button>
          <motion.a 
            href="https://github.com/beetlejusse/WEBRTC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 .587l3.668 7.568L24 9.187l-6 5.845L19.335 24 12 20.897 4.665 24l1.335-8.968L0 9.187l7.332-.032L12 .587z" />
            </svg>
            Star on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;
