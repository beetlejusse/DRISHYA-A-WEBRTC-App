'use client'
import Header from '@/components/landing-page-components/Header'
import Hero from '@/components/landing-page-components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative">
      <div className="relative z-10">
        {/* <Header /> */}
        <main>
          <Hero />
        </main>
      </div>
    </div>
  )
}

