"use client"

import Header from "@/components/landing-page-components/Header"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0a1119] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.15),transparent_40%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.1),transparent_30%)]">
      <Header />
      <main className="pt-32 sm:pt-40 md:pt-48 lg:pt-60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-gray-800/60 border border-gray-700"
          >
            <span className="text-teal-400 font-medium text-sm sm:text-base">New Features Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight px-2"
          >
            Connect with clarity on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Drishya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Experience the future of video conferencing with crystal-clear quality, seamless collaboration, and
            cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 text-white font-bold rounded-2xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <Link href="/sign-in">Start Meeting</Link>
                <ChevronRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </motion.button>

            <motion.a
              href="https://github.com/beetlejusse/WEBRTC"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 .587l3.668 7.568L24 9.187l-6 5.845L19.335 24 12 20.897 4.665 24l1.335-8.968L0 9.187l7.332-.032L12 .587z"
                />
              </svg>
              <span className="text-sm sm:text-base">Star on GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
