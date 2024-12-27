'use client'
import { motion } from 'framer-motion'
import { Video, Shield, Users, Zap } from 'lucide-react'

const features = [
  {
    name: 'High-Quality Video',
    description: 'Crystal clear video conferencing with adaptive quality.',
    icon: Video,
  },
  {
    name: 'Secure Connections',
    description: 'End-to-end encryption for all your calls and meetings.',
    icon: Shield,
  },
  {
    name: 'Group Collaboration',
    description: 'Seamless collaboration tools for team productivity.',
    icon: Users,
  },
  {
    name: 'Low Latency',
    description: 'Real-time communication with minimal delay.',
    icon: Zap,
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A better way to connect
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            DRISHYA provides cutting-edge features for seamless video conferencing and collaboration.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Features

