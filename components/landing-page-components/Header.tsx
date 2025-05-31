"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed w-full z-50 top-4 flex justify-center px-4">
      <motion.header
        className="w-full max-w-5xl backdrop-blur-2xl rounded-3xl border shadow-2xl shadow-teal-500/5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="#" className="relative group">
                <span className="text-3xl font-black text-white tracking-tight relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-300 transition-all duration-300">
                  DRISHYA
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-300 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              {/* <motion.div
                className="relative px-8 py-3 rounded-2xl bg-gray-800 border border-gray-700 group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <NavLink href="">
                  <span className="text-gray-200 font-medium text-lg transition-colors duration-300 relative z-10">
                    Modern Video Conferencing
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
              </motion.div> */}

              <motion.button
                className="relative px-7 py-3 bg-teal-500 text-white font-bold rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  <Link href="/sign-in">Get Started</Link>
                  <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.button>
            </div>

            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-2xl bg-gray-800 border border-gray-700 text-gray-300 hover:text-teal-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              className="md:hidden border-t border-gray-800 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="py-6 space-y-4">
                <motion.div
                  className="relative px-6 py-4 rounded-2xl bg-gray-800 border border-gray-700 group cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <MobileNavLink href="">
                    <span className="text-gray-200 font-medium text-lg transition-colors duration-300 relative z-10">
                      Modern Video Conferencing
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </MobileNavLink>
                </motion.div>

                <motion.button
                  className="relative w-full px-6 py-4 bg-teal-500 text-white font-bold rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started
                    <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </div>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block transition-all duration-300 ease-out">
    {children}
  </Link>
)

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="block transition-all duration-300 ease-out">
    {children}
  </Link>
)

export default Header
