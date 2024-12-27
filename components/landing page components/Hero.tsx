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
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
            <Link href="/auth/sign-in">
              Get Started
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

