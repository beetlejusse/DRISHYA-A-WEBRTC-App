import { CallList } from '@/components/CallList'
import React from 'react'

export default function Recordings  ()  {
  return (
    <div className='flex size-fll flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Recordings
      </h1>

      <CallList type='recordings' />
    </div>
  )
}
