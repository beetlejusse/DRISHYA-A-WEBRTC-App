'use client'

import React from 'react'
import sideBarLinks from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export const SideBar = () => {
    const pathName = usePathname()

  return (
    <div className='sticy lext-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className="flex flex-col gap-10">
            {sideBarLinks.map((link) => {
                const isActive = pathName === link.route || pathName.startsWith(link.route)

                return (
                    //cn is used to add multiples and dynamc classnames
                    <Link href={link.route} key={link.label} className={cn('flex items-center gap-4 rounded-lg justify-start', {
                        'bg-blue-1': isActive,
                    })}>  
                        <Image 
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                        />
                        <p className='etxt-lg font-semibold max-lg:hidden'>
                            {link.label}
                        </p>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}