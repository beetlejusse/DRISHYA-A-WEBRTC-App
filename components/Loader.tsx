import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
        <Loader2 />
    </div>
  )
}

export default Loader