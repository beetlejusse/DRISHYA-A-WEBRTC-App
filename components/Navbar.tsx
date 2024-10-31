'use client'
import Link from 'next/link'
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import MobileNav from './MobileNav'

export const Navbar = () => {

  const words = [{
    text: "Drishya"
  }]

  return (
    <nav className="flex flex-between z-50 w-full bg-dark-1px-6 py-4 lg:px-10">
      <Link href={"/"} className='flex items-center gap-1'><TypewriterEffectSmooth words={words} /></Link>

      {/* for mobile compatiblity */}
      <div className='flex-between gap-5'>
        {/* clerk user management */}

        <MobileNav />
      </div>
    </nav>
  )
}